"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Plus, Trash2, Target, Save } from "lucide-react";
import { MetaSecao } from "@/lib/dados-saude-municipal";
import { CORES_SAUDE_MUNICIPAL } from "@/lib/dados-saude-municipal";

interface ModalMetasProps {
  unidadeId: string;
  unidadeNome: string;
  secoesIniciais: MetaSecao[];
  onSave?: (secoes: MetaSecao[]) => void;
  children?: React.ReactNode;
}

export function ModalMetas({ unidadeId, unidadeNome, secoesIniciais, onSave, children }: ModalMetasProps) {
  const [open, setOpen] = useState(false);
  const [secoes, setSecoes] = useState<MetaSecao[]>(secoesIniciais);
  const [novaSecao, setNovaSecao] = useState({ nome: "", valorMeta: "", unidade: "atendimentos" });

  const handleAtualizarMeta = (id: string, campo: "valorMeta" | "valorAtual", valor: string) => {
    setSecoes(secoes.map(s => s.id === id ? { ...s, [campo]: parseInt(valor) || 0 } : s));
  };

  const handleAdicionarSecao = () => {
    if (!novaSecao.nome || !novaSecao.valorMeta) return;

    const nova: MetaSecao = {
      id: `sec-${Date.now()}`,
      nome: novaSecao.nome,
      valorMeta: parseInt(novaSecao.valorMeta),
      valorAtual: 0,
      unidade: novaSecao.unidade,
    };

    setSecoes([...secoes, nova]);
    setNovaSecao({ nome: "", valorMeta: "", unidade: "atendimentos" });
  };

  const handleRemoverSecao = (id: string) => {
    setSecoes(secoes.filter(s => s.id !== id));
  };

  const handleSalvar = () => {
    onSave?.(secoes);
    setOpen(false);
  };

  const calcularAlcance = (atual: number, meta: number) => {
    return meta > 0 ? Math.min(100, (atual / meta) * 100) : 0;
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children || (
          <Button variant="outline" size="sm" className="flex-1">
            <Target className="h-4 w-4 mr-1" />
            Metas
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Target className="h-5 w-5" style={{ color: CORES_SAUDE_MUNICIPAL.destaque }} />
            Gerenciar Metas - {unidadeNome}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Tabela de Metas Existentes */}
          <div className="border rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Seção</TableHead>
                  <TableHead className="w-[120px]">Meta</TableHead>
                  <TableHead className="w-[120px]">Atual</TableHead>
                  <TableHead className="w-[100px]">Unidade</TableHead>
                  <TableHead className="w-[100px]">Alcance</TableHead>
                  <TableHead className="w-[50px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {secoes.map((secao) => (
                  <TableRow key={secao.id}>
                    <TableCell className="font-medium">{secao.nome}</TableCell>
                    <TableCell>
                      <Input
                        type="number"
                        value={secao.valorMeta}
                        onChange={(e) => handleAtualizarMeta(secao.id, "valorMeta", e.target.value)}
                        className="h-8"
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        type="number"
                        value={secao.valorAtual}
                        onChange={(e) => handleAtualizarMeta(secao.id, "valorAtual", e.target.value)}
                        className="h-8"
                      />
                    </TableCell>
                    <TableCell>
                      <select
                        value={secao.unidade}
                        onChange={(e) => setSecoes(secoes.map(s => s.id === secao.id ? { ...s, unidade: e.target.value } : s))}
                        className="h-8 px-2 border rounded text-sm w-full"
                      >
                        <option value="atendimentos">atendimentos</option>
                        <option value="consultas">consultas</option>
                        <option value="exames">exames</option>
                        <option value="procedimentos">procedimentos</option>
                        <option value="sessões">sessões</option>
                        <option value="doses">doses</option>
                        <option value="pessoas">pessoas</option>
                        <option value="%">%</option>
                        <option value="minutos">minutos</option>
                        <option value="horas">horas</option>
                        <option value="leitos">leitos</option>
                      </select>
                    </TableCell>
                    <TableCell>
                      <span
                        className="text-sm font-bold"
                        style={{
                          color: calcularAlcance(secao.valorAtual, secao.valorMeta) >= 100
                            ? CORES_SAUDE_MUNICIPAL.sucesso
                            : CORES_SAUDE_MUNICIPAL.alerta,
                        }}
                      >
                        {calcularAlcance(secao.valorAtual, secao.valorMeta).toFixed(0)}%
                      </span>
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-red-500"
                        onClick={() => handleRemoverSecao(secao.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Adicionar Nova Meta */}
          <div className="p-4 border rounded-lg bg-slate-50">
            <h4 className="text-sm font-medium mb-3 flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Adicionar Nova Seção/Meta
            </h4>
            <div className="grid grid-cols-4 gap-3">
              <div className="col-span-2">
                <Label className="text-xs">Nome da Seção</Label>
                <Input
                  value={novaSecao.nome}
                  onChange={(e) => setNovaSecao({ ...novaSecao, nome: e.target.value })}
                  placeholder="Ex: Curativos"
                />
              </div>
              <div>
                <Label className="text-xs">Meta</Label>
                <Input
                  type="number"
                  value={novaSecao.valorMeta}
                  onChange={(e) => setNovaSecao({ ...novaSecao, valorMeta: e.target.value })}
                  placeholder="0"
                />
              </div>
              <div>
                <Label className="text-xs">Unidade</Label>
                <select
                  value={novaSecao.unidade}
                  onChange={(e) => setNovaSecao({ ...novaSecao, unidade: e.target.value })}
                  className="w-full h-10 px-3 border rounded-md text-sm"
                >
                  <option value="atendimentos">atendimentos</option>
                  <option value="consultas">consultas</option>
                  <option value="exames">exames</option>
                  <option value="procedimentos">procedimentos</option>
                  <option value="sessões">sessões</option>
                </select>
              </div>
            </div>
            <Button
              onClick={handleAdicionarSecao}
              className="mt-3 w-full"
              variant="outline"
              disabled={!novaSecao.nome || !novaSecao.valorMeta}
            >
              <Plus className="h-4 w-4 mr-2" />
              Adicionar Seção
            </Button>
          </div>

          {/* Botão Salvar */}
          <Button
            onClick={handleSalvar}
            className="w-full"
            style={{ backgroundColor: CORES_SAUDE_MUNICIPAL.primaria }}
          >
            <Save className="h-4 w-4 mr-2" />
            Salvar Alterações
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
