"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { MapPin, Phone, Clock, Eye, Target, Activity, Upload } from "lucide-react";
import { ModalAuditoria } from "./ModalAuditoria";
import { ModalMetas } from "./ModalMetas";
import { MetaSecao, CORES_SAUDE_MUNICIPAL } from "@/lib/dados-saude-municipal";

interface CardUnidadeProps {
  id: string;
  nome: string;
  bairro: string;
  endereco: string;
  telefone: string;
  horario: string;
  imagem?: string;
  imagens?: string[];
  icone: React.ReactNode;
  cor: string;
  metas?: {
    cumprimento?: number;
    atendidos?: number;
    total?: number;
  };
  secoes: MetaSecao[];
  badges?: string[];
  extraInfo?: React.ReactNode;
  onVerDetalhes?: () => void;
}

export function CardUnidade({
  id,
  nome,
  bairro,
  endereco,
  telefone,
  horario,
  imagem,
  imagens,
  icone,
  cor,
  metas,
  secoes,
  badges,
  extraInfo,
  onVerDetalhes,
}: CardUnidadeProps) {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const percentualMeta = metas?.cumprimento || 0;

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
      <div
        className="h-28 relative overflow-hidden flex items-center justify-center"
        style={{ background: `linear-gradient(135deg, ${cor}20 0%, ${cor}40 100%)` }}
      >
        {uploadedImage ? (
          <>
            <img
              src={uploadedImage}
              alt={nome}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div
              className="absolute bottom-2 left-2 p-2 rounded-full shadow-lg"
              style={{ backgroundColor: cor }}
            >
              {icone}
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center gap-2">
            <label className="cursor-pointer flex flex-col items-center gap-2 p-4">
              <Upload className="h-6 w-6" style={{ color: cor }} />
              <span className="text-xs font-semibold text-slate-700">Enviar foto</span>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </label>
            <div className="p-3 rounded-full shadow-lg" style={{ backgroundColor: cor }}>
              {icone}
            </div>
          </div>
        )}
        {badges && badges.length > 0 && (
          <div className="absolute top-2 right-2 flex flex-col gap-1">
            {badges.map((badge, i) => (
              <Badge key={i} className="text-[10px] bg-white/90 text-slate-700 shadow">
                {badge}
              </Badge>
            ))}
          </div>
        )}
      </div>

      <CardContent className="p-4 flex-1 flex flex-col">
        {/* Título e Bairro */}
        <h3 className="font-bold text-sm mb-0.5 line-clamp-1">{nome}</h3>
        <p className="text-xs text-slate-500 mb-2">{bairro}</p>

        {/* Info básica */}
        <div className="space-y-1 text-xs text-slate-600 mb-3">
          <p className="flex items-center gap-1.5 truncate">
            <MapPin className="h-3 w-3 text-slate-400 shrink-0" />
            <span className="truncate">{endereco}</span>
          </p>
          <p className="flex items-center gap-1.5">
            <Phone className="h-3 w-3 text-slate-400 shrink-0" />
            {telefone}
          </p>
          <p className="flex items-center gap-1.5">
            <Clock className="h-3 w-3 text-slate-400 shrink-0" />
            {horario}
          </p>
        </div>

        {/* Meta / Progresso */}
        {metas && (
          <div className="mb-3 p-2 bg-slate-50 rounded">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs text-slate-500">Meta Mensal</span>
              <span
                className="text-xs font-bold"
                style={{ color: percentualMeta >= 90 ? CORES_SAUDE_MUNICIPAL.sucesso : CORES_SAUDE_MUNICIPAL.alerta }}
              >
                {percentualMeta}%
              </span>
            </div>
            <Progress value={percentualMeta} className="h-1.5" />
            {metas.atendidos !== undefined && metas.total !== undefined && (
              <p className="text-[10px] text-slate-400 mt-1">
                {metas.atendidos} de {metas.total}
              </p>
            )}
          </div>
        )}

        {/* Extra info */}
        {extraInfo && <div className="mb-3">{extraInfo}</div>}

        {/* Botões */}
        <div className="mt-auto grid grid-cols-2 gap-2">
          <ModalAuditoria
            unidadeId={id}
            unidadeNome={nome}
            secoes={secoes}
          >
            <Button variant="outline" size="sm" className="w-full text-xs">
              <Eye className="h-3 w-3 mr-1" />
              Auditar
            </Button>
          </ModalAuditoria>

          <ModalMetas
            unidadeId={id}
            unidadeNome={nome}
            secoesIniciais={secoes}
          >
            <Button variant="outline" size="sm" className="w-full text-xs">
              <Target className="h-3 w-3 mr-1" />
              Metas
            </Button>
          </ModalMetas>
        </div>

        {onVerDetalhes && (
          <Button
            size="sm"
            className="w-full mt-2 text-xs"
            style={{ backgroundColor: cor }}
            onClick={onVerDetalhes}
          >
            <Activity className="h-3 w-3 mr-1" />
            Ver Detalhes
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
