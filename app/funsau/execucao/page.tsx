"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Hospital, ArrowLeft, QrCode, CheckCircle, AlertCircle, Shield,
  Camera, User, Hash, MapPin, Smartphone, AlertTriangle, Search
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ValidacaoQREngine, DadosValidacaoQR } from "@/lib/validacao-qr";
import { mockPacientesPM, PATENTES_PM } from "@/lib/dados-mock";

export default function ExecucaoPage() {
  const [cpf, setCpf] = useState("");
  const [paciente, setPaciente] = useState<any>(null);
  const [qrCodeData, setQrCodeData] = useState<DadosValidacaoQR | null>(null);
  const [loading, setLoading] = useState(false);
  const [validacao, setValidacao] = useState<any>(null);
  
  // Dados do dispositivo (simulado)
  const [dispositivo] = useState({
    user_agent: 'mobile-app-funsau-v1.0',
    ip: '192.168.1.100',
    tipo: 'mobile' as const
  });

  const buscarPaciente = () => {
    const pac = mockPacientesPM.find(p => p.cpf === cpf);
    if (pac) {
      setPaciente(pac);
      // Gera dados do QR Code
      const qrData: DadosValidacaoQR = {
        paciente_id: pac.id,
        matricula_pm: pac.matricula,
        patente: pac.patente,
        nome: pac.nome,
        tipo_sanguineo: pac.tipo_sanguineo,
        alergias: pac.alergias,
        qr_code_hash: ValidacaoQREngine.gerarHashQRPaciente(pac.matricula, pac.created_at),
        data_validade_qr: new Date(Date.now() + ValidacaoQREngine.TEMPO_EXPIRACAO_QR).toISOString()
      };
      setQrCodeData(qrData);
    } else {
      alert("Paciente não encontrado. Use CPF: 123.456.789-00, 987.654.321-00 ou 456.789.123-00");
    }
  };

  const validarQRCode = async () => {
    if (!qrCodeData) return;
    
    setLoading(true);
    
    // Simula validação com delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const resultado = await ValidacaoQREngine.validarQRPaciente(qrCodeData, dispositivo, true);
    
    setValidacao(resultado);
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link href="/funsau" className="p-2 rounded-lg hover:bg-slate-100 transition-colors">
                <ArrowLeft className="h-5 w-5 text-slate-600" />
              </Link>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-slate-900">Validação de Pacientes</h1>
                  <p className="text-xs text-slate-500">Execução de Procedimentos - QR Code</p>
                </div>
              </div>
            </div>
            <Badge className="bg-purple-100 text-purple-700">
              <Smartphone className="h-3 w-3 mr-1" />
              Dispositivo Móvel
            </Badge>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Busca por CPF */}
        <Card className="mb-8 border-purple-200 bg-purple-50/50">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-purple-100 rounded-xl">
                  <Search className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Consulta para Validação</h3>
                  <p className="text-sm text-slate-500">Busque o policial para validação biométrica</p>
                </div>
              </div>
              <div className="flex-1 w-full md:w-auto">
                <div className="flex gap-2">
                  <Input 
                    placeholder="Digite o CPF do policial..."
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                    className="flex-1 rounded-xl"
                  />
                  <Button 
                    onClick={buscarPaciente}
                    className="bg-purple-600 hover:bg-purple-700 rounded-xl"
                    disabled={loading}
                  >
                    <Search className="h-4 w-4 mr-2" />
                    Buscar
                  </Button>
                </div>
                <p className="text-xs text-slate-400 mt-2">
                  💡 Use CPFs de demonstração: 123.456.789-00, 987.654.321-00 ou 456.789.123-00
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {paciente && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Dados do Paciente */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5 text-purple-600" />
                  Dados do Policial
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                    <User className="h-8 w-8 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-slate-900">{paciente.nome}</h3>
                    <p className="text-sm text-slate-500">CPF: {paciente.cpf}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge className={PATENTES_PM.find(p => p.nome === paciente.patente)?.cor || 'bg-gray-100'}>
                        {paciente.patente}
                      </Badge>
                      <span className="text-xs text-slate-400">Matrícula: {paciente.matricula}</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-200">
                  <div>
                    <p className="text-xs text-slate-500">Unidade</p>
                    <p className="text-sm font-medium">{paciente.unidade}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Tipo Sanguíneo</p>
                    <p className="text-sm font-medium">{paciente.tipo_sanguineo}</p>
                  </div>
                </div>

                {paciente.alergias.length > 0 && (
                  <div className="pt-4 border-t border-slate-200">
                    <p className="text-xs text-slate-500 mb-2">Alergias Cadastradas</p>
                    <div className="flex flex-wrap gap-2">
                      {paciente.alergias.map((alergia: string, idx: number) => (
                        <Badge key={idx} variant="destructive" className="text-xs">
                          ⚠️ {alergia}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* QR Code e Validação */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <QrCode className="h-5 w-5 text-purple-600" />
                  Validação Biométrica
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {qrCodeData && (
                  <>
                    <div className="aspect-square bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl flex items-center justify-center">
                      <div className="text-center">
                        <QrCode className="h-24 w-24 text-purple-600 mx-auto mb-2" />
                        <p className="text-xs text-slate-600">QR Code Gerado</p>
                        <p className="text-xs font-mono text-slate-500 mt-1">
                          Hash: {qrCodeData.qr_code_hash.substring(0, 12)}...
                        </p>
                      </div>
                    </div>

                    <div className="p-3 bg-slate-50 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Smartphone className="h-4 w-4 text-slate-600" />
                        <span className="text-xs font-medium text-slate-700">Dispositivo</span>
                      </div>
                      <div className="text-xs text-slate-600 space-y-1">
                        <p>IP: {dispositivo.ip}</p>
                        <p>Agent: {dispositivo.user_agent}</p>
                        <p>Tipo: {dispositivo.tipo}</p>
                      </div>
                    </div>

                    {validacao ? (
                      <div className={`p-4 rounded-lg border ${
                        validacao.proxima_acao === 'liberar' ? 'border-emerald-200 bg-emerald-50' :
                        validacao.proxima_acao === 'verificar' ? 'border-amber-200 bg-amber-50' :
                        'border-red-200 bg-red-50'
                      }`}>
                        <div className="flex items-center gap-2 mb-2">
                          {validacao.proxima_acao === 'liberar' ? (
                            <CheckCircle className="h-5 w-5 text-emerald-600" />
                          ) : validacao.proxima_acao === 'verificar' ? (
                            <AlertCircle className="h-5 w-5 text-amber-600" />
                          ) : (
                            <AlertTriangle className="h-5 w-5 text-red-600" />
                          )}
                          <span className="text-sm font-bold">
                            {validacao.resultado === 'valido' ? '✅ VALIDADO' :
                             validacao.resultado === 'suspeito' ? '⚠️ VERIFICAÇÃO NECESSÁRIA' :
                             validacao.resultado === 'expirado' ? '❌ EXPIRADO' : '❌ REJEITADO'}
                          </span>
                        </div>
                        <p className="text-xs text-slate-700 mb-2">
                          {validacao.dados.biom_encontrada ? 'Biometria confirmada' : 'Biometria não verificada'}
                          {validacao.dados.localizacao && (
                            <span className="block mt-1">
                              📍 Local: {validacao.dados.localizacao.endereco_estimado}
                            </span>
                          )}
                        </p>
                        {validacao.alertas.length > 0 && (
                          <div className="text-xs text-slate-600 mt-2 space-y-1">
                            <p className="font-medium">Alertas:</p>
                            {validacao.alertas.map((alerta: string, idx: number) => (
                              <p key={idx} className="text-amber-700">• {alerta}</p>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Button 
                        onClick={validarQRCode}
                        className="w-full bg-gradient-to-r from-purple-600 to-violet-700"
                        disabled={loading}
                      >
                        {loading ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2" />
                            Validando...
                          </>
                        ) : (
                          <>
                            <Camera className="h-4 w-4 mr-2" />
                            Validar QR Code Biométrico
                          </>
                        )}
                      </Button>
                    )}
                  </>
                )}
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </main>
  );
}