"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 p-8">
      <AlertCircle className="h-16 w-16 text-red-500 mb-4" />
      <h2 className="text-2xl font-bold text-slate-900 mb-2">Algo deu errado</h2>
      <p className="text-slate-500 mb-6 text-center max-w-md">
        Não foi possível carregar os dados deste bairro. Tente novamente.
      </p>
      <div className="flex gap-3">
        <Button onClick={reset} variant="outline">
          Tentar novamente
        </Button>
        <Link href="/">
          <Button>Voltar para o início</Button>
        </Link>
      </div>
    </div>
  );
}
