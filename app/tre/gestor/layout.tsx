import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gestor",
  description:
    "Painel Gerencial TRE-PA: custos do período, utilização por servidor e credenciado, alertas acionáveis e relatórios em CSV ou PDF.",
};

export default function GestorLayout({ children }: { children: React.ReactNode }) {
  return children;
}
