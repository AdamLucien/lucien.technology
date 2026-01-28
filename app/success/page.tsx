import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { buildPageMetadata, breadcrumbSchema, webPageSchema } from "@/lib/seo";
import { MotionIn } from "@/components/MotionIn";
import { prisma } from "@/lib/prisma";
import { verifyReceiptToken } from "@/lib/receipt";

export const metadata = buildPageMetadata({
  title: "Payment Success",
  description: "Deposit payment received for Lucien engagement.",
  path: "/success",
  keywords: ["payment", "success", "receipt"],
});

export default async function SuccessPage({
  searchParams,
}: {
  searchParams:
    | { order?: string; token?: string }
    | Promise<{ order?: string; token?: string }>;
}) {
  const resolvedSearchParams = await Promise.resolve(searchParams);
  const orderId = resolvedSearchParams.order;
  const token = resolvedSearchParams.token;
  const isValid = orderId ? verifyReceiptToken(orderId, token ?? null) : false;
  const order = orderId && isValid
    ? await prisma.order.findUnique({
        where: { id: orderId },
        include: { service: true },
      })
    : null;

  return (
    <>
      <JsonLd
        id="success-breadcrumb"
        data={
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Success", path: "/success" },
          ])
        }
      />
      <JsonLd
        id="success-webpage"
        data={webPageSchema({ name: "Payment Success", path: "/success" })}
      />
      <section className="mx-auto w-full max-w-4xl px-6 pb-16 pt-12">
        <MotionIn className="space-y-8">
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              { href: "/success", label: "Success" },
            ]}
          />
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-slate">
              Deposit received
            </p>
            <h1 className="text-3xl font-semibold text-ash">
              Payment confirmation
            </h1>
            <p className="text-sm text-muted">
              Your deposit has been received. We will confirm next steps through
              secure channels.
            </p>
          </div>
        </MotionIn>
        <MotionIn className="card-animate mt-10 rounded-2xl border border-line/80 bg-soft p-6">
          {order ? (
            <div className="space-y-3">
              <p className="text-sm text-muted">
                Service: <span className="text-ash">{order.service?.title}</span>
              </p>
              <p className="text-sm text-muted">
                Status: <span className="text-ash">{order.status}</span>
              </p>
              <Link
                href={`/receipt/${order.id}?token=${token}`}
                className="btn-animate btn-secondary inline-flex rounded-full px-6 py-2 text-xs uppercase tracking-[0.2em]"
              >
                View receipt
              </Link>
            </div>
          ) : (
            <p className="text-sm text-muted">
              If you need a receipt, contact us with your payment confirmation.
            </p>
          )}
        </MotionIn>
      </section>
    </>
  );
}
