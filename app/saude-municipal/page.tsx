"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
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
  Truck,
  Building2,
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
import { CascadeCard } from "@/app/saude-municipal/components/CascadeCard";

export default function GestaoSaudeMunicipal() {
  const umsCount = UNIDADES_BASICAS_SAUDE.filter((u) => u.tipo === "UMS").length;
  const esfCount = UNIDADES_BASICAS_SAUDE.filter((u) => u.tipo === "ESF").length;
  const hospital = HOSPITAIS_MUNICIPAIS[0];
  const totalAtendUE =
    UNIDADES_PRONTO_ATENDIMENTO.reduce(
      (acc, u) => acc + u.indicadores.atendimentosMes,
      0
    ) + (hospital?.indicadores.altasMes ?? 0);

  const [isKpiPaused, setIsKpiPaused] = useState(false);
  const kpiContainerRef = useRef<HTMLDivElement | null>(null);
  const directionRef = useRef(1);

  useEffect(() => {
    const element = kpiContainerRef.current;
    if (!element) return;

    let rafId: number;
    const animate = () => {
      if (!element || isKpiPaused) {
        rafId = requestAnimationFrame(animate);
        return;
      }

      const maxScroll = element.scrollWidth - element.clientWidth;
      if (maxScroll <= 0) {
        rafId = requestAnimationFrame(animate);
        return;
      }

      let nextScroll = element.scrollLeft + directionRef.current * 0.35;
      if (nextScroll <= 0) {
        nextScroll = 0;
        directionRef.current = 1;
      } else if (nextScroll >= maxScroll) {
        nextScroll = maxScroll;
        directionRef.current = -1;
      }
      element.scrollLeft = nextScroll;
      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [isKpiPaused]);

  const kpiCards = [
    {
      label: "Cobertura AB",
      value: `${INDICADORES_SAUDE_MUNICIPAL.coberturaAB}%`,
      description: "Cobertura da Atenção Básica",
      icon: <Users className="h-5 w-5" />,
      color: CORES_SAUDE_MUNICIPAL.sucesso,
    },
    {
      label: "Atendimentos/Mês",
      value: `${(INDICADORES_SAUDE_MUNICIPAL.atendimentosMes / 1000).toFixed(1)}k`,
      description: "Fluxo de pacientes",
      icon: <Activity className="h-5 w-5" />,
      color: CORES_SAUDE_MUNICIPAL.info,
    },
    {
      label: "Satisfação",
      value: `${INDICADORES_SAUDE_MUNICIPAL.satisfacaoUsuario}/5`,
      description: "Avaliação do SUS",
      icon: <HeartPulse className="h-5 w-5" />,
      color: CORES_SAUDE_MUNICIPAL.destaque,
    },
    {
      label: "Tempo Médio",
      value: `${INDICADORES_SAUDE_MUNICIPAL.tempoEsperaMedia}min`,
      description: "Espera média de atendimento",
      icon: <Clock className="h-5 w-5" />,
      color: CORES_SAUDE_MUNICIPAL.alerta,
    },
    {
      label: "Leitos Total",
      value: INDICADORES_SAUDE_MUNICIPAL.leitosTotal,
      description: "Capacidade hospitalar",
      icon: <Building2 className="h-5 w-5" />,
      color: CORES_SAUDE_MUNICIPAL.hospital,
    },
    {
      label: "Tempo Permanência",
      value: `${INDICADORES_SAUDE_MUNICIPAL.tempoPermanenciaMedia} dias`,
      description: "Média de estadia",
      icon: <Clock className="h-5 w-5" />,
      color: CORES_SAUDE_MUNICIPAL.primaria,
    },
    {
      label: "Equipes UMS+ESF",
      value: umsCount + esfCount,
      description: "Capacidade de campo",
      icon: <Users className="h-5 w-5" />,
      color: CORES_SAUDE_MUNICIPAL.primaria,
    },
    {
      label: "Veículos Móveis",
      value: SERVICOS_MOVEIS.reduce((acc, s) => acc + s.veiculos.length, 0),
      description: "Resposta móvel ativa",
      icon: <Truck className="h-5 w-5" />,
      color: CORES_SAUDE_MUNICIPAL.movel,
    },
    {
      label: "Ocupação Hospitalar",
      value: `${hospital?.indicadores.taxaOcupacao ?? 0}%`,
      description: "Leitos em uso",
      icon: <Building2 className="h-5 w-5" />,
      color: CORES_SAUDE_MUNICIPAL.hospital,
    },
  ];

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
      images: [],
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
      images: [],
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
      images: [],
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
        <div className="mb-8">
          <div className="mb-4 flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
                Indicadores em tempo real
              </p>
              <h2 className="text-2xl font-bold text-slate-900">
                Visão estratégica da rede de saúde
              </h2>
            </div>
            <Badge className="bg-slate-100 text-slate-700 border-0">Futuro</Badge>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/95 shadow-sm">
            <div className="absolute inset-y-0 left-0 w-16 bg-white/95 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-16 bg-white/95 pointer-events-none" />
            <div
              ref={kpiContainerRef}
              onMouseEnter={() => setIsKpiPaused(true)}
              onMouseLeave={() => setIsKpiPaused(false)}
              className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-4 py-4 no-scrollbar"
            >
              {kpiCards.map((kpi) => (
                <Card
                  key={kpi.label}
                  className="snap-start min-w-[16rem] border-l-4 shadow-sm"
                  style={{ borderLeftColor: kpi.color }}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.24em] text-slate-500">
                          {kpi.label}
                        </p>
                        <p className="mt-4 text-2xl font-bold text-slate-900">
                          {kpi.value}
                        </p>
                        <p className="mt-2 text-xs text-slate-500">
                          {kpi.description}
                        </p>
                      </div>
                      <div
                        className="flex h-11 w-11 items-center justify-center rounded-2xl"
                        style={{ backgroundColor: `${kpi.color}20`, color: kpi.color }}
                      >
                        {kpi.icon}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
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
              images={area.images}
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
