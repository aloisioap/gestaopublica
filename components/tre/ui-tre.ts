import { cva } from "class-variance-authority";

export const treBotao = cva("font-semibold", {
  variants: {
    tom: {
      primario: "bg-tre-navy text-white shadow-md hover:bg-tre-navy-deep",
      sucesso: "bg-tre-green text-white shadow-md hover:bg-tre-green-ink",
      ouro: "bg-tre-gold text-tre-navy-deep shadow-glow-gold hover:bg-tre-gold-soft",
      vidro: "border border-white/70 bg-white/60 text-tre-navy shadow-sm backdrop-blur-md hover:bg-white/85",
      fantasma: "text-tre-navy hover:bg-white/60 hover:text-tre-navy",
      perigo: "bg-tre-danger text-white hover:bg-tre-danger-ink",
      cabecalho: "text-white hover:bg-white/15 hover:text-white", // com variant="ghost", dentro do header navy
    },
  },
  defaultVariants: { tom: "primario" },
});

export const TRE_CAMPO =
  "h-11 rounded-xl border-tre-navy/15 bg-white/85 placeholder:text-slate-500 focus-visible:ring-2 focus-visible:ring-tre-navy/40 focus-visible:ring-offset-0";
