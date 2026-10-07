"use client";

import Link from "next/link";
import {
  Shield,
  Users,
  Stethoscope,
  ClipboardCheck,
  ArrowLeft,
  Building2,
  FileText,
  Activity,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CORES_TRE, IDENTIDADE_TRE } from "@/lib/dados-tre";
import { SimuladorProtocoloTRE } from "@/components/simulador-tre";

export default function PortalTRE() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: CORES_TRE.fundo }}>
      {/* Header Institucional TRE */}
      <header
        className="border-b shadow-sm sticky top-0 z-50"
        style={{
          backgroundColor: CORES_TRE.primaria,
          borderColor: CORES_TRE.secundaria,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div
                className="p-2 rounded-lg"
                style={{ backgroundColor: CORES_TRE.secundaria }}
              >
                <Shield className="h-8 w-8" style={{ color: CORES_TRE.primaria }} />
              </div>
              <div className="text-white">
                <h1 className="text-xl font-bold">{IDENTIDADE_TRE.nome}</h1>
                <p className="text-sm opacity-90">{IDENTIDADE_TRE.subtitulo}</p>
              </div>
            </div>
            <Link href="/">
              <Button
                variant="outline"
                size="sm"
                style={{ borderColor: CORES_TRE.secundaria, color: CORES_TRE.secundaria }}
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar ao Início
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Lema e Descrição */}
        <div className="text-center mb-10">
          <h2
            className="text-3xl font-bold mb-3"
            style={{ color: CORES_TRE.primaria }}
          >
            {IDENTIDADE_TRE.lema}
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Sistema de Gestão de Saúde e Faturamento - Acesso exclusivo para servidores,
            credenciados e auditores da Justiça Eleitoral na Amazônia
          </p>
        </div>

        {/* Cards de Acesso às Interfaces */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {/* Card - Área do Servidor */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader
              className="pb-4"
              style={{ backgroundColor: CORES_TRE.info + "15" }}
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mb-3"
                style={{ backgroundColor: CORES_TRE.info }}
              >
                <Users className="h-7 w-7 text-white" />
              </div>
              <CardTitle style={{ color: CORES_TRE.primaria }}>
                Área do Servidor
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-sm text-slate-600 mb-4">
                Acesse seu histórico de saúde, carteirinha digital com QR Code,
                dependências e procedimentos realizados.
              </p>
              <ul className="text-xs text-slate-500 space-y-1 mb-4">
                <li>• Histórico médico completo</li>
                <li>• Carteirinha digital</li>
                <li>• Validação WhatsApp</li>
                <li>• Gestão de dependentes</li>
              </ul>
              <Link href="/tre/usuario" className="block">
                <Button
                  className="w-full"
                  style={{ backgroundColor: CORES_TRE.info }}
                >
                  Acessar como Servidor
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Card - Área do Prestador */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader
              className="pb-4"
              style={{ backgroundColor: CORES_TRE.terciaria + "15" }}
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mb-3"
                style={{ backgroundColor: CORES_TRE.terciaria }}
              >
                <Stethoscope className="h-7 w-7 text-white" />
              </div>
              <CardTitle style={{ color: CORES_TRE.primaria }}>
                Área do Prestador
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-sm text-slate-600 mb-4">
                Upload de XML TISS e PDFs, validação de servidores via QR Code,
                acompanhamento de faturas.
              </p>
              <ul className="text-xs text-slate-500 space-y-1 mb-4">
                <li>• Upload XML TISS</li>
                <li>• Categorização de PDFs</li>
                <li>• Validação prévia</li>
                <li>• Acompanhamento de pagamento</li>
              </ul>
              <Link href="/tre/prestador" className="block">
                <Button
                  className="w-full"
                  style={{ backgroundColor: CORES_TRE.terciaria }}
                >
                  Acessar como Prestador
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Card - Área do Gestor */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader
              className="pb-4"
              style={{ backgroundColor: CORES_TRE.destaque + "15" }}
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mb-3"
                style={{ backgroundColor: CORES_TRE.destaque }}
              >
                <Building2 className="h-7 w-7 text-white" />
              </div>
              <CardTitle style={{ color: CORES_TRE.primaria }}>
                Área do Gestor
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-sm text-slate-600 mb-4">
                Dashboard de custos, análise de procedimentos, gestão de
                credenciados e relatórios gerenciais.
              </p>
              <ul className="text-xs text-slate-500 space-y-1 mb-4">
                <li>• Dashboard de custos</li>
                <li>• Análise por período</li>
                <li>• Gestão de credenciados</li>
                <li>• Relatórios gerenciais</li>
              </ul>
              <Link href="/tre/gestor" className="block">
                <Button
                  className="w-full"
                  style={{ backgroundColor: CORES_TRE.destaque }}
                >
                  Acessar como Gestor
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Card - Área do Auditor */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader
              className="pb-4"
              style={{ backgroundColor: CORES_TRE.secundaria + "20" }}
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mb-3"
                style={{ backgroundColor: CORES_TRE.secundaria }}
              >
                <ClipboardCheck className="h-7 w-7" style={{ color: CORES_TRE.primaria }} />
              </div>
              <CardTitle style={{ color: CORES_TRE.primaria }}>
                Área do Auditor
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-sm text-slate-600 mb-4">
                Auditoria de faturas, análise de documentos, TIS integrado,
                glosas e aprovações.
              </p>
              <ul className="text-xs text-slate-500 space-y-1 mb-4">
                <li>• Checklist de auditoria</li>
                <li>• Integração TIS</li>
                <li>• Aplicação de glosas</li>
                <li>• Aprovação de faturas</li>
              </ul>
              <Link href="/tre/auditor" className="block">
                <Button
                  className="w-full"
                  style={{ backgroundColor: CORES_TRE.secundaria, color: CORES_TRE.primaria }}
                >
                  Acessar como Auditor
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Simulador de Protocolo */}
        <div className="mb-10">
          <SimuladorProtocoloTRE />
        </div>

        {/* Informações do Sistema */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center gap-3">
              <FileText className="h-5 w-5" style={{ color: CORES_TRE.primaria }} />
              <CardTitle className="text-base" style={{ color: CORES_TRE.primaria }}>
                XML TISS + PDF
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600">
                Sistema integrado com padrão TISS para troca de informações entre
                operadoras e prestadores de saúde, com anexos PDF categorizados.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center gap-3">
              <Activity className="h-5 w-5" style={{ color: CORES_TRE.primaria }} />
              <CardTitle className="text-base" style={{ color: CORES_TRE.primaria }}>
                Validação Prévia
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600">
                Validação da carteirinha do servidor via QR Code ou WhatsApp
                <strong> antes</strong> da execução do procedimento.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center gap-3">
              <Shield className="h-5 w-5" style={{ color: CORES_TRE.primaria }} />
              <CardTitle className="text-base" style={{ color: CORES_TRE.primaria }}>
                Auditoria Integrada
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600">
                Sistema de auditoria com checklist, integração TIS e controle
                de glosas para garantir conformidade legal.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer
        className="mt-16 py-6 border-t"
        style={{
          backgroundColor: CORES_TRE.primaria,
          borderColor: CORES_TRE.secundaria,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm text-white opacity-80">
            {IDENTIDADE_TRE.nome} - {IDENTIDADE_TRE.subtitulo}
          </p>
          <p className="text-xs text-white opacity-60 mt-1">
            Sistema de Gestão de Saúde e Faturamento © 2024
          </p>
        </div>
      </footer>
    </div>
  );
}
