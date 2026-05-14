import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Building2, Clock, HeartPulse, Shield, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CascadeCard } from "@/app/saude-municipal/components/CascadeCard";
import { ImageCarousel } from "@/app/saude-municipal/components/ImageCarousel";
import {
  CORES_SAUDE_MUNICIPAL,
  FUNCOES_ITEM_SAUDE,
  UNIDADES_BASICAS_SAUDE,
  UNIDADES_PRONTO_ATENDIMENTO,
  HOSPITAIS_MUNICIPAIS,
  SERVICOS_MOVEIS,
} from "@/lib/dados-saude-municipal";

interface Props {
  params: {
    categoria: string;
    subcategoria: string;
    itemId: string;
  };
}

export default async function ItemDetailsPage({ params }: Props) {
  const { categoria, subcategoria, itemId } = await params;

  const details = findItemDetails(categoria, subcategoria, itemId);
  if (!details) notFound();

  const title = getTitle(categoria, subcategoria);
  const backPath = `/saude-municipal/${categoria}/${subcategoria}`;
  const itemImages = details.imagens?.length ? details.imagens : details.imagem ? [details.imagem] : [];

  return (
    <main className="min-h-screen" style={{ backgroundColor: CORES_SAUDE_MUNICIPAL.fundo }}>
      <header
        className="text-white shadow-lg sticky top-0 z-50"
        style={{
          background: `linear-gradient(135deg, ${CORES_SAUDE_MUNICIPAL.primaria} 0%, ${CORES_SAUDE_MUNICIPAL.primaria}bb 100%)`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Link href={backPath}>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                  <ArrowLeft className="h-5 w-5" />
                </Button>
              </Link>
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-white/80">{title}</p>
                <h1 className="text-2xl font-bold">{details.nome}</h1>
              </div>
            </div>
            <Badge className="bg-white/20 text-white border-0">Detalhes</Badge>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
        {itemImages.length > 0 && <ImageCarousel images={itemImages} alt={details.nome} />}
        <section className="grid gap-4 lg:grid-cols-[1.4fr_0.9fr]">
          <div className="rounded-3xl bg-white shadow-sm border border-slate-200 p-6">
            <div className="flex items-start gap-4">
              <span className="inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-slate-100 text-slate-700">
                <Shield className="h-6 w-6" />
              </span>
              <div>
                <p className="text-slate-500 text-sm">Resumo do item</p>
                <h2 className="text-xl font-semibold text-slate-900">{details.nome}</h2>
                <p className="mt-3 text-slate-600 leading-relaxed">{getDetailDescription(details)}</p>
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {getDetailHighlights(details).map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-500">{stat.label}</p>
                  <p className="mt-2 text-2xl font-semibold text-slate-900">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-white shadow-sm border border-slate-200 p-6 space-y-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-500 text-sm">Informações de contato</p>
                <p className="font-semibold text-slate-900">{details.endereco || "-"}</p>
              </div>
              <div className="rounded-2xl bg-slate-100 px-4 py-2 text-slate-700">{details.bairro || "-"}</div>
            </div>

            {details.telefone && (
              <p className="text-slate-600">Telefone: <span className="font-semibold text-slate-900">{details.telefone}</span></p>
            )}
            {details.horario && (
              <p className="text-slate-600">Horário: <span className="font-semibold text-slate-900">{details.horario}</span></p>
            )}
          </div>
        </section>

        <section>
          <div className="mb-5 flex items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-slate-900">Seções e metas</h2>
              <p className="text-slate-500 text-sm">Acompanhe os indicadores relevantes deste item.</p>
            </div>
            <Link href={backPath} className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900">
              Voltar <ArrowRight className="h-4 w-4 rotate-180" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {getDetailSections(details).map((section) => (
              <div key={section.id} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-500">{section.unidade ?? section.descricao ?? "Meta"}</p>
                    <p className="mt-2 text-lg font-semibold text-slate-900">{section.nome}</p>
                  </div>
                  <span className="rounded-2xl bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">{section.valorAtual}{section.unidade ? ` ${section.unidade}` : ""}</span>
                </div>
                {section.valorMeta !== undefined && (
                  <p className="mt-3 text-sm text-slate-600">Meta: {section.valorMeta} {section.unidade ?? ""}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="mb-5 flex items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-slate-900">Funções do item</h2>
              <p className="text-slate-500 text-sm">Selecione a função para registrar dados e acessar o dashboard de cada área.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {FUNCOES_ITEM_SAUDE.map((funcao) => (
              <CascadeCard
                key={funcao.id}
                title={funcao.nome}
                subtitle="Função"
                description={funcao.descricao}
                stats={[{ label: "Registros", value: "—" }]}
                href={`/saude-municipal/${categoria}/${subcategoria}/${itemId}/${funcao.id}`}
                color={CORES_SAUDE_MUNICIPAL.primaria}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

function findItemDetails(categoria: string, subcategoria: string, itemId: string) {
  if (categoria === "atencao-basica") {
    return UNIDADES_BASICAS_SAUDE.find((u) => u.id === itemId && u.tipo === (subcategoria === "ums" ? "UMS" : "ESF"));
  }

  if (categoria === "urgencia-emergencia") {
    if (subcategoria === "upa") return UNIDADES_PRONTO_ATENDIMENTO.find((u) => u.id === itemId);
    if (subcategoria === "hospital") return HOSPITAIS_MUNICIPAIS.find((h) => h.id === itemId);
    if (subcategoria === "moveis") return SERVICOS_MOVEIS.find((s) => s.id === itemId);
  }

  return null;
}

function getTitle(categoria: string, subcategoria: string) {
  if (categoria === "atencao-basica") return subcategoria === "ums" ? "UMS" : "ESF";
  if (categoria === "urgencia-emergencia") {
    if (subcategoria === "upa") return "UPA";
    if (subcategoria === "hospital") return "Hospital";
    if (subcategoria === "moveis") return "Serviços Móveis";
  }
  return "Detalhes";
}

function getDetailHighlights(details: any) {
  const highlights = [];
  if (details.indicadores?.atendimentosMes !== undefined) {
    highlights.push({ label: "Atend./Mês", value: details.indicadores.atendimentosMes.toLocaleString("pt-BR") });
  }
  if (details.equipes !== undefined) {
    highlights.push({ label: "Equipes", value: details.equipes });
  }
  if (details.agentesComunitarios !== undefined) {
    highlights.push({ label: "ACS", value: details.agentesComunitarios });
  }
  if (details.indicadores?.taxaOcupacao !== undefined) {
    highlights.push({ label: "Ocupação", value: `${details.indicadores.taxaOcupacao}%` });
  }
  return highlights.length ? highlights : [{ label: "Bairro", value: details.bairro ?? "-" }];
}

function getDetailDescription(details: any) {
  if (details.descricao) return details.descricao;
  if (details.tipo) return `${details.tipo} com atendimento em ${details.bairro ?? "localidade"}`;
  if (details.servicos) return `Serviços: ${details.servicos.slice(0, 3).join(", ")}${details.servicos.length > 3 ? "..." : ""}`;
  return "Visão completa dos indicadores e seções da unidade.";
}

function getDetailSections(details: any) {
  if (details.secoes) return details.secoes;
  if (details.ambulatorio?.consultas) return details.ambulatorio.consultas;
  if (details.cirurgias?.eletivas) return details.cirurgias.eletivas;
  return [];
}
