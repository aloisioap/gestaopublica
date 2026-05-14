import Link from "next/link";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 p-8">
      <MapPin className="h-16 w-16 text-slate-300 mb-4" />
      <h2 className="text-2xl font-bold text-slate-900 mb-2">Página não encontrada</h2>
      <p className="text-slate-500 mb-6 text-center max-w-md">
        A página que você está procurando não existe.
      </p>
      <Link href="/">
        <Button>Voltar para o início</Button>
      </Link>
    </div>
  );
}
