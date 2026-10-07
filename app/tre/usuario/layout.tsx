import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servidor",
  description: "Portal do Servidor TRE-PA: carteirinha digital, histórico de saúde, laudos, agendamentos e documentos.",
};

export default function ServidorLayout({ children }: { children: React.ReactNode }) {
  return children;
}
