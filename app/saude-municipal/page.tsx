"use client";

import Link from "next/link";
import {
  ArrowLeft,
  HeartPulse,
  Activity,
  Users,
  TrendingUp,
  Clock,
  Stethoscope,
  Home,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CORES_SAUDE_MUNICIPAL,
  UNIDADES_BASICAS_SAUDE,
  CASAS_ESPECIALIZADAS,
  UNIDADES_PRONTO_ATENDIMENTO,
  HOSPITAIS_MUNICIPAIS,
  SERVICOS_MOVEIS,
  INDICADORES_SAUDE_MUNICIPAL,
} from "@/lib/dados-saude-municipal";
import { CascadeCard } from "./components/CascadeCard";

export default function GestaoSaudeMunicipal() {
  const umsCount = UNIDADES_BASICAS_SAUDE.filter((u) => u.tipo === "UMS").length;
  const esfCount = UNIDADES_BASICAS_SAUDE.filter((u) => u.tipo === "ESF").length;
  const hospital = HOSPITAIS_MUNICIPAIS[0];
  const totalAtendUE =
    UNIDADES_PRONTO_ATENDIMENTO.reduce(
      (acc, u) => acc + u.indicadores.atendimentosMes,
      0
    ) + (hospital?.indicadores.altasMes ?? 0);

  const macroAreas = [
    {
      id: "atencao-basica",
      titulo: "Atenção Básica",
      subtitulo: "UMS · ESF",
      descricao:
        "Unidades Municipais de Saúde e Estratégia Saúde da Família — porta de entrada preferencial do SUS",
      icon: <Stethoscope className="h-7 w-7" />,
      cor: CORES_SAUDE_MUNICIPAL.primaria,
      stats: [
        { label: "UMS", value: umsCount },
        { label: "ESF", value: esfCount },
        {
          label: "Cobertura AB",
          value: `${INDICADORES_SAUDE_MUNICIPAL.coberturaAB}%`,
        },
      ],
      href: "/saude-municipal/atencao-basica",
    },
    {
      id: "urgencia-emergencia",
      titulo: "Urgência e Emergência",
      subtitulo: "UPA · Hospital · Móveis",
      descricao:
        "Unidades de Pronto Atendimento, Hospital Municipal HPSMMP e Serviços Móveis — SAMU e demais",
      icon: <AlertCircle className="h-7 w-7" />,
      cor: CORES_SAUDE_MUNICIPAL.urgencia,
      stats: [
        { label: "UPAs", value: UNIDADES_PRONTO_ATENDIMENTO.length },
        { label: "Hospital", value: 1 },
        {
          label: "Atend./Mês",
          value: totalAtendUE.toLocaleString("pt-BR"),
        },
      ],
      href: "/saude-municipal/urgencia-emergencia",
    },
    {
      id: "casas-especializadas",
      titulo: "Casas Especializadas",
      subtitulo: "Atenção Especializada",
      descricao:
        "CEMO, Casa Dia, Casa Idoso, Casa Mulher e demais centros de atenção especializada",
      icon: <Home className="h-7 w-7" />,
      cor: CORES_SAUDE_MUNICIPAL.terciaria,
      stats: [
        { label: "Unidades", value: CASAS_ESPECIALIZADAS.length },
        {
          label: "Móveis",
          value: SERVICOS_MOVEIS.length,
        },
      ],
      href: "/saude-municipal/casas-especializadas",
    },
  ];

  return (
    <main
      className="min-h-screen"
      style={{ backgroundColor: CORES_SAUDE_MUNICIPAL.fundo }}
    >
      {/* Header */}
      <header
        className="text-white shadow-lg sticky top-0 z-50"
        style={{
          background: `linear-gradient(135deg, ${CORES_SAUDE_MUNICIPAL.primaria} 0%, ${CORES_SAUDE_MUNICIPAL.terciaria} 100%)`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/20"
                >
                  <ArrowLeft className="h-5 w-5" />
                </Button>
              </Link>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/20 rounded-full">
                  <HeartPulse className="h-6 w-6" />
                </div>
                <div>
                  <h1 className="text-xl font-bold">SESMA — Gestão da Saúde</h1>
                  <p className="text-sm opacity-90">
                    Secretaria Municipal de Saúde de Belém
                  </p>
                </div>
              </div>
            </div>
            <Badge className="bg-white/20 text-white border-0">
              <Activity className="h-3 w-3 mr-1" />
              Online
            </Badge>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* KPIs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card
            className="border-l-4"
            style={{ borderLeftColor: CORES_SAUDE_MUNICIPAL.sucesso }}
          >
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-500">Cobertura AB</p>
                  <p className="text-xl font-bold" style={{ color: CORES_SAUDE_MUNICIPAL.primaria }}>
                    {INDICADORES_SAUDE_MUNICIPAL.coberturaAB}%
                  </p>
                </div>
                <div className="p-2 rounded-lg" style={{ backgroundColor: `${CORES_SAUDE_MUNICIPAL.sucesso}20` }}>
                  <Users className="h-5 w-5" style={{ color: CORES_SAUDE_MUNICIPAL.sucesso }} />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card
            className="border-l-4"
            style={{ borderLeftColor: CORES_SAUDE_MUNICIPAL.info }}
          >
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-500">Atendimentos/Mês</p>
                  <p className="text-lg font-bold" style={{ color: CORES_SAUDE_MUNICIPAL.primaria }}>
                    {(INDICADORES_SAUDE_MUNICIPAL.atendimentosMes / 1000).toFixed(1)}k
                  </p>
                </div>
                <div className="p-2 rounded-lg" style={{ backgroundColor: `${CORES_SAUDE_MUNICIPAL.info}20` }}>
                  <Activity className="h-5 w-5" style={{ color: CORES_SAUDE_MUNICIPAL.info }} />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card
            className="border-l-4"
            style={{ borderLeftColor: CORES_SAUDE_MUNICIPAL.destaque }}
          >
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-500">Satisfação</p>
                  <p className="text-xl font-bold" style={{ color: CORES_SAUDE_MUNICIPAL.primaria }}>
                    {INDICADORES_SAUDE_MUNICIPAL.satisfacaoUsuario}/5
                  </p>
                </div>
                <div className="p-2 rounded-lg" style={{ backgroundColor: `${CORES_SAUDE_MUNICIPAL.destaque}20` }}>
                  <TrendingUp className="h-5 w-5" style={{ color: CORES_SAUDE_MUNICIPAL.destaque }} />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card
            className="border-l-4"
            style={{ borderLeftColor: CORES_SAUDE_MUNICIPAL.alerta }}
          >
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-500">Tempo Médio</p>
                  <p className="text-xl font-bold" style={{ color: CORES_SAUDE_MUNICIPAL.primaria }}>
                    {INDICADORES_SAUDE_MUNICIPAL.tempoEsperaMedia}min
                  </p>
                </div>
                <div className="p-2 rounded-lg" style={{ backgroundColor: `${CORES_SAUDE_MUNICIPAL.alerta}20` }}>
                  <Clock className="h-5 w-5" style={{ color: CORES_SAUDE_MUNICIPAL.alerta }} />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Section title */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-slate-800">Macro Áreas de Saúde</h2>
          <p className="text-slate-500 mt-1 text-sm">
            Selecione uma macro área para acessar as unidades e módulos de gestão
          </p>
        </div>

        {/* Macro-area Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {macroAreas.map((area, idx) => (
            <CascadeCard
              key={area.id}
              title={area.titulo}
              subtitle={area.subtitulo}
              description={area.descricao}
              stats={area.stats}
              icon={area.icon}
              href={area.href}
              color={area.cor}
              index={idx}
            />
          ))}
        </div>

        <footer className="mt-10 pt-6 border-t text-center text-sm text-slate-500">
          <p style={{ color: CORES_SAUDE_MUNICIPAL.primaria }}>
            SESMA — Sistema Único de Saúde · Belém/PA
          </p>
        </footer>
      </div>
    </main>
  );
}
