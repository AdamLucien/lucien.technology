import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { buildPageMetadata, breadcrumbSchema, webPageSchema } from "@/lib/seo";
import { MotionIn } from "@/components/MotionIn";
import { prisma } from "@/lib/prisma";
import { verifyReceiptToken } from "@/lib/receipt";

export const metadata = buildPageMetadata({
  title: "Receipt",
  description: "Lucien deposit receipt and order confirmation.",
  path: "/receipt",
  keywords: ["receipt", "payment", "order"],
});

export default async function ReceiptPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: { token?: string } | Promise<{ token?: string }>;
}) {
  const { id } = await params;
  const resolvedSearchParams = await Promise.resolve(searchParams);
  const isValid = verifyReceiptToken(id, resolvedSearchParams.token ?? null);
  if (!isValid) {
    notFound();
  }

  const order = await prisma.order.findUnique({
    where: { id },
    include: { service: true, customer: true, payments: true },
  });

  if (!order) {
    notFound();
  }

  const payment = order.payments[0];

  return (
    <>
      <JsonLd
        id="receipt-breadcrumb"
        data={
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Receipt", path: `/receipt/${id}` },
          ])
        }
      />
      <JsonLd
        id="receipt-webpage"
        data={webPageSchema({ name: "Receipt", path: `/receipt/${id}` })}
      />
      <section className="mx-auto w-full max-w-4xl px-6 pb-16 pt-12">
        <MotionIn className="space-y-8">
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              { href: `/receipt/${id}`, label: "Receipt" },
            ]}
          />
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-slate">
              Receipt
            </p>
            <h1 className="text-3xl font-semibold text-ash">
              Deposit confirmation
            </h1>
            <p className="text-sm text-muted">
              This receipt confirms the deposit for your Lucien engagement.
            </p>
          </div>
        </MotionIn>
        <MotionIn className="card-animate mt-10 rounded-2xl border border-line/80 bg-soft p-6">
          <div className="grid gap-4 text-sm text-muted">
            <div>
              <span className="text-slate">Service</span>
              <p className="text-ash">{order.service?.title ?? "Service"}</p>
            </div>
            <div>
              <span className="text-slate">Amount</span>
              <p className="text-ash">
                {(order.amountCents / 100).toLocaleString("en-US", {
                  style: "currency",
                  currency: order.currency,
                })}
              </p>
            </div>
            <div>
              <span className="text-slate">Status</span>
              <p className="text-ash">{order.status}</p>
            </div>
            <div>
              <span className="text-slate">Payment reference</span>
              <p className="text-ash">
                {payment?.stripePaymentIntentId ?? payment?.stripeSessionId ?? "Recorded"}
              </p>
            </div>
            <div>
              <span className="text-slate">Customer</span>
              <p className="text-ash">
                {order.customer?.name ?? "Client"} · {order.customer?.email ?? ""}
              </p>
            </div>
          </div>
        </MotionIn>
      </section>
    </>
  );
}
