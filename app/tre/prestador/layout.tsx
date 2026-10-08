import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Credenciado",
  description:
    "Área do Credenciado TRE-PA: validação do servidor, envio do XML TISS com itens extras e acompanhamento de faturas e glosas.",
};

export default function CredenciadoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
