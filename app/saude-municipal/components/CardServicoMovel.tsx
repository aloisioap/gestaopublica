"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { MapPin, Phone, Activity, Eye, Target, Truck, Wrench, Upload } from "lucide-react";
import { ModalAuditoria } from "./ModalAuditoria";
import { ModalMetas } from "./ModalMetas";
import { ModalManutencao } from "./ModalManutencao";
import { ServicoMovel, CORES_SAUDE_MUNICIPAL } from "@/lib/dados-saude-municipal";

interface CardServicoMovelProps {
  servico: ServicoMovel;
}

const statusColors: Record<string, string> = {
  "Operacional": "bg-green-100 text-green-700 border-green-200",
  "Manutenção": "bg-amber-100 text-amber-700 border-amber-200",
  "Inoperante": "bg-red-100 text-red-700 border-red-200",
};

export function CardServicoMovel({ servico }: CardServicoMovelProps) {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const veiculosOperacionais = servico.veiculos.filter(v => v.status === "Operacional").length;
  const veiculosManutencao = servico.veiculos.filter(v => v.status === "Manutenção").length;

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setUploadedImage(result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
      {/* Header com upload de foto */}
      <div className="h-28 relative overflow-hidden flex items-center justify-center bg-gradient-to-br from-cyan-50 to-cyan-100">
        {uploadedImage ? (
          <>
            <img
              src={uploadedImage}
              alt={servico.nome}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </>
        ) : (
          <label className="cursor-pointer flex flex-col items-center gap-2">
            <Upload className="h-8 w-8 text-cyan-600" />
            <span className="text-xs font-semibold text-cyan-700">Enviar foto</span>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </label>
        )}
        <div
          className="absolute bottom-2 left-2 p-2 rounded-full shadow-lg"
          style={{ backgroundColor: CORES_SAUDE_MUNICIPAL.movel }}
        >
          <Truck className="h-6 w-6 text-white" />
        </div>
        <Badge
          className="absolute top-2 right-2 text-[10px] shadow"
          style={{ backgroundColor: CORES_SAUDE_MUNICIPAL.movel }}
        >
          {servico.sigla}
        </Badge>
      </div>

      <CardContent className="p-4 flex-1 flex flex-col">
        {/* Título */}
        <h3 className="font-bold text-sm mb-0.5 line-clamp-1">{servico.nome}</h3>
        <p className="text-xs text-slate-500 mb-2 line-clamp-1">{servico.descricao}</p>

        {/* Contato */}
        <div className="text-xs text-slate-600 mb-3">
          <p className="flex items-center gap-1.5">
            <Phone className="h-3 w-3 text-slate-400 shrink-0" />
            {servico.telefone}
          </p>
        </div>

        {/* Status da Frota */}
        <div className="mb-3">
          <p className="text-[10px] text-slate-500 mb-1.5">Status da Frota ({servico.veiculos.length} veículos)</p>
          <div className="flex gap-2 mb-2">
            <div className="flex-1 p-2 bg-green-50 rounded text-center">
              <p className="text-lg font-bold text-green-600">{veiculosOperacionais}</p>
              <p className="text-[9px] text-green-600">Operacional</p>
            </div>
            <div className="flex-1 p-2 bg-amber-50 rounded text-center">
              <p className="text-lg font-bold text-amber-600">{veiculosManutencao}</p>
              <p className="text-[9px] text-amber-600">Manutenção</p>
            </div>
          </div>
          {/* Lista de veículos */}
          <div className="space-y-1">
            {servico.veiculos.slice(0, 3).map((v) => (
              <div key={v.id} className="flex items-center justify-between gap-2 text-xs p-1.5 bg-slate-50 rounded">
                <div className="flex items-center gap-2 truncate">
                  {v.imagem && (
                    <img
                      src={v.imagem}
                      alt={v.nome}
                      className="h-6 w-6 rounded-md object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  )}
                  <span className="truncate flex-1">{v.nome}</span>
                </div>
                <Badge variant="outline" className={`text-[8px] px-1 ${statusColors[v.status]}`}>
                  {v.status}
                </Badge>
              </div>
            ))}
            {servico.veiculos.length > 3 && (
              <p className="text-[10px] text-slate-400 text-center">+{servico.veiculos.length - 3} veículos</p>
            )}
          </div>
        </div>

        {/* Meta */}
        <div className="mb-3 p-2 bg-slate-50 rounded">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs text-slate-500">Meta Mensal</span>
            <span
              className="text-xs font-bold"
              style={{ color: servico.indicadores.cumprimentoMeta >= 90 ? CORES_SAUDE_MUNICIPAL.sucesso : CORES_SAUDE_MUNICIPAL.alerta }}
            >
              {servico.indicadores.cumprimentoMeta.toFixed(0)}%
            </span>
          </div>
          <Progress value={servico.indicadores.cumprimentoMeta} className="h-1.5" />
          <p className="text-[10px] text-slate-400 mt-1">
            {servico.indicadores.atendimentosMes} de {servico.indicadores.metaTotalMes}
          </p>
        </div>

        {/* Botões */}
        <div className="mt-auto grid grid-cols-3 gap-1.5">
          <ModalAuditoria
            unidadeId={servico.id}
            unidadeNome={servico.nome}
            secoes={servico.secoes}
          >
            <Button variant="outline" size="sm" className="w-full text-[10px] px-1">
              <Eye className="h-3 w-3 mr-0.5" />
              Auditar
            </Button>
          </ModalAuditoria>

          <ModalMetas
            unidadeId={servico.id}
            unidadeNome={servico.nome}
            secoesIniciais={servico.secoes}
          >
            <Button variant="outline" size="sm" className="w-full text-[10px] px-1">
              <Target className="h-3 w-3 mr-0.5" />
              Metas
            </Button>
          </ModalMetas>

          <ModalManutencao veiculos={servico.veiculos} servicoNome={servico.nome}>
            <Button variant="outline" size="sm" className="w-full text-[10px] px-1">
              <Wrench className="h-3 w-3 mr-0.5" />
              Manut.
            </Button>
          </ModalManutencao>
        </div>
      </CardContent>
    </Card>
  );
}
