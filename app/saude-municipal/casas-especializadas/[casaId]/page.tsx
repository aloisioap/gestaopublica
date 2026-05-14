import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Home, HeartPulse, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ImageCarousel } from "@/app/saude-municipal/components/ImageCarousel";
import { CORES_SAUDE_MUNICIPAL, CASAS_ESPECIALIZADAS } from "@/lib/dados-saude-municipal";

interface Props {
  params: {
    casaId: string;
  };
}

export default async function CasaEspecializadaPage({ params }: Props) {
  const { casaId } = await params;
  const casa = CASAS_ESPECIALIZADAS.find((item) => item.id === casaId);
  if (!casa) notFound();
  const casaImages = casa.imagens?.length ? casa.imagens : casa.imagem ? [casa.imagem] : [];

  return (
    <main className="min-h-screen" style={{ backgroundColor: CORES_SAUDE_MUNICIPAL.fundo }}>
      <header
        className="text-white shadow-lg sticky top-0 z-50"
        style={{
          background: `linear-gradient(135deg, ${CORES_SAUDE_MUNICIPAL.terciaria} 0%, ${CORES_SAUDE_MUNICIPAL.terciaria}bb 100%)`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Link href="/saude-municipal/casas-especializadas">
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                  <ArrowLeft className="h-5 w-5" />
                </Button>
              </Link>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/20 rounded-full text-white">
                  <Home className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.18em] text-white/80">{casa.sigla}</p>
                  <h1 className="text-2xl font-bold">{casa.nome}</h1>
                </div>
              </div>
            </div>
            <Badge className="bg-white/20 text-white border-0">Especializada</Badge>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
        {casaImages.length > 0 && <ImageCarousel images={casaImages} alt={casa.nome} />}
        <section className="rounded-3xl bg-white border border-slate-200 shadow-sm p-6">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700">
                <HeartPulse className="h-4 w-4" />
                {casa.tipo}
              </div>
              <p className="text-slate-500">{casa.descricao}</p>
              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Atendimentos / mês</p>
                  <p className="mt-2 text-xl font-semibold text-slate-900">{casa.indicadores.atendimentosMes ?? "-"}</p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Comunidades</p>
                  <p className="mt-2 text-xl font-semibold text-slate-900">{casa.indicadores.comunidadesAtendidas ?? "-"}</p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Tempo médio</p>
                  <p className="mt-2 text-xl font-semibold text-slate-900">{casa.indicadores.tempoAtendimento ?? "-"}h</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Contato</p>
              <p className="text-base font-semibold text-slate-900 mt-2">{casa.endereco}</p>
              <p className="text-sm text-slate-600 mt-1">{casa.bairro}</p>
              <p className="mt-3 text-slate-600">Tel: <span className="font-semibold text-slate-900">{casa.telefone}</span></p>
              <p className="text-slate-600">Horário: <span className="font-semibold text-slate-900">{casa.horario}</span></p>
            </div>
          </div>
        </section>

        <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {casa.secoes.map((section) => (
            <div key={section.id} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500">{section.unidade}</p>
              <h3 className="mt-3 text-lg font-semibold text-slate-900">{section.nome}</h3>
              <p className="mt-2 text-slate-600">Meta: {section.valorMeta}</p>
              <p className="mt-1 text-slate-600">Atual: {section.valorAtual}</p>
            </div>
          ))}
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="text-xl font-bold text-slate-900">Serviços disponíveis</h2>
              <p className="text-slate-500 text-sm">Veja os principais serviços oferecidos por esta unidade.</p>
            </div>
            <Badge className="bg-slate-100 text-slate-700 border-0">{casa.servicos.length} serviços</Badge>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {casa.servicos.map((servico) => (
              <div key={servico} className="rounded-3xl bg-slate-50 p-4 text-slate-700">{servico}</div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
