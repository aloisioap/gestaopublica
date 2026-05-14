"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  FileText, Users, Calendar, Scale, MapPin, BarChart3, 
  ArrowLeft, Settings, Plus, Bell, Search, LogOut,
  TrendingUp, CheckCircle, Clock, AlertCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { supabase } from "@/lib/supabase";
import { GABINETE_CATEGORIAS } from "@/types/gabinete";
import { mockIndicacoes, mockAtendimentos } from "@/lib/dados-mock";

const iconMap: Record<string, React.ReactNode> = {
  FileText: <FileText className="h-8 w-8 text-blue-500" />,
  Users: <Users className="h-8 w-8 text-emerald-500" />,
  Calendar: <Calendar className="h-8 w-8 text-purple-500" />,
  Scale: <Scale className="h-8 w-8 text-amber-500" />,
  MapPin: <MapPin className="h-8 w-8 text-rose-500" />,
  BarChart3: <BarChart3 className="h-8 w-8 text-indigo-500" />,
};

const bgIconMap: Record<string, React.ReactNode> = {
  FileText: <FileText className="h-32 w-32 text-blue-200/50" />,
  Users: <Users className="h-32 w-32 text-emerald-200/50" />,
  Calendar: <Calendar className="h-32 w-32 text-purple-200/50" />,
  Scale: <Scale className="h-32 w-32 text-amber-200/50" />,
  MapPin: <MapPin className="h-32 w-32 text-rose-200/50" />,
  BarChart3: <BarChart3 className="h-32 w-32 text-indigo-200/50" />,
};

const gradientMap: Record<string, string> = {
  blue: "from-blue-50 via-white to-blue-50/50 border-blue-100 hover:border-blue-200",
  emerald: "from-emerald-50 via-white to-emerald-50/50 border-emerald-100 hover:border-emerald-200",
  purple: "from-purple-50 via-white to-purple-50/50 border-purple-100 hover:border-purple-200",
  amber: "from-amber-50 via-white to-amber-50/50 border-amber-100 hover:border-amber-200",
  rose: "from-rose-50 via-white to-rose-50/50 border-rose-100 hover:border-rose-200",
  indigo: "from-indigo-50 via-white to-indigo-50/50 border-indigo-100 hover:border-indigo-200",
};

const iconBgMap: Record<string, string> = {
  blue: "bg-blue-100 text-blue-600",
  emerald: "bg-emerald-100 text-emerald-600",
  purple: "bg-purple-100 text-purple-600",
  amber: "bg-amber-100 text-amber-600",
  rose: "bg-rose-100 text-rose-600",
  indigo: "bg-indigo-100 text-indigo-600",
};

// Stats mockados (depois virão do banco)
const statsMock = {
  indicacoes: { total: 45, pendentes: 12, respondidas: 33 },
  requerimentos: { total: 28, pendentes: 8, atendidos: 20 },
  atendimentos: { total: 156, novos: 5, resolvidos: 120 },
  projetos: { total: 8, tramitacao: 3, aprovados: 5 },
};

