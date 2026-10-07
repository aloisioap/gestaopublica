import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { template: "%s · TRE-PA Saúde", default: "TRE-PA · Saúde e Faturamento" },
  description: "Gestão de saúde e faturamento dos servidores do Tribunal Regional Eleitoral do Pará.",
};

export default function TreLayout({ children }: { children: React.ReactNode }) {
  return children;
}
