"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2, CheckCircle, XCircle, Database, AlertTriangle } from "lucide-react";

export default function DiagnosticoPage() {
  const [loading, setLoading] = useState(true);
  const [tests, setTests] = useState<{
    envUrl: boolean;
    envKey: boolean;
    connection: boolean;
    tabelaBairros: boolean;
    tabelaRegistros: boolean;
    storage: boolean;
    erros: string[];
  }>({
    envUrl: false,
    envKey: false,
    connection: false,
    tabelaBairros: false,
    tabelaRegistros: false,
    storage: false,
    erros: [],
  });

  useEffect(() => {
    runDiagnostics();
  }, []);

  const runDiagnostics = async () => {
    setLoading(true);
    const newTests = {
      envUrl: false,
      envKey: false,
      connection: false,
      tabelaBairros: false,
      tabelaRegistros: false,
      storage: false,
      erros: [] as string[],
    };

    // Test 1: Verificar variáveis de ambiente
    const envUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const envKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (envUrl && envUrl !== "https://your-project.supabase.co") {
      newTests.envUrl = true;
    } else {
      newTests.erros.push("NEXT_PUBLIC_SUPABASE_URL não configurada corretamente");
    }

    if (envKey && envKey !== "your-anon-key" && envKey.length > 20) {
      newTests.envKey = true;
    } else {
      newTests.erros.push("NEXT_PUBLIC_SUPABASE_ANON_KEY não configurada corretamente");
    }

    // Test 2: Testar conexão com Supabase
    try {
      const { error } = await supabase.from("bairros").select("count").limit(1);
      
      if (error) {
        if (error.message?.includes("does not exist")) {
          newTests.erros.push('Tabela "bairros" não existe. Execute o SQL de setup.');
        } else if (error.message?.includes("Invalid API key")) {
          newTests.erros.push("Chave de API inválida. Verifique suas credenciais do Supabase.");
        } else if (error.message?.includes("row-level security")) {
          newTests.erros.push("Política de segurança (RLS) bloqueando acesso. Execute as políticas do SQL.");
        } else if (error.code === "PGRST301" || error.message?.includes("JWT")) {
          newTests.erros.push("Token JWT inválido ou expirado. Verifique a ANON_KEY.");
        } else {
          newTests.erros.push(`Erro de conexão: ${error.message}`);
        }
      } else {
        newTests.connection = true;
        newTests.tabelaBairros = true;
      }
    } catch (err: any) {
      newTests.erros.push(`Erro ao conectar: ${err?.message || "Erro desconhecido"}`);
    }

    // Test 3: Testar tabela de registros
    if (newTests.connection) {
      try {
        const { error } = await supabase.from("registros").select("count").limit(1);
        if (!error) {
          newTests.tabelaRegistros = true;
        } else if (error.message?.includes("does not exist")) {
          newTests.erros.push('Tabela "registros" não existe. Execute o SQL de setup.');
        }
      } catch (err: any) {
        newTests.erros.push(`Erro na tabela registros: ${err?.message}`);
      }
    }

    // Test 4: Testar storage
    try {
      const { data, error } = await supabase.storage.getBucket("imagens");
      if (!error || error.message?.includes("already exists")) {
        newTests.storage = true;
      } else if (error.message?.includes("not found")) {
        newTests.erros.push('Bucket "imagens" não existe. Execute a parte de Storage do SQL.');
      }
    } catch (err: any) {
      newTests.erros.push(`Erro no storage: ${err?.message}`);
    }

    setTests(newTests);
    setLoading(false);
  };

  const getStatusIcon = (status: boolean) => {
    return status ? (
      <CheckCircle className="h-6 w-6 text-emerald-500" />
    ) : (
      <XCircle className="h-6 w-6 text-red-500" />
    );
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-900 mb-2">🔧 Diagnóstico do Banco</h1>
        <p className="text-slate-500 mb-8">Verificando a conexão com o Supabase...</p>

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="h-12 w-12 animate-spin text-blue-600" />
            <span className="ml-4 text-lg text-slate-600">Testando conexão...</span>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <Card className={`border-l-4 ${tests.envUrl ? "border-l-emerald-500" : "border-l-red-500"}`}>
                <CardContent className="p-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-500">Variável URL</p>
                    <p className="font-medium">NEXT_PUBLIC_SUPABASE_URL</p>
                  </div>
                  {getStatusIcon(tests.envUrl)}
                </CardContent>
              </Card>

              <Card className={`border-l-4 ${tests.envKey ? "border-l-emerald-500" : "border-l-red-500"}`}>
                <CardContent className="p-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-500">Variável Chave</p>
                    <p className="font-medium">NEXT_PUBLIC_SUPABASE_ANON_KEY</p>
                  </div>
                  {getStatusIcon(tests.envKey)}
                </CardContent>
              </Card>

              <Card className={`border-l-4 ${tests.connection ? "border-l-emerald-500" : "border-l-red-500"}`}>
                <CardContent className="p-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-500">Conexão</p>
                    <p className="font-medium">Supabase Conectado</p>
                  </div>
                  {getStatusIcon(tests.connection)}
                </CardContent>
              </Card>

              <Card className={`border-l-4 ${tests.tabelaBairros ? "border-l-emerald-500" : "border-l-red-500"}`}>
                <CardContent className="p-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-500">Tabela</p>
                    <p className="font-medium">bairros</p>
                  </div>
                  {getStatusIcon(tests.tabelaBairros)}
                </CardContent>
              </Card>

              <Card className={`border-l-4 ${tests.tabelaRegistros ? "border-l-emerald-500" : "border-l-red-500"}`}>
                <CardContent className="p-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-500">Tabela</p>
                    <p className="font-medium">registros</p>
                  </div>
                  {getStatusIcon(tests.tabelaRegistros)}
                </CardContent>
              </Card>

              <Card className={`border-l-4 ${tests.storage ? "border-l-emerald-500" : "border-l-red-500"}`}>
                <CardContent className="p-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-500">Storage</p>
                    <p className="font-medium">Bucket imagens</p>
                  </div>
                  {getStatusIcon(tests.storage)}
                </CardContent>
              </Card>
            </div>

            {tests.erros.length > 0 && (
              <Card className="border-red-200 bg-red-50 mb-6">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <AlertTriangle className="h-6 w-6 text-red-600" />
                    <h3 className="text-lg font-bold text-red-800">Problemas Encontrados</h3>
                  </div>
                  <ul className="space-y-2">
                    {tests.erros.map((erro, idx) => (
                      <li key={idx} className="text-red-700 flex items-start gap-2">
                        <span className="text-red-400">•</span>
                        {erro}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {tests.connection && tests.tabelaBairros && tests.tabelaRegistros && (
              <Card className="border-emerald-200 bg-emerald-50 mb-6">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-6 w-6 text-emerald-600" />
                    <h3 className="text-lg font-bold text-emerald-800">Tudo certo! 🎉</h3>
                  </div>
                  <p className="text-emerald-700 mt-2">
                    O banco de dados está conectado e as tabelas foram criadas corretamente.
                    <br />
                    Volte para a <a href="/" className="underline font-medium">página inicial</a> e cadastre seu primeiro bairro!
                  </p>
                </CardContent>
              </Card>
            )}

            <div className="bg-slate-100 rounded-xl p-6 mb-6">
              <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                <Database className="h-5 w-5" />
                Como resolver:
              </h3>
              <ol className="space-y-3 text-slate-700 list-decimal list-inside">
                <li>Acesse <a href="https://supabase.com/dashboard" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">https://supabase.com/dashboard</a></li>
                <li>Verifique se o projeto <code className="bg-white px-2 py-1 rounded">exnqmgcolnfawleqslce</code> está ativo (não pausado)</li>
                <li>Vá em "SQL Editor" e execute o arquivo <code className="bg-white px-2 py-1 rounded">supabase-setup-atualizado.sql</code></li>
                <li>Recarregue esta página</li>
              </ol>
            </div>

            <Button 
              onClick={runDiagnostics} 
              className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-purple-600"
            >
              <Loader2 className={`h-4 w-4 mr-2 ${loading ? "animate-spin" : ""}`} />
              Testar Novamente
            </Button>
          </>
        )}
      </div>
    </main>
  );
}
