"use client";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import type { LucideIcon } from "lucide-react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export const GlassDialog = DialogPrimitive.Root;
export const GlassDialogTrigger = DialogPrimitive.Trigger;
export const GlassDialogClose = DialogPrimitive.Close;

export interface GlassPainelProps {
  titulo: React.ReactNode;
  descricao?: React.ReactNode;
  icone?: LucideIcon;
  rodape?: React.ReactNode;
  lado?: "centro" | "direita" | "baixo";
  largura?: "sm" | "md" | "lg" | "xl";
  className?: string;
  children: React.ReactNode;
}

const LARGURA = { sm: "sm:max-w-md", md: "sm:max-w-xl", lg: "sm:max-w-3xl", xl: "sm:max-w-5xl" } as const;

const POSICAO = {
  centro: "inset-0 m-auto h-fit max-h-[90dvh] w-[calc(100%-2rem)] rounded-3xl data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95",
  direita: "inset-y-0 right-0 h-dvh w-full rounded-none sm:rounded-l-3xl data-[state=open]:slide-in-from-right data-[state=closed]:slide-out-to-right",
  baixo: "inset-x-0 bottom-0 max-h-[85dvh] w-full rounded-t-3xl data-[state=open]:slide-in-from-bottom data-[state=closed]:slide-out-to-bottom",
} as const;

export function GlassPainel({ titulo, descricao, icone: Icone, rodape, lado = "centro", largura = "md", className, children }: GlassPainelProps) {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-tre-navy-deep/45 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0 motion-reduce:animate-none" />
      <DialogPrimitive.Content
        {...(descricao ? {} : { "aria-describedby": undefined })}
        className={cn(
          "tre-glass-strong fixed z-50 flex flex-col overflow-hidden text-slate-900 duration-200 focus:outline-none",
          "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0 motion-reduce:animate-none",
          POSICAO[lado],
          lado !== "baixo" && LARGURA[largura],
          className,
        )}
      >
        <header className="flex items-start gap-3 border-b border-white/70 bg-gradient-to-r from-tre-navy/10 to-transparent px-5 py-4">
          {Icone && (
            <span aria-hidden className="grid size-10 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-tre-navy to-tre-green text-white shadow-md">
              <Icone className="size-5" />
            </span>
          )}
          <div className="min-w-0 flex-1">
            <DialogPrimitive.Title className="text-lg font-semibold leading-tight text-tre-navy">{titulo}</DialogPrimitive.Title>
            {descricao && <DialogPrimitive.Description className="mt-0.5 text-sm text-slate-600">{descricao}</DialogPrimitive.Description>}
          </div>
          <DialogPrimitive.Close className="tre-ring grid size-10 shrink-0 place-items-center rounded-full text-slate-600 transition-colors hover:bg-white/70 hover:text-tre-navy">
            <X className="size-5" aria-hidden />
            <span className="sr-only">Fechar</span>
          </DialogPrimitive.Close>
        </header>
        <div className="min-h-0 flex-1 overflow-y-auto px-5 py-4">{children}</div>
        {rodape && <footer className="flex flex-wrap items-center justify-end gap-2 border-t border-white/70 bg-white/50 px-5 py-3">{rodape}</footer>}
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
}
