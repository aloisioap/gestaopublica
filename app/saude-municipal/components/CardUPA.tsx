"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { MapPin, Phone, Activity, Eye, Target, AlertCircle } from "lucide-react";
import { ModalAuditoria } from "./ModalAuditoria";
import { ModalMetas } from "./ModalMetas";
import { ImageCarousel } from "./ImageCarousel";
import { UPA, CORES_SAUDE_MUNICIPAL } from "@/lib/dados-saude-municipal";

interface CardUPAProps {
  upa: UPA;
}

export function CardUPA({ upa }: CardUPAProps) {
  const percentualMeta = (upa.indicadores.atendimentosMes / upa.indicadores.metaMes) * 100;

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
      {/* Header com foto */}
      <div className="h-28 relative overflow-hidden">
        {upa.imagens?.length ? (
          <>
            <ImageCarousel
              images={upa.imagens}
              alt={upa.nome}
              className="absolute inset-0 rounded-none"
              imageClassName="h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </>
        ) : (
          <>
            <img
              src={upa.imagem}
              alt={upa.nome}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </>
        )}
        <div
          className="absolute bottom-2 left-2 p-2 rounded-full shadow-lg"
          style={{ backgroundColor: CORES_SAUDE_MUNICIPAL.urgencia }}
        >
          <AlertCircle className="h-6 w-6 text-white" />
        </div>
        <Badge className="absolute top-2 right-2 bg-red-600 text-white shadow">24h</Badge>
      </div>

      <CardContent className="p-4 flex-1 flex flex-col">
        {/* Título */}
        <h3 className="font-bold text-sm mb-0.5 line-clamp-1">{upa.nome}</h3>
        <p className="text-xs text-slate-500 mb-2">{upa.bairro}</p>

        {/* Endereço e Contato */}
        <div className="space-y-1 text-xs text-slate-600 mb-3">
          <p className="flex items-center gap-1.5 truncate">
            <MapPin className="h-3 w-3 text-slate-400 shrink-0" />
            <span className="truncate">{upa.endereco}</span>
          </p>
          <p className="flex items-center gap-1.5">
            <Phone className="h-3 w-3 text-slate-400 shrink-0" />
            {upa.telefone}
          </p>
        </div>

        {/* Classificação de Risco */}
        <div className="mb-3">
          <p className="text-[10px] text-slate-500 mb-1.5">Classificação de Risco</p>
          <div className="grid grid-cols-5 gap-1">
            <div className="text-center">
              <div className="w-3 h-3 bg-red-600 rounded-full mx-auto mb-0.5" />
              <p className="text-[10px] font-bold">{upa.classificacaoRisco.vermelho}</p>
            </div>
            <div className="text-center">
              <div className="w-3 h-3 bg-orange-500 rounded-full mx-auto mb-0.5" />
              <p className="text-[10px] font-bold">{upa.classificacaoRisco.laranja}</p>
            </div>
            <div className="text-center">
              <div className="w-3 h-3 bg-yellow-500 rounded-full mx-auto mb-0.5" />
              <p className="text-[10px] font-bold">{upa.classificacaoRisco.amarelo}</p>
            </div>
            <div className="text-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mx-auto mb-0.5" />
              <p className="text-[10px] font-bold">{upa.classificacaoRisco.verde}</p>
            </div>
            <div className="text-center">
              <div className="w-3 h-3 bg-blue-500 rounded-full mx-auto mb-0.5" />
              <p className="text-[10px] font-bold">{upa.classificacaoRisco.azul}</p>
            </div>
          </div>
        </div>

        {/* Ocupação e Meta */}
        <div className="mb-3 space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-500">Ocupação</span>
            <span className="font-bold" style={{ color: CORES_SAUDE_MUNICIPAL.urgencia }}>
              {upa.indicadores.taxaOcupacao}%
            </span>
          </div>
          <Progress value={upa.indicadores.taxaOcupacao} className="h-1.5" />

          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-500">Meta Mensal</span>
            <span className="font-bold" style={{ color: percentualMeta >= 90 ? CORES_SAUDE_MUNICIPAL.sucesso : CORES_SAUDE_MUNICIPAL.alerta }}>
              {percentualMeta.toFixed(0)}%
            </span>
          </div>
          <Progress value={percentualMeta} className="h-1.5" />
          <p className="text-[10px] text-slate-400">
            {upa.indicadores.atendimentosMes} de {upa.indicadores.metaMes}
          </p>
        </div>

        {/* Seções disponíveis */}
        <div className="flex flex-wrap gap-1 mb-3">
          {upa.secoes.slice(0, 3).map((sec) => (
            <Badge key={sec.id} variant="outline" className="text-[9px] px-1.5 py-0">
              {sec.nome.split(" ")[0]}
            </Badge>
          ))}
          {upa.secoes.length > 3 && (
            <Badge variant="outline" className="text-[9px] px-1.5 py-0">
              +{upa.secoes.length - 3}
            </Badge>
          )}
        </div>

        {/* Botões */}
        <div className="mt-auto grid grid-cols-2 gap-2">
          <ModalAuditoria
            unidadeId={upa.id}
            unidadeNome={upa.nome}
            secoes={upa.secoes.flatMap(s => s.metas)}
          >
            <Button variant="outline" size="sm" className="w-full text-xs">
              <Eye className="h-3 w-3 mr-1" />
              Auditar
            </Button>
          </ModalAuditoria>

          <ModalMetas
            unidadeId={upa.id}
            unidadeNome={upa.nome}
            secoesIniciais={upa.secoes.flatMap(s => s.metas)}
          >
            <Button variant="outline" size="sm" className="w-full text-xs">
              <Target className="h-3 w-3 mr-1" />
              Metas
            </Button>
          </ModalMetas>
        </div>
      </CardContent>
    </Card>
  );
}
