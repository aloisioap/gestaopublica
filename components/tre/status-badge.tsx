import { cn } from "@/lib/utils";
import { getStatusInfo, TOM_CLASSES, type TomTRE } from "@/lib/tre/status";

export interface StatusBadgeProps {
  status: string;
  rotulo?: string;
  comIcone?: boolean;
  tamanho?: "sm" | "md";
  className?: string;
}

export function StatusBadge({ status, rotulo, comIcone = true, tamanho = "sm", className }: StatusBadgeProps) {
  const info = getStatusInfo(status);
  const Icone = info.icone;
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 whitespace-nowrap rounded-full font-semibold",
        tamanho === "sm" ? "px-2 py-0.5 text-xs" : "px-3 py-1 text-sm",
        TOM_CLASSES[info.tom],
        className,
      )}
    >
      {comIcone && <Icone aria-hidden className={tamanho === "sm" ? "size-3" : "size-4"} />}
      {rotulo ?? info.rotulo}
    </span>
  );
}

export function ToneBadge({ tom, children, className }: { tom: TomTRE; children: React.ReactNode; className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-1 whitespace-nowrap rounded-full px-2 py-0.5 text-xs font-semibold", TOM_CLASSES[tom], className)}>
      {children}
    </span>
  );
}
