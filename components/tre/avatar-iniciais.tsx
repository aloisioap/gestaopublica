import { cn } from "@/lib/utils";
import { iniciais } from "@/lib/tre/formatadores";

const TAMANHO = { sm: "size-8 text-xs", md: "size-10 text-sm", lg: "size-14 text-lg" } as const;

export function AvatarIniciais({ nome, tamanho = "md", className }: { nome: string; tamanho?: keyof typeof TAMANHO; className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "grid shrink-0 place-items-center rounded-full bg-gradient-to-br from-tre-navy to-tre-green font-semibold text-white ring-2 ring-white/70",
        TAMANHO[tamanho],
        className,
      )}
    >
      {iniciais(nome)}
    </span>
  );
}
