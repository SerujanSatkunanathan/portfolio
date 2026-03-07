export function TechBadge({ name }: { name: string }) {
  return (
    <span className="px-3 py-1 text-[11px] font-medium rounded-full bg-accent/8 text-accent-hover border border-accent/15 tracking-wide">
      {name}
    </span>
  );
}
