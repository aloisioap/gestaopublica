"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Phone, Building2, Eye, Target, Activity, Stethoscope, Scissors, Microscope, Scan, HeartPulse, Upload } from "lucide-react";
import { ModalAuditoria } from "./ModalAuditoria";
import { ModalMetas } from "./ModalMetas";
import { Hospital, CORES_SAUDE_MUNICIPAL } from "@/lib/dados-saude-municipal";

interface CardHospitalProps {
  hospital: Hospital;
}

export function CardHospital({ hospital }: CardHospitalProps) {
  const [abaAtiva, setAbaAtiva] = useState("geral");
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const percentualMetaCirurgias = (hospital.indicadores.cirurgiasMes / hospital.metas.cirurgiasMes) * 100;
  const percentualMetaPartos = (hospital.indicadores.partosMes / hospital.metas.partosMes) * 100;
  const percentualMetaBiopsias = (hospital.indicadores.biopsiasMes / hospital.metas.biopsiasMes) * 100;
  const percentualMetaAmbulatorio = (hospital.indicadores.consultasAmbulatorioMes / hospital.metas.consultasAmbulatorioMes) * 100;
  const percentualMetaSadt = (hospital.indicadores.examesSadtMes / hospital.metas.examesSadtMes) * 100;

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
      <div className="h-32 relative overflow-hidden flex items-center justify-center bg-gradient-to-br from-red-50 to-red-100">
        {uploadedImage ? (
          <>
            <img
              src={uploadedImage}
              alt={hospital.nome}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </>
        ) : (
          <label className="cursor-pointer flex flex-col items-center gap-2">
            <Upload className="h-8 w-8 text-red-600" />
            <span className="text-xs font-semibold text-red-700">Enviar foto</span>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </label>
        )}
        <div
          className="absolute bottom-3 left-3 p-2.5 rounded-full shadow-lg"
          style={{ backgroundColor: CORES_SAUDE_MUNICIPAL.hospital }}
        >
          <Building2 className="h-7 w-7 text-white" />
        </div>
        <Badge className="absolute top-3 right-3 bg-red-600 text-white shadow font-semibold px-3 py-1">
          24h
        </Badge>
      </div>

      <CardContent className="p-4 flex-1 flex flex-col">
        {/* Título */}
        <h3 className="font-bold text-base mb-1 line-clamp-2">{hospital.nome}</h3>
        <p className="text-xs text-slate-500 mb-3">{hospital.bairro} • {hospital.telefone}</p>

        {/* Abas de Seções */}
        <Tabs value={abaAtiva} onValueChange={setAbaAtiva} className="flex-1">
          <TabsList className="grid grid-cols-5 w-full h-8 mb-3">
            <TabsTrigger value="geral" className="text-[10px] px-1">Geral</TabsTrigger>
            <TabsTrigger value="ambulatorio" className="text-[10px] px-1">Amb.</TabsTrigger>
            <TabsTrigger value="cirurgias" className="text-[10px] px-1">Cir.</TabsTrigger>
            <TabsTrigger value="sadt" className="text-[10px] px-1">SADT</TabsTrigger>
            <TabsTrigger value="biopsias" className="text-[10px] px-1">Bio.</TabsTrigger>
          </TabsList>

          {/* Aba Geral */}
          <TabsContent value="geral" className="space-y-3 mt-0">
            {/* Leitos */}
            <div className="grid grid-cols-2 gap-2">
              <div className="p-2 bg-slate-50 rounded-lg text-center">
                <p className="text-xl font-bold" style={{ color: CORES_SAUDE_MUNICIPAL.hospital }}>
                  {hospital.indicadores.leitosTotal}
                </p>
                <p className="text-[10px] text-slate-500">Leitos Total</p>
              </div>
              <div className="p-2 bg-slate-50 rounded-lg text-center">
                <p className="text-xl font-bold" style={{ color: CORES_SAUDE_MUNICIPAL.hospital }}>
                  {hospital.indicadores.taxaOcupacao}%
                </p>
                <p className="text-[10px] text-slate-500">Ocupação</p>
              </div>
            </div>

            {/* Especialidades com leitos ocupados */}
            <div className="space-y-1">
              {hospital.especialidades.map((esp) => (
                <div key={esp.nome} className="flex items-center justify-between text-xs">
                  <span className="text-slate-600 truncate">{esp.nome}</span>
                  <div className="flex items-center gap-1">
                    <span className="font-semibold" style={{ color: CORES_SAUDE_MUNICIPAL.hospital }}>
                      {esp.ocupados}/{esp.leitos}
                    </span>
                    <div className="w-12 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${(esp.ocupados / esp.leitos) * 100}%`,
                          backgroundColor: CORES_SAUDE_MUNICIPAL.hospital,
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Altas e Óbitos */}
            <div className="grid grid-cols-2 gap-2">
              <div className="p-2 bg-green-50 rounded-lg text-center">
                <p className="text-lg font-bold text-green-600">{hospital.indicadores.altasMes}</p>
                <p className="text-[10px] text-green-600">Altas/Mês</p>
              </div>
              <div className="p-2 bg-red-50 rounded-lg text-center">
                <p className="text-lg font-bold text-red-600">{hospital.indicadores.obitosMes}</p>
                <p className="text-[10px] text-red-600">Óbitos/Mês</p>
              </div>
            </div>
          </TabsContent>

          {/* Aba Ambulatório */}
          <TabsContent value="ambulatorio" className="space-y-2 mt-0">
            <div className="text-center mb-2">
              <p className="text-xs text-slate-500">Consultas/Mês</p>
              <p className="text-xl font-bold" style={{ color: CORES_SAUDE_MUNICIPAL.hospital }}>
                {hospital.indicadores.consultasAmbulatorioMes}
              </p>
              <Progress value={percentualMetaAmbulatorio} className="h-1.5 mt-1" />
              <p className="text-[10px] text-slate-400">
                {percentualMetaAmbulatorio.toFixed(0)}% da meta ({hospital.metas.consultasAmbulatorioMes})
              </p>
            </div>

            <div className="space-y-1 max-h-32 overflow-auto">
              {hospital.ambulatorio.consultas.map((cons) => (
                <div key={cons.id} className="flex items-center justify-between text-[10px] p-1.5 bg-slate-50 rounded">
                  <span className="text-slate-600 truncate">{cons.nome}</span>
                  <span className="font-semibold" style={{ color: CORES_SAUDE_MUNICIPAL.hospital }}>
                    {cons.valorAtual}/{cons.valorMeta}
                  </span>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Aba Cirurgias */}
          <TabsContent value="cirurgias" className="space-y-2 mt-0">
            <div className="grid grid-cols-2 gap-2 mb-2">
              <div className="p-2 bg-blue-50 rounded text-center">
                <p className="text-lg font-bold text-blue-600">{hospital.indicadores.cirurgiasMes}</p>
                <p className="text-[10px] text-blue-600">Total/Mês</p>
              </div>
              <div className="p-2 bg-pink-50 rounded text-center">
                <p className="text-lg font-bold text-pink-600">{hospital.indicadores.partosMes}</p>
                <p className="text-[10px] text-pink-600">Partos/Mês</p>
              </div>
            </div>

            <div className="space-y-2 max-h-32 overflow-auto">
              {/* Eletivas */}
              <div>
                <p className="text-[10px] font-semibold text-slate-500 mb-1">Eletivas</p>
                {hospital.cirurgias.eletivas.slice(0, 3).map((cir) => (
                  <div key={cir.id} className="flex items-center justify-between text-[10px] p-1 bg-slate-50 rounded mb-0.5">
                    <span className="text-slate-600 truncate">{cir.nome}</span>
                    <span className="font-semibold text-blue-600">{cir.valorAtual}/{cir.valorMeta}</span>
                  </div>
                ))}
              </div>
              
              {/* Emergências */}
              <div>
                <p className="text-[10px] font-semibold text-slate-500 mb-1">Emergências</p>
                {hospital.cirurgias.emergencias.map((cir) => (
                  <div key={cir.id} className="flex items-center justify-between text-[10px] p-1 bg-amber-50 rounded mb-0.5">
                    <span className="text-slate-600 truncate">{cir.nome}</span>
                    <span className="font-semibold text-amber-600">{cir.valorAtual}/{cir.valorMeta}</span>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Aba SADT */}
          <TabsContent value="sadt" className="space-y-2 mt-0">
            <div className="text-center mb-2">
              <p className="text-xs text-slate-500">Exames/Mês</p>
              <p className="text-xl font-bold" style={{ color: CORES_SAUDE_MUNICIPAL.hospital }}>
                {hospital.indicadores.examesSadtMes}
              </p>
              <Progress value={percentualMetaSadt} className="h-1.5 mt-1" />
              <p className="text-[10px] text-slate-400">
                {percentualMetaSadt.toFixed(0)}% da meta ({hospital.metas.examesSadtMes})
              </p>
            </div>

            <div className="grid grid-cols-2 gap-1 text-[10px]">
              <div className="p-1.5 bg-slate-50 rounded text-center">
                <p className="font-bold text-slate-700">
                  {hospital.sadt.raioX.reduce((a, b) => a + b.valorAtual, 0)}
                </p>
                <p className="text-slate-500">Raio-X</p>
              </div>
              <div className="p-1.5 bg-slate-50 rounded text-center">
                <p className="font-bold text-slate-700">
                  {hospital.sadt.ultrassom.reduce((a, b) => a + b.valorAtual, 0)}
                </p>
                <p className="text-slate-500">US</p>
              </div>
              <div className="p-1.5 bg-slate-50 rounded text-center">
                <p className="font-bold text-slate-700">
                  {hospital.sadt.tomografia.reduce((a, b) => a + b.valorAtual, 0)}
                </p>
                <p className="text-slate-500">TC</p>
              </div>
              <div className="p-1.5 bg-slate-50 rounded text-center">
                <p className="font-bold text-slate-700">
                  {hospital.sadt.laboratorio.reduce((a, b) => a + b.valorAtual, 0)}
                </p>
                <p className="text-slate-500">Lab</p>
              </div>
            </div>
          </TabsContent>

          {/* Aba Biópsias */}
          <TabsContent value="biopsias" className="space-y-2 mt-0">
            <div className="text-center mb-2">
              <p className="text-xs text-slate-500">Biópsias/Mês</p>
              <p className="text-xl font-bold" style={{ color: CORES_SAUDE_MUNICIPAL.hospital }}>
                {hospital.indicadores.biopsiasMes}
              </p>
              <Progress value={percentualMetaBiopsias} className="h-1.5 mt-1" />
              <p className="text-[10px] text-slate-400">
                {percentualMetaBiopsias.toFixed(0)}% da meta ({hospital.metas.biopsiasMes})
              </p>
            </div>

            <div className="space-y-2">
              {Object.entries(hospital.biopsias).map(([key, bio]) => (
                <div key={bio.id} className="flex items-center justify-between text-[10px] p-2 bg-slate-50 rounded">
                  <span className="text-slate-600">{bio.nome}</span>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold" style={{ color: CORES_SAUDE_MUNICIPAL.hospital }}>
                      {bio.valorAtual}/{bio.valorMeta}
                    </span>
                    <div className="w-12 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${(bio.valorAtual / bio.valorMeta) * 100}%`,
                          backgroundColor: CORES_SAUDE_MUNICIPAL.hospital,
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Botões de Ação */}
        <div className="mt-3 grid grid-cols-2 gap-2">
          <ModalAuditoria
            unidadeId={hospital.id}
            unidadeNome={hospital.nome}
            secoes={hospital.secoes}
          >
            <Button variant="outline" size="sm" className="w-full text-xs">
              <Eye className="h-3.5 w-3.5 mr-1" />
              Auditar
            </Button>
          </ModalAuditoria>

          <ModalMetas
            unidadeId={hospital.id}
            unidadeNome={hospital.nome}
            secoesIniciais={hospital.secoes}
          >
            <Button variant="outline" size="sm" className="w-full text-xs">
              <Target className="h-3.5 w-3.5 mr-1" />
              Metas
            </Button>
          </ModalMetas>
        </div>
      </CardContent>
    </Card>
  );
}