export default function GabinetePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula carregamento
    setTimeout(() => setLoading(false), 500);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-amber-50">
        <div className="text-center">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 animate-pulse mx-auto" />
          <p className="mt-4 text-slate-500 font-medium">Carregando Gabinete...</p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-amber-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link href="/" className="p-2 rounded-lg hover:bg-slate-100 transition-colors">
                <ArrowLeft className="h-5 w-5 text-slate-600" />
              </Link>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl">
                  <Scale className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-slate-900">Gabinete do Vereador</h1>
                  <p className="text-xs text-slate-500">Sistema de Gestão Parlamentar</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5 text-slate-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
              </Button>
              <Button variant="ghost" size="icon">
                <Settings className="h-5 w-5 text-slate-600" />
              </Button>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-orange-500" />
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <Card className="border-l-4 border-l-blue-500">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">Indicações</p>
                  <p className="text-2xl font-bold text-slate-900">{statsMock.indicacoes.total}</p>
                </div>
                <div className="p-2 bg-blue-100 rounded-lg">
                  <FileText className="h-5 w-5 text-blue-600" />
                </div>
              </div>
              <div className="mt-2 flex items-center gap-2 text-xs">
                <span className="text-amber-600 flex items-center gap-1">
                  <Clock className="h-3 w-3" /> {statsMock.indicacoes.pendentes} pendentes
                </span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-emerald-500">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">Atendimentos</p>
                  <p className="text-2xl font-bold text-slate-900">{statsMock.atendimentos.total}</p>
                </div>
                <div className="p-2 bg-emerald-100 rounded-lg">
                  <Users className="h-5 w-5 text-emerald-600" />
                </div>
              </div>
              <div className="mt-2 flex items-center gap-2 text-xs">
                <span className="text-emerald-600 flex items-center gap-1">
                  <CheckCircle className="h-3 w-3" /> {statsMock.atendimentos.resolvidos} resolvidos
                </span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-purple-500">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">Compromissos</p>
                  <p className="text-2xl font-bold text-slate-900">12</p>
                </div>
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Calendar className="h-5 w-5 text-purple-600" />
                </div>
              </div>
              <div className="mt-2 text-xs text-slate-500">
                Esta semana
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-amber-500">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">Projetos</p>
                  <p className="text-2xl font-bold text-slate-900">{statsMock.projetos.total}</p>
                </div>
                <div className="p-2 bg-amber-100 rounded-lg">
                  <Scale className="h-5 w-5 text-amber-600" />
                </div>
              </div>
              <div className="mt-2 flex items-center gap-2 text-xs">
                <span className="text-amber-600">
                  {statsMock.projetos.tramitacao} em tramitação
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="flex flex-wrap gap-3 mb-10">
          <Button className="rounded-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
            <Plus className="h-4 w-4 mr-2" />
            Nova Indicação
          </Button>
          <Button className="rounded-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800">
            <Plus className="h-4 w-4 mr-2" />
            Novo Atendimento
          </Button>
          <Button className="rounded-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800">
            <Plus className="h-4 w-4 mr-2" />
            Novo Compromisso
          </Button>
          <Button variant="outline" className="rounded-full border-amber-200 text-amber-700 hover:bg-amber-50">
            <Search className="h-4 w-4 mr-2" />
            Buscar Protocolo
          </Button>
        </div>

        {/* Grid de Categorias */}
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Módulos do Gabinete</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.values(GABINETE_CATEGORIAS).map((cat, idx) => (
            <Link
              key={cat.id}
              href={`/gabinete/${cat.id}`}
              className={`group relative overflow-hidden rounded-3xl border-2 bg-gradient-to-br p-6 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl ${gradientMap[cat.cor]}`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Background Icon */}
              <div className="absolute -right-8 -bottom-8 opacity-50 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                {bgIconMap[cat.icon]}
              </div>
              
              <div className="relative">
                <div className={`p-4 rounded-2xl shadow-lg w-fit mb-4 transition-transform duration-300 group-hover:scale-110 ${iconBgMap[cat.cor]}`}>
                  {iconMap[cat.icon]}
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-slate-800 transition-colors">
                  {cat.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {cat.descricao}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {cat.secoes.slice(0, 3).map((secao) => (
                    <span key={secao} className="text-xs font-medium bg-white/80 px-3 py-1.5 rounded-full border border-slate-100 shadow-sm">
                      {secao}
                    </span>
                  ))}
                  {cat.secoes.length > 3 && (
                    <span className="text-xs text-slate-500 px-2 py-1.5">+{cat.secoes.length - 3}</span>
                  )}
                </div>

                <div className="mt-4 flex items-center text-sm font-medium text-slate-500 group-hover:text-slate-700 transition-colors">
                  Acessar
                  <TrendingUp className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
              
              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </Link>
          ))}
        </div>

        {/* Dados de Demonstração - Últimos Atendimentos */}
        <div className="mt-10 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-slate-900">Últimos Atendimentos (Demonstração)</h3>
            <span className="text-sm text-amber-600 bg-amber-50 px-3 py-1 rounded-full">Dados fictícios</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {mockAtendimentos.map((at) => (
              <Card key={at.id} className="border-l-4 border-l-emerald-400">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-slate-400">{at.tipo}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      at.status === 'Confirmado' ? 'bg-emerald-100 text-emerald-700' : 
                      at.status === 'Urgente' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'
                    }`}>{at.status}</span>
                  </div>
                  <p className="font-semibold text-slate-900">{at.solicitante}</p>
                  <p className="text-sm text-slate-500">{at.assunto}</p>
                  <div className="mt-2 flex items-center gap-2 text-xs text-slate-400">
                    <span className="bg-slate-100 px-2 py-1 rounded">{at.data}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Alertas e Pendências */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="border-amber-200 bg-amber-50/50">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="h-5 w-5 text-amber-600" />
                <h3 className="font-bold text-slate-900">Pendências Urgentes</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center justify-between text-sm">
                  <span className="text-slate-700">Indicações sem resposta +30 dias</span>
                  <span className="font-bold text-amber-600">5</span>
                </li>
                <li className="flex items-center justify-between text-sm">
                  <span className="text-slate-700">Atendimentos urgentes</span>
                  <span className="font-bold text-red-600">3</span>
                </li>
                <li className="flex items-center justify-between text-sm">
                  <span className="text-slate-700">Projetos em pauta esta semana</span>
                  <span className="font-bold text-blue-600">2</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-indigo-200 bg-indigo-50/50">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="h-5 w-5 text-indigo-600" />
                <h3 className="font-bold text-slate-900">Resumo do Mês</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center justify-between text-sm">
                  <span className="text-slate-700">Atendimentos realizados</span>
                  <span className="font-bold text-emerald-600">+24</span>
                </li>
                <li className="flex items-center justify-between text-sm">
                  <span className="text-slate-700">Indicações protocoladas</span>
                  <span className="font-bold text-blue-600">+12</span>
                </li>
                <li className="flex items-center justify-between text-sm">
                  <span className="text-slate-700">Visitas a comunidades</span>
                  <span className="font-bold text-purple-600">+8</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
