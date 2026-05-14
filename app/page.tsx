"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const projetos = [
  { id: "bairro", numero: "Projeto 1" },
  { id: "gabinete", numero: "Projeto 2" },
  { id: "funsau", numero: "Projeto 3" },
  { id: "trt", numero: "Projeto 4" },
  { id: "saude-municipal", numero: "Projeto 5" },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-blue-300/20 -top-20 -left-20 rounded-full blur-3xl" />
        <div className="absolute w-80 h-80 bg-purple-300/20 top-1/3 right-0 rounded-full blur-3xl" />
        <div className="absolute w-72 h-72 bg-emerald-300/20 bottom-0 left-1/3 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent mb-4">
            Gestão de Projetos
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            Selecione o projeto
          </p>
        </header>

        {/* Grid de Projetos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {projetos.map((projeto) => (
            <Link key={projeto.id} href={`/${projeto.id}`}>
              <Card className="group overflow-hidden border-2 border-slate-200 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] cursor-pointer h-full hover:border-blue-300">
                <CardContent className="p-8 flex items-center justify-between">
                  <span className="text-2xl font-bold text-slate-900">
                    {projeto.numero}
                  </span>
                  <Button 
                    size="sm"
                    className="rounded-full bg-slate-900 text-white shadow-md group-hover:shadow-lg transition-all"
                  >
                    <ArrowRight className="h-4 w-4 mr-1 group-hover:translate-x-1 transition-transform" />
                    Entrar
                  </Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <p className="text-slate-400 text-sm">
            Sistema de gestão integrado
          </p>
        </div>
      </div>
    </main>
  );
}
