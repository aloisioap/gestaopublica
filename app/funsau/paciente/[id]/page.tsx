"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { 
  ArrowLeft, User, Phone, Mail, MapPin, Heart, FileText, 
  Calendar, AlertTriangle, CheckCircle, Clock, Activity,
  Shield, Users, FileCheck, Stethoscope, Printer, Download,
  ChevronRight, QrCode, Edit, Plus, History
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { mockPacientesPM, getProtocolosByPaciente, classificarIMC } from "@/lib/dados-mock";

export default function PacienteDetalhesPage() {
  const params = useParams();
  const router = useRouter();
  const pacienteId = params?.id as string;
  
  const paciente = mockPacientesPM.find(p => p.id === pacienteId);
  const protocolos = paciente ? getProtocolosByPaciente(paciente.id) : [];
  
  const [activeTab, setActiveTab] = useState("dados");

  if (!paciente) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <Card className="p-8 text-center">
          <User className="h-16 w-16 text-slate-300 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-slate-900">Paciente não encontrado</h2>
          <p className="text-slate-500 mt-2">O policial não foi encontrado.</p>
          <Button className="mt-4" onClick={() => router.push('/funsau')}>
            Voltar
          </Button>
        </Card>
      </div>
    );
  }

  const imcClassificacao = classificarIMC(paciente.imc);
  const imcCor = 
    paciente.imc < 18.5 ? 'text-amber-600' :
    paciente.imc < 25 ? 'text-emerald-600' :
    paciente.imc < 30 ? 'text-amber-600' : 'text-red-600';

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" onClick={() => router.back()}>
                <ArrowLeft className="h-5 w-5 text-slate-600" />
              </Button>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-lg font-bold text-slate-900">Ficha do Policial</h1>
                  <p className="text-xs text-slate-500">{paciente.patente} - {paciente.matricula}</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="gap-2">
                <Printer className="h-4 w-4" />
                Imprimir
              </Button>
              <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 gap-2">
                <Plus className="h-4 w-4" />
                Novo Atendimento
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <Card className="mb-6 border-emerald-200">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="flex flex-col items-center gap-4">
                <div className="w-32 h-40 bg-gradient-to-br from-slate-200 to-slate-300 rounded-lg flex items-center justify-center border-4 border-white shadow-lg">
                  <User className="h-16 w-16 text-slate-400" />
                </div>
                <div className="text-center">
                  <div className="bg-slate-100 p-3 rounded-lg">
                    <QrCode className="h-16 w-16 text-slate-700 mx-auto" />
                    <p className="text-xs text-slate-500 mt-1">{paciente.qr_code}</p>
                  </div>
                </div>
              </div>

              <div className="flex-1">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <Badge className="bg-blue-100 text-blue-800 text-sm px-3 py-1">
                        {paciente.patente}
                      </Badge>
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900">{paciente.nome}</h2>
                    <p className="text-slate-500 mt-1">Matrícula: {paciente.matricula}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="bg-slate-50 p-3 rounded-lg">
                    <p className="text-xs text-slate-500">CPF</p>
                    <p className="font-medium text-slate-900">{paciente.cpf}</p>
                  </div>
                  <div className="bg-slate-50 p-3 rounded-lg">
                    <p className="text-xs text-slate-500">Idade</p>
                    <p className="font-medium text-slate-900">{paciente.idade} anos</p>
                  </div>
                  <div className="bg-slate-50 p-3 rounded-lg">
                    <p className="text-xs text-slate-500">Tempo de Serviço</p>
                    <p className="font-medium text-slate-900">{paciente.tempo_servico_anos} anos</p>
                  </div>
                  <div className="bg-slate-50 p-3 rounded-lg">
                    <p className="text-xs text-slate-500">Tipo Sanguíneo</p>
                    <p className="font-bold text-red-600">{paciente.tipo_sanguineo}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 text-slate-600">
                    <Shield className="h-4 w-4 text-emerald-600" />
                    <span className="text-sm">{paciente.unidade}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <MapPin className="h-4 w-4 text-emerald-600" />
                    <span className="text-sm">{paciente.lotacao}</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="dados">Dados Pessoais</TabsTrigger>
            <TabsTrigger value="saude">Saúde</TabsTrigger>
            <TabsTrigger value="historico">Histórico</TabsTrigger>
            <TabsTrigger value="protocolos">Protocolos</TabsTrigger>
            <TabsTrigger value="dependentes">Dependentes</TabsTrigger>
          </TabsList>

          <TabsContent value="dados" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-emerald-600" />
                    Dados Funcionais
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-slate-500">Matrícula</p>
                      <p className="font-medium">{paciente.matricula}</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">Patente</p>
                      <p className="font-medium">{paciente.patente}</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">Data de Ingresso</p>
                      <p className="font-medium">{new Date(paciente.data_ingresso).toLocaleDateString('pt-BR')}</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">Tempo de Serviço</p>
                      <p className="font-medium">{paciente.tempo_servico_anos} anos</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-emerald-600" />
                    Endereço
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-xs text-slate-500">Logradouro</p>
                    <p className="font-medium">{paciente.endereco}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-slate-500">Bairro</p>
                      <p className="font-medium">{paciente.bairro}</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">CEP</p>
                      <p className="font-medium">{paciente.cep}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="saude" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5 text-emerald-600" />
                  Dados Antropométricos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center p-4 bg-slate-50 rounded-lg">
                    <p className="text-xs text-slate-500 mb-1">Altura</p>
                    <p className="text-2xl font-bold text-slate-900">{paciente.altura}m</p>
                  </div>
                  <div className="text-center p-4 bg-slate-50 rounded-lg">
                    <p className="text-xs text-slate-500 mb-1">Peso</p>
                    <p className="text-2xl font-bold text-slate-900">{paciente.peso}kg</p>
                  </div>
                  <div className="text-center p-4 bg-slate-50 rounded-lg">
                    <p className="text-xs text-slate-500 mb-1">IMC</p>
                    <p className={`text-2xl font-bold ${imcCor}`}>{paciente.imc}</p>
                    <p className="text-xs text-slate-500">{imcClassificacao}</p>
                  </div>
                  <div className="text-center p-4 bg-slate-50 rounded-lg">
                    <p className="text-xs text-slate-500 mb-1">Tipo Sanguíneo</p>
                    <p className="text-2xl font-bold text-red-600">{paciente.tipo_sanguineo}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="h-5 w-5 text-red-600" />
                    Comorbidades
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {paciente.comorbidades.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                      {paciente.comorbidades.map((comorb, idx) => (
                        <Badge key={idx} variant="destructive" className="text-sm">
                          {comorb}
                        </Badge>
                      ))}
                    </div>
                  ) : (
                    <p className="text-slate-500">Nenhuma comorbidade registrada</p>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-amber-600" />
                    Alergias
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {paciente.alergias.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                      {paciente.alergias.map((alergia, idx) => (
                        <Badge key={idx} className="bg-amber-100 text-amber-800 text-sm">
                          {alergia}
                        </Badge>
                      ))}
                    </div>
                  ) : (
                    <p className="text-slate-500">Nenhuma alergia registrada</p>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="historico" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <History className="h-5 w-5 text-emerald-600" />
                  Histórico de Atendimentos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {paciente.historico_atendimentos.map((atendimento) => (
                    <div key={atendimento.id} className="border-l-4 border-emerald-400 pl-4 py-3 bg-slate-50 rounded-r-lg">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <div className="flex items-center gap-2">
                            <Badge className={
                              atendimento.tipo === 'Emergência' ? 'bg-red-100 text-red-800' :
                              atendimento.tipo === 'Cirurgia' ? 'bg-purple-100 text-purple-800' :
                              'bg-blue-100 text-blue-800'
                            }>
                              {atendimento.tipo}
                            </Badge>
                            <span className="text-sm text-slate-500">{new Date(atendimento.data).toLocaleDateString('pt-BR')}</span>
                          </div>
                          <p className="font-semibold text-slate-900 mt-1">{atendimento.especialidade}</p>
                        </div>
                        <Badge variant={atendimento.apto_para_servico ? 'default' : 'destructive'}>
                          {atendimento.apto_para_servico ? 'Apto' : 'Inapto'}
                        </Badge>
                      </div>
                      
                      <div className="mt-3">
                        <p className="text-sm text-slate-700"><span className="font-medium">Diagnóstico:</span> {atendimento.diagnostico}</p>
                        {atendimento.sintomas && (
                          <p className="text-sm text-slate-600 mt-1"><span className="font-medium">Sintomas:</span> {atendimento.sintomas}</p>
                        )}
                      </div>

                      {atendimento.dias_atestado > 0 && (
                        <div className="mt-2 flex items-center gap-2">
                          <AlertTriangle className="h-4 w-4 text-amber-600" />
                          <span className="text-sm text-amber-700">Atestado: {atendimento.dias_atestado} dias</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="protocolos" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileCheck className="h-5 w-5 text-emerald-600" />
                  Protocolos Médicos
                </CardTitle>
              </CardHeader>
              <CardContent>
                {protocolos.length > 0 ? (
                  <div className="space-y-4">
                    {protocolos.map((protocolo) => (
                      <div key={protocolo.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-slate-900">{protocolo.numero_protocolo}</span>
                              <Badge className={
                                protocolo.status === 'Liberado' ? 'bg-emerald-100 text-emerald-800' :
                                protocolo.status === 'Em Execução' ? 'bg-blue-100 text-blue-800' :
                                'bg-amber-100 text-amber-800'
                              }>
                                {protocolo.status}
                              </Badge>
                            </div>
                            <p className="text-sm text-slate-600 mt-1">{protocolo.tipo_atendimento} - {protocolo.especialidade}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-emerald-600">
                              R$ {protocolo.valor_total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                            </p>
                          </div>
                        </div>
                        
                        <p className="text-sm text-slate-700 mb-2">
                          <span className="font-medium">Diagnóstico:</span> {protocolo.diagnostico}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-slate-500 text-center py-8">Nenhum protocolo registrado</p>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="dependentes" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-emerald-600" />
                  Dependentes
                </CardTitle>
              </CardHeader>
              <CardContent>
                {paciente.dependentes.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {paciente.dependentes.map((dep, idx) => (
                      <div key={idx} className="p-4 bg-slate-50 rounded-lg flex items-center gap-4">
                        <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                          <User className="h-6 w-6 text-emerald-600" />
                        </div>
                        <div>
                          <p className="font-medium text-slate-900">{dep.nome}</p>
                          <p className="text-sm text-slate-600">{dep.parentesco}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-slate-500 text-center py-8">Nenhum dependente registrado</p>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
