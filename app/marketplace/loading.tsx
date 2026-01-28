export default function MarketplaceLoading() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 pb-16 pt-12">
      <div className="space-y-6">
        <div className="h-6 w-40 rounded-full bg-soft" />
        <div className="h-10 w-3/4 rounded-2xl bg-soft" />
        <div className="grid gap-4 md:grid-cols-2">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="h-48 rounded-2xl border border-line/80 bg-soft"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
