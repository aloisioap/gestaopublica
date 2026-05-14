"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RefreshCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Erro na página:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 p-8">
      <AlertTriangle className="h-16 w-16 text-amber-500 mb-4" />
      <h2 className="text-2xl font-bold text-slate-900 mb-2">Erro ao carregar página</h2>
      <p className="text-slate-500 mb-2 text-center max-w-md">
        Ocorreu um erro ao carregar esta página.
      </p>
      <p className="text-red-500 mb-6 text-sm text-center max-w-md">
        {error.message || "Erro desconhecido"}
      </p>
      <div className="flex gap-3">
        <Button onClick={reset} variant="outline">
          <RefreshCcw className="h-4 w-4 mr-2" />
          Tentar novamente
        </Button>
        <Link href="/">
          <Button>Voltar para o início</Button>
        </Link>
      </div>
    </div>
  );
}
