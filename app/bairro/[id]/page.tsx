"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { 
  Activity, Building2, Gavel, Users, ArrowLeft, ChevronRight, 
  Loader2, MapPin, Heart, Home, GraduationCap, UserCircle
} from "lucide-react";
import { CATEGORIAS } from "@/types";
import { Button } from "@/components/ui/button";
import { getBairroById } from "@/lib/dados-bairros";

const iconMap: Record<string, React.ReactNode> = {
  Activity: <Activity className="h-8 w-8 text-rose-500" />,
  Building2: <Building2 className="h-8 w-8 text-blue-500" />,
  Gavel: <Gavel className="h-8 w-8 text-amber-500" />,
  Users: <Users className="h-8 w-8 text-emerald-500" />,
  Heart: <Heart className="h-8 w-8 text-rose-500" />,
  GraduationCap: <GraduationCap className="h-8 w-8 text-indigo-500" />,
  UserCircle: <UserCircle className="h-8 w-8 text-cyan-500" />,
};

const gradientMap: Record<string, string> = {
  red: "from-rose-50 via-white to-rose-50/50 border-rose-100",
  blue: "from-blue-50 via-white to-blue-50/50 border-blue-100",
  amber: "from-amber-50 via-white to-amber-50/50 border-amber-100",
  emerald: "from-emerald-50 via-white to-emerald-50/50 border-emerald-100",
  indigo: "from-indigo-50 via-white to-indigo-50/50 border-indigo-100",
  cyan: "from-cyan-50 via-white to-cyan-50/50 border-cyan-100",
};

const iconBgMap: Record<string, string> = {
  red: "bg-rose-100 text-rose-600",
  blue: "bg-blue-100 text-blue-600",
  amber: "bg-amber-100 text-amber-600",
  emerald: "bg-emerald-100 text-emerald-600",
  indigo: "bg-indigo-100 text-indigo-600",
  cyan: "bg-cyan-100 text-cyan-600",
};

export default function BairroDashboard() {
  const params = useParams();
  const router = useRouter();
  const id = params?.id as string;
  const [bairro, setBairro] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    
    // Usar dados mock localmente
    const bairroData = getBairroById(id);
    setBairro(bairroData);
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <Loader2 className="h-12 w-12 animate-spin text-blue-600" />
      </div>
    );
  }

  if (!bairro) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 p-8">
        <MapPin className="h-16 w-16 text-slate-300 mb-4" />
        <h1 className="text-2xl font-bold mb-2">Bairro não encontrado</h1>
        <Link href="/bairro">
          <Button>Voltar para bairros</Button>
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link href="/bairro" className="p-2 rounded-lg hover:bg-slate-200 transition-colors">
            <ArrowLeft className="h-5 w-5 text-slate-600" />
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-slate-900">{bairro.nome}</h1>
            <p className="text-slate-500">{bairro.cidade || "Cidade não informada"}</p>
          </div>
        </div>

        {/* Grid de Categorias */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.values(CATEGORIAS).map((cat) => (
            <Link
              key={cat.id}
              href={`/bairro/${id}/${cat.id}`}
              className={`group rounded-3xl border-2 bg-gradient-to-br p-6 transition-all hover:shadow-lg ${gradientMap[cat.cor]}`}
            >
              <div className="flex items-start gap-5">
                <div className={`p-4 rounded-2xl shadow-lg ${iconBgMap[cat.cor]}`}>
                  {iconMap[cat.icon]}
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-slate-900 mb-2">{cat.title}</h2>
                  <p className="text-slate-600 text-sm mb-4">{cat.descricao}</p>
                  <div className="flex flex-wrap gap-2">
                    {cat.secoes.slice(0, 3).map((secao) => (
                      <span key={secao} className="text-xs bg-white/80 px-3 py-1 rounded-full">
                        {secao}
                      </span>
                    ))}
                  </div>
                </div>
                <ChevronRight className="h-6 w-6 text-slate-400 self-center" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
