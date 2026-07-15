import { getStoreStatus } from "../lib/store-status";

export default function StoreStatusBadge() {
  const { isOpen, label } = getStoreStatus();

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-xs px-2.5 py-1 font-space-mono text-[12px] font-bold uppercase tracking-[0.08em] text-pure-white ${
        isOpen ? "bg-signal-red" : "bg-neutral-500"
      }`}
    >
      <span
        className={`h-2 w-2 rounded-full bg-pure-white ${isOpen ? "animate-pulse" : ""}`}
        aria-hidden="true"
      />
      {label}
    </span>
  );
}
