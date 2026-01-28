export default function InsightsLoading() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 pb-16 pt-12">
      <div className="space-y-6">
        <div className="h-6 w-32 rounded-full bg-soft" />
        <div className="h-10 w-2/3 rounded-2xl bg-soft" />
        <div className="grid gap-4">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="h-40 rounded-2xl border border-line/80 bg-soft"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
