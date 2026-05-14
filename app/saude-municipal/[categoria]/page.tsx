import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  HeartPulse,
  Activity,
  Building2,
  Stethoscope,
  Home,
  Truck,
  AlertCircle,
  Eye,
  Sun,
  Brain,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  CORES_SAUDE_MUNICIPAL,
  CASAS_ESPECIALIZADAS,
  UNIDADES_PRONTO_ATENDIMENTO,
  HOSPITAIS_MUNICIPAIS,
  SERVICOS_MOVEIS,
  UNIDADES_BASICAS_SAUDE,
} from "@/lib/dados-saude-municipal";
import { CascadeCard } from "@/app/saude-municipal/components/CascadeCard";

// ——— helpers ————————————————————————————————————————

function getCasaIcon(sigla: string) {
  switch (sigla) {
    case "CEMO": return <Eye className="h-6 w-6" />;
    case "CASA DIA": return <Sun className="h-6 w-6" />;
    case "CASA IDOSO": return <Home className="h-6 w-6" />;
    case "CASA MULHER": return <HeartPulse className="h-6 w-6" />;
    default: return <Brain className="h-6 w-6" />;
  }
}

function getCasaColor(sigla: string) {
  switch (sigla) {
    case "CEMO": return "#3b82f6";
    case "CASA DIA": return "#eab308";
    case "CASA IDOSO": return "#22c55e";
    case "CASA MULHER": return "#ec4899";
    default: return "#a855f7";
  }
}

// ——— config per macro area ————————————————————————————

type MacroConfig = {
  titulo: string;
  subtitulo: string;
  cor: string;
  icon: React.ReactNode;
};

const CONFIGS: Record<string, MacroConfig> = {
  "atencao-basica": {
    titulo: "Atenção Básica",
    subtitulo: "UMS · ESF",
    cor: CORES_SAUDE_MUNICIPAL.primaria,
    icon: <Stethoscope className="h-6 w-6" />,
  },
  "urgencia-emergencia": {
    titulo: "Urgência e Emergência",
    subtitulo: "UPA · Hospital · Móveis",
    cor: CORES_SAUDE_MUNICIPAL.urgencia,
    icon: <AlertCircle className="h-6 w-6" />,
  },
  "casas-especializadas": {
    titulo: "Casas Especializadas",
    subtitulo: "Atenção Especializada",
    cor: CORES_SAUDE_MUNICIPAL.terciaria,
    icon: <Home className="h-6 w-6" />,
  },
};

// ——— page ——————————————————————————————————————————————

interface Props {
  params: { categoria: string };
}

export default async function MacroAreaPage({ params }: Props) {
  const { categoria } = await params;
  const config = CONFIGS[categoria];
  if (!config) notFound();

  return (
    <main
      className="min-h-screen"
      style={{ backgroundColor: CORES_SAUDE_MUNICIPAL.fundo }}
    >
      <header
        className="text-white shadow-lg sticky top-0 z-50"
        style={{
          background: `linear-gradient(135deg, ${config.cor} 0%, ${config.cor}bb 100%)`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/saude-municipal">
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                  <ArrowLeft className="h-5 w-5" />
                </Button>
              </Link>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/20 rounded-full">{config.icon}</div>
                <div>
                  <h1 className="text-xl font-bold">{config.titulo}</h1>
                  <p className="text-sm opacity-90">{config.subtitulo}</p>
                </div>
              </div>
            </div>
            <Badge className="bg-white/20 text-white border-0">
              <Activity className="h-3 w-3 mr-1" />
              SESMA
            </Badge>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <TypeGrid categoria={categoria} config={config} />
      </div>
    </main>
  );
}

// ——— type grid per macro area ———————————————————————————

function TypeGrid({ categoria, config }: { categoria: string; config: MacroConfig }) {
  // ── Atenção Básica: two type cards (UMS + ESF)
  if (categoria === "atencao-basica") {
    const umsUnits = UNIDADES_BASICAS_SAUDE.filter((u) => u.tipo === "UMS");
    const esfUnits = UNIDADES_BASICAS_SAUDE.filter((u) => u.tipo === "ESF");
    return (
      <>
        <SectionHeader title="Selecione o tipo de unidade" cor={config.cor} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CascadeCard
            title="Unidade Municipal de Saúde"
            subtitle="UMS"
            description="Unidades de atenção primária com serviços de consultas, enfermagem, odontologia, vacinação e farmácia"
            stats={[
              { label: "Unidades", value: umsUnits.length },
              {
                label: "Atend./Mês",
                value: umsUnits
                  .reduce((a, u) => a + u.metas.atendidos, 0)
                  .toLocaleString("pt-BR"),
              },
            ]}
            icon={<Stethoscope className="h-7 w-7" />}
            href="/saude-municipal/atencao-basica/ums"
            color={config.cor}
            index={0}
          />
          <CascadeCard
            title="Estratégia Saúde da Família"
            subtitle="ESF"
            description="Equipes multidisciplinares com foco em visitas domiciliares, acompanhamentos e promoção de saúde"
            stats={[
              { label: "Equipes ESF", value: esfUnits.length },
              {
                label: "ACS",
                value: esfUnits.reduce((a, u) => a + u.agentesComunitarios, 0),
              },
            ]}
            icon={<Users className="h-7 w-7" />}
            href="/saude-municipal/atencao-basica/esf"
            color="#059669"
            index={1}
          />
        </div>
      </>
    );
  }

  // ── Urgência e Emergência: three type cards
  if (categoria === "urgencia-emergencia") {
    const totalAtendUPA = UNIDADES_PRONTO_ATENDIMENTO.reduce(
      (a, u) => a + u.indicadores.atendimentosMes, 0
    );
    const totalVeiculos = SERVICOS_MOVEIS.reduce((a, s) => a + s.veiculos.length, 0);
    const hospital = HOSPITAIS_MUNICIPAIS[0];
    return (
      <>
        <SectionHeader title="Selecione o tipo de serviço" cor={config.cor} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <CascadeCard
            title="Unidade de Pronto Atendimento"
            subtitle="UPA"
            description="Atendimento 24h de urgência e emergência com classificação de risco Manchester"
            stats={[
              { label: "UPAs", value: UNIDADES_PRONTO_ATENDIMENTO.length },
              { label: "Atend./Mês", value: totalAtendUPA.toLocaleString("pt-BR") },
            ]}
            icon={<AlertCircle className="h-7 w-7" />}
            href="/saude-municipal/urgencia-emergencia/upa"
            color={config.cor}
            index={0}
          />
          <CascadeCard
            title="Hospital Municipal"
            subtitle="HPSMMP"
            description="Hospital Municipal Pronto Socorro Mário Pinotti — cirurgias, internações, ambulatório e UTI"
            stats={hospital ? [
              { label: "Leitos", value: hospital.indicadores.leitosTotal },
              { label: "Ocupação", value: `${hospital.indicadores.taxaOcupacao}%` },
            ] : []}
            icon={<Building2 className="h-7 w-7" />}
            href="/saude-municipal/urgencia-emergencia/hospital"
            color={CORES_SAUDE_MUNICIPAL.hospital}
            index={1}
          />
          <CascadeCard
            title="Serviços Móveis"
            subtitle="SAMU · UMM"
            description="SAMU, Unidade Médica Móvel, Consultório de Rua e demais serviços móveis de saúde"
            stats={[
              { label: "Serviços", value: SERVICOS_MOVEIS.length },
              { label: "Veículos", value: totalVeiculos },
            ]}
            icon={<Truck className="h-7 w-7" />}
            href="/saude-municipal/urgencia-emergencia/moveis"
            color={CORES_SAUDE_MUNICIPAL.movel}
            index={2}
          />
        </div>
      </>
    );
  }

  // ── Casas Especializadas: direct unit cards
  if (categoria === "casas-especializadas") {
    return (
      <>
        <SectionHeader
          title="Selecione uma Casa Especializada"
          cor={config.cor}
          count={CASAS_ESPECIALIZADAS.length}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {CASAS_ESPECIALIZADAS.map((casa, idx) => (
            <CascadeCard
              key={casa.id}
              title={casa.nome}
              subtitle={casa.sigla}
              description={casa.descricao}
              stats={[
                { label: "Bairro", value: casa.bairro },
                { label: "Tipo", value: casa.tipo },
              ]}
              icon={getCasaIcon(casa.sigla)}
              href={`/saude-municipal/casas-especializadas/${casa.id}`}
              color={getCasaColor(casa.sigla)}
              badge={casa.sigla}
              images={casa.imagens}
              index={idx}
            />
          ))}
        </div>
      </>
    );
  }

  return null;
}

function SectionHeader({
  title,
  cor,
  count,
}: {
  title: string;
  cor: string;
  count?: number;
}) {
  return (
    <div className="flex items-center justify-between mb-6">
      <div>
        <h2 className="text-xl font-bold text-slate-800">{title}</h2>
        <p className="text-slate-500 text-sm mt-0.5">
          Clique para acessar os módulos de gestão
        </p>
      </div>
      {count !== undefined && (
        <Badge style={{ backgroundColor: cor }} className="text-white border-0">
          {count} {count === 1 ? "unidade" : "unidades"}
        </Badge>
      )}
    </div>
  );
}
