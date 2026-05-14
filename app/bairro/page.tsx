"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Plus, MapPin, Users, ArrowLeft, ArrowRight, Loader2,
  AlertCircle, CheckCircle, UserPlus
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/lib/supabase";
import { mockBairros } from "@/lib/dados-mock";

interface Bairro {
  id: string;
  nome: string;
  cidade?: string | null;
  estado?: string | null;
  descricao?: string | null;
  imagem_url?: string | null;
  total_moradores?: number;
  problemas_pendentes?: number;
  problemas_resolvidos?: number;
  ultimos_moradores?: { nome: string; id: string }[];
  tipos_problemas?: string[];
  created_at?: string;
  updated_at?: string;
}

export default function BairrosPage() {
  const [bairros, setBairros] = useState<Bairro[]>([]);
  const [loading, setLoading] = useState(true);
  const [usandoMock, setUsandoMock] = useState(false);

  useEffect(() => {
    fetchBairros();
  }, []);

  const fetchBairros = async () => {
    try {
      const { data, error } = await supabase
        .from("bairros")
        .select("*")
        .order("created_at", { ascending: false });

      if (error || !data || data.length === 0) {
        console.log("Usando dados de demonstração");
        setBairros(mockBairros);
        setUsandoMock(true);
      } else {
        // Se tiver dados no banco, usa os do banco
        setBairros(data);
        setUsandoMock(false);
      }
    } catch (err) {
      console.log("Erro, usando mock:", err);
      setBairros(mockBairros);
      setUsandoMock(true);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-12 w-12 animate-spin text-blue-600" />
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link href="/" className="p-2 rounded-lg hover:bg-slate-200 transition-colors">
            <ArrowLeft className="h-5 w-5 text-slate-600" />
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Perfil Gestão</h1>
            <p className="text-slate-500">Gestão de Bairros</p>
          </div>
        </div>

        {/* Botão Novo Bairro + Aviso Demo */}
        <div className="mb-8 flex items-center justify-between">
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus className="h-4 w-4 mr-2" />
            Novo Bairro
          </Button>
          {usandoMock && (
            <div className="px-4 py-2 bg-amber-50 border border-amber-200 rounded-lg">
              <span className="text-sm text-amber-700">
                <span className="font-semibold">Modo Demonstração:</span> Dados fictícios para apresentação
              </span>
            </div>
          )}
        </div>

        {/* Lista de Bairros */}
        {bairros.length === 0 ? (
          <div className="text-center py-20">
            <MapPin className="h-16 w-16 text-slate-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-slate-700">Nenhum bairro cadastrado</h3>
            <p className="text-slate-500 mt-2">Clique em "Novo Bairro" para começar</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bairros.map((bairro) => (
              <Link key={bairro.id} href={`/bairro/${bairro.id}`}>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer overflow-hidden">
                  <div className="h-40 relative overflow-hidden">
                    {bairro.imagem_url ? (
                      <>
                        <img 
                          src={bairro.imagem_url} 
                          alt={bairro.nome}
                          className="w-full h-full object-cover transition-transform hover:scale-105"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = 'none';
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      </>
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                        <MapPin className="h-12 w-12 text-white/50" />
                      </div>
                    )}
                    <div className="absolute bottom-2 left-2 right-2">
                      <h3 className="text-lg font-bold text-white drop-shadow-md">{bairro.nome}</h3>
                      <p className="text-white/80 text-xs">{bairro.cidade || "Belém"} - {bairro.estado || "PA"}</p>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <p className="text-slate-500 text-xs mb-2">Belém - Pará</p>
                    
                    {/* Estatísticas */}
                    {bairro.total_moradores !== undefined && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        <div className="flex items-center gap-1 px-2 py-1 bg-blue-50 rounded-full text-xs">
                          <Users className="h-3 w-3 text-blue-600" />
                          <span className="font-semibold text-blue-900">{bairro.total_moradores}</span>
                          <span className="text-blue-600">moradores</span>
                        </div>
                        {bairro.problemas_pendentes ? (
                          <div className="flex items-center gap-1 px-2 py-1 bg-amber-50 rounded-full text-xs">
                            <AlertCircle className="h-3 w-3 text-amber-600" />
                            <span className="font-semibold text-amber-900">{bairro.problemas_pendentes}</span>
                            <span className="text-amber-600">pendentes</span>
                          </div>
                        ) : null}
                        {bairro.problemas_resolvidos ? (
                          <div className="flex items-center gap-1 px-2 py-1 bg-emerald-50 rounded-full text-xs">
                            <CheckCircle className="h-3 w-3 text-emerald-600" />
                            <span className="font-semibold text-emerald-900">{bairro.problemas_resolvidos}</span>
                            <span className="text-emerald-600">resolvidos</span>
                          </div>
                        ) : null}
                      </div>
                    )}

                    {/* Tags de problemas */}
                    {bairro.tipos_problemas && bairro.tipos_problemas.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-1">
                        {bairro.tipos_problemas.map((tipo, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs border-red-200 text-red-600 bg-red-50">
                            {tipo}
                          </Badge>
                        ))}
                      </div>
                    )}

                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center text-blue-600 text-sm font-medium">
                        Acessar
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </div>
                      <Button variant="outline" size="sm" className="h-8 text-xs border-emerald-200 text-emerald-600 hover:bg-emerald-50">
                        <UserPlus className="h-3 w-3 mr-1" />
                        Morador
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
