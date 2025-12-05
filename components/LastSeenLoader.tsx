export default function LastSeenLoader({ limit }: { limit: number }) {
  return (
    <div className="mt-6">
      <div className="flex gap-4 overflow-x-scroll no-scrollbar">
        {[...new Array(limit)].map((_, i) => (
          <div key={i} className="basis-36">
            <div key={i} className="shrink-0 space-y-2">
              <div className="rounded-md bg-zinc-800 h-48 w-32 animate-pulse" />
              <div className="rounded-md bg-zinc-800 h-4 w-32 animate-pulse" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}