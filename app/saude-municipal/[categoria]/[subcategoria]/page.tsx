import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Building2,
  Truck,
  Stethoscope,
  Users,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CascadeCard } from "@/app/saude-municipal/components/CascadeCard";
import {
  CORES_SAUDE_MUNICIPAL,
  UNIDADES_BASICAS_SAUDE,
  UNIDADES_PRONTO_ATENDIMENTO,
  HOSPITAIS_MUNICIPAIS,
  SERVICOS_MOVEIS,
} from "@/lib/dados-saude-municipal";

interface Props {
  params: {
    categoria: string;
    subcategoria: string;
  };
}

const VALID_CATEGORIES = ["atencao-basica", "urgencia-emergencia"];

const SUBCATEGORY_CONFIG: Record<
  string,
  {
    title: string;
    description: string;
    icon: React.ReactNode;
    color: string;
  }
> = {
  "ums": {
    title: "Unidades UMS",
    description: "Unidades Municipais de Saúde que atendem consultas, exames básicos e ações de promoção da saúde.",
    icon: <Stethoscope className="h-7 w-7" />,
    color: CORES_SAUDE_MUNICIPAL.primaria,
  },
  "esf": {
    title: "Equipes ESF",
    description: "Estratégias Saúde da Família com foco em território, visitas domiciliares e acompanhamento contínuo.",
    icon: <Users className="h-7 w-7" />,
    color: CORES_SAUDE_MUNICIPAL.primaria,
  },
  "upa": {
    title: "UPAs",
    description: "Unidades de Pronto Atendimento com atendimento 24h e classificação de risco.",
    icon: <AlertCircle className="h-7 w-7" />,
    color: CORES_SAUDE_MUNICIPAL.urgencia,
  },
  "hospital": {
    title: "Hospital Municipal",
    description: "Hospital de referência com internamentos, cirurgias e consultórios especializados.",
    icon: <Building2 className="h-7 w-7" />,
    color: CORES_SAUDE_MUNICIPAL.hospital,
  },
  "moveis": {
    title: "Serviços Móveis",
    description: "Unidades móveis que levam atendimento direto à comunidade.",
    icon: <Truck className="h-7 w-7" />,
    color: CORES_SAUDE_MUNICIPAL.movel,
  },
};

export default async function SubcategoryPage({ params }: Props) {
  const { categoria, subcategoria } = await params;
  if (!VALID_CATEGORIES.includes(categoria)) notFound();

  const config = SUBCATEGORY_CONFIG[subcategoria];
  if (!config) notFound();

  const items = getItemsForSubcategory(categoria, subcategoria);
  if (!items || items.length === 0) notFound();

  return (
    <main className="min-h-screen" style={{ backgroundColor: CORES_SAUDE_MUNICIPAL.fundo }}>
      <header
        className="text-white shadow-lg sticky top-0 z-50"
        style={{
          background: `linear-gradient(135deg, ${config.color} 0%, ${config.color}bb 100%)`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Link href={`/saude-municipal/${categoria}`}>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                  <ArrowLeft className="h-5 w-5" />
                </Button>
              </Link>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/20 rounded-full">{config.icon}</div>
                <div>
                  <h1 className="text-xl font-bold">{config.title}</h1>
                  <p className="text-sm opacity-90">{config.description}</p>
                </div>
              </div>
            </div>
            <Badge className="bg-white/20 text-white border-0">SESMA</Badge>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <p className="text-slate-500 text-sm">Selecione o item para visualizar dados e indicadores</p>
            <h2 className="text-2xl font-bold text-slate-900">{config.title}</h2>
          </div>
          <Badge style={{ backgroundColor: config.color }} className="text-white border-0">
            {items.length} {items.length === 1 ? "unidade" : "unidades"}
          </Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {items.map((item) => (
            <CascadeCard
              key={item.id}
              title={item.nome}
              subtitle={getSubtitle(item)}
              description={getItemDescription(item)}
              stats={getSummaryStats(item)}
              icon={getItemIcon(subcategoria)}
              href={`/saude-municipal/${categoria}/${subcategoria}/${item.id}`}
              color={config.color}
              images={item.imagens ?? (item.imagem ? [item.imagem] : undefined)}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

function getItemsForSubcategory(categoria: string, subcategoria: string) {
  if (categoria === "atencao-basica") {
    if (subcategoria === "ums") return UNIDADES_BASICAS_SAUDE.filter((u) => u.tipo === "UMS");
    if (subcategoria === "esf") return UNIDADES_BASICAS_SAUDE.filter((u) => u.tipo === "ESF");
  }

  if (categoria === "urgencia-emergencia") {
    if (subcategoria === "upa") return UNIDADES_PRONTO_ATENDIMENTO;
    if (subcategoria === "hospital") return HOSPITAIS_MUNICIPAIS;
    if (subcategoria === "moveis") return SERVICOS_MOVEIS;
  }

  return null;
}

function getSubtitle(item: any) {
  if (item.tipo) return item.tipo;
  if (item.sigla) return item.sigla;
  return "Unidade";
}

function getItemDescription(item: any) {
  return (item as any).descricao ?? (item as any).sigla ?? (item as any).tipo ?? "-";
}

function getSummaryStats(item: any) {
  if (item.tipo === "UMS" || item.tipo === "ESF") {
    return [
      { label: "Consultas / mês", value: item.metas.consultasMensais },
      { label: "Equipe", value: item.equipes },
    ];
  }

  if (item.indicadores?.atendimentosMes !== undefined) {
    return [
      { label: "Atend./Mês", value: item.indicadores.atendimentosMes.toLocaleString("pt-BR") },
      { label: "Meta", value: item.indicadores.metaMes ?? item.indicadores.metaTotalMes ?? "-" },
    ];
  }

  return [{ label: "Bairro", value: item.bairro ?? "-" }];
}

function getItemIcon(subcategoria: string) {
  switch (subcategoria) {
    case "ums":
    case "esf":
      return <Stethoscope className="h-7 w-7" />;
    case "upa":
      return <AlertCircle className="h-7 w-7" />;
    case "hospital":
      return <Building2 className="h-7 w-7" />;
    case "moveis":
      return <Truck className="h-7 w-7" />;
    default:
      return <Users className="h-7 w-7" />;
  }
}
