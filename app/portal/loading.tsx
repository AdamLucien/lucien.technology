export default function PortalLoading() {
  return (
    <div className="space-y-6">
      <div className="h-6 w-48 rounded-full bg-soft" />
      <div className="grid gap-4 md:grid-cols-3">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={`card-${index}`}
            className="h-28 rounded-2xl border border-line/80 bg-soft"
          />
        ))}
      </div>
      <div className="h-64 rounded-2xl border border-line/80 bg-soft" />
    </div>
  );
}
