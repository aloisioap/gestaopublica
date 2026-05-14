import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ToastWrapper } from "@/components/ui/toast-wrapper";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta-sans",
});

export const metadata: Metadata = {
  title: "Perfil Gestão | Sistema de Gestão Pública",
  description: "Sistema de gestão pública para bairros com cadastro de moradores, perfil epidemiológico, infraestrutura e gestão",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${plusJakartaSans.variable} font-sans min-h-screen bg-slate-50 antialiased`}>
        {children}
        <ToastWrapper />
      </body>
    </html>
  );
}
