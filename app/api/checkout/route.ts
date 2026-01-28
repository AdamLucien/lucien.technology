import { NextResponse } from "next/server";
import { z } from "zod";
import { services } from "@/content/services";
import { prisma } from "@/lib/prisma";
import { stripe } from "@/lib/stripe";
import { brand } from "@/lib/brand";
import { signReceiptToken } from "@/lib/receipt";

const checkoutSchema = z.object({
  serviceSlug: z.string().min(1),
});

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const result = checkoutSchema.safeParse(payload);

    if (!result.success) {
      return NextResponse.json({ ok: false }, { status: 400 });
    }

    const service = services.find((item) => item.slug === result.data.serviceSlug);

    if (!service) {
      return NextResponse.json({ ok: false }, { status: 404 });
    }

    const purchaseType = service.purchaseType;
    if (purchaseType !== "deposit") {
      return NextResponse.json(
        {
          ok: true,
          redirectUrl: `/request-scope?service=${service.slug}&mode=${service.defaultMode}`,
        },
        { status: 200 },
      );
    }

    if (!stripe || !process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json(
        {
          ok: true,
          redirectUrl: `/request-scope?service=${service.slug}&mode=${service.defaultMode}&fallback=stripe`,
        },
        { status: 200 },
      );
    }

    const serviceRecord = await prisma.service.findUnique({
      where: { slug: service.slug },
    });

    const depositAmountCents = 250000;

    const order = await prisma.order.create({
      data: {
        serviceId: serviceRecord?.id ?? null,
        status: "pending",
        purchaseType: "deposit",
        amountCents: depositAmountCents,
        currency: "EUR",
      },
    });

    const token = signReceiptToken(order.id);
    const origin = request.headers.get("origin") ?? `https://${brand.domain}`;

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: `${service.title} Deposit`,
            },
            unit_amount: depositAmountCents,
          },
          quantity: 1,
        },
      ],
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}&order=${order.id}&token=${token}`,
      cancel_url: `${origin}/marketplace/${service.slug}`,
      metadata: {
        orderId: order.id,
        serviceSlug: service.slug,
      },
    });

    await prisma.order.update({
      where: { id: order.id },
      data: {
        stripeSessionId: session.id,
        receiptToken: token,
      },
    });

    return NextResponse.json({ ok: true, redirectUrl: session.url }, { status: 200 });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
