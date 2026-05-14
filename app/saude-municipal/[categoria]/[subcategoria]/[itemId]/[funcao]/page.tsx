import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CORES_SAUDE_MUNICIPAL, FUNCOES_ITEM_SAUDE, UNIDADES_BASICAS_SAUDE, UNIDADES_PRONTO_ATENDIMENTO, HOSPITAIS_MUNICIPAIS, SERVICOS_MOVEIS } from "@/lib/dados-saude-municipal";
import { FunctionDashboard } from "./FunctionDashboard";

interface Props {
  params: {
    categoria: string;
    subcategoria: string;
    itemId: string;
    funcao: string;
  };
}

export default async function FuncaoItemPage({ params }: Props) {
  const { categoria, subcategoria, itemId, funcao } = await params;

  const details = findItemDetails(categoria, subcategoria, itemId);
  if (!details) notFound();

  const funcaoMeta = FUNCOES_ITEM_SAUDE.find((item) => item.id === funcao);
  if (!funcaoMeta) notFound();

  return (
    <main className="min-h-screen" style={{ backgroundColor: CORES_SAUDE_MUNICIPAL.fundo }}>
      <header
        className="text-white shadow-lg sticky top-0 z-50"
        style={{
          background: `linear-gradient(135deg, ${CORES_SAUDE_MUNICIPAL.primaria} 0%, ${CORES_SAUDE_MUNICIPAL.primaria}bb 100%)`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <Link href={`/saude-municipal/${categoria}/${subcategoria}/${itemId}`}>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                  <ArrowLeft className="h-5 w-5" />
                </Button>
              </Link>
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-white/80">{funcaoMeta.nome}</p>
                <h1 className="text-2xl font-bold">{details.nome}</h1>
                <p className="text-sm opacity-90">{funcaoMeta.descricao}</p>
              </div>
            </div>
            <Badge className="bg-white/20 text-white border-0">Fluxo</Badge>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <FunctionDashboard
          itemId={itemId}
          itemName={details.nome}
          funcao={funcaoMeta.id}
          funcaoLabel={funcaoMeta.nome}
        />
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
