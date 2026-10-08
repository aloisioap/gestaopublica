import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Auditor",
  description: "Auditoria de contas TRE-PA: fila de faturas com checklist e glosas, lotes de reciprocidade e pareceres OPME (padrão TISS).",
};

export default function AuditorLayout({ children }: { children: React.ReactNode }) {
  return children;
}
