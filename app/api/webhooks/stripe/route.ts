import type Stripe from "stripe";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { stripe } from "@/lib/stripe";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const signature = request.headers.get("stripe-signature");

  if (!stripe || !process.env.STRIPE_WEBHOOK_SECRET || !signature) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const body = await request.text();

  let event;
  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET,
    );
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const orderId = session.metadata?.orderId;

    if (!orderId) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    const existing = await prisma.payment.findUnique({
      where: { stripeEventId: event.id },
    });

    if (existing) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    const order = await prisma.order.findUnique({ where: { id: orderId } });
    if (!order) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    let customerRecord = null;
    if (session.customer_details?.email) {
      customerRecord = await prisma.customer.upsert({
        where: { email: session.customer_details.email },
        update: {
          name: session.customer_details.name ?? undefined,
        },
        create: {
          name: session.customer_details.name ?? "Client",
          email: session.customer_details.email,
          organization: session.customer_details.name ?? "",
        },
      });
    }

    await prisma.order.update({
      where: { id: orderId },
      data: {
        status: "paid",
        stripePaymentIntentId: session.payment_intent?.toString() ?? null,
        stripeSessionId: session.id,
        customerId: customerRecord?.id ?? order.customerId,
      },
    });

    await prisma.payment.create({
      data: {
        orderId,
        status: "paid",
        provider: "stripe",
        amountCents: order.amountCents,
        currency: order.currency,
        stripePaymentIntentId: session.payment_intent?.toString() ?? null,
        stripeSessionId: session.id,
        stripeEventId: event.id,
      },
    });
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}
