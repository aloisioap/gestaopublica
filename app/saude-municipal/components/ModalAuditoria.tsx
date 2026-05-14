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
import { Textarea } from "@/components/ui/textarea";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Eye, Plus, Calendar, User, FileText, TrendingUp } from "lucide-react";
import { MetaSecao, RegistroAuditoria, adicionarRegistro, getRegistrosPorSecao } from "@/lib/dados-saude-municipal";
import { CORES_SAUDE_MUNICIPAL } from "@/lib/dados-saude-municipal";

interface ModalAuditoriaProps {
  unidadeId: string;
  unidadeNome: string;
  secoes: MetaSecao[];
  children?: React.ReactNode;
}

export function ModalAuditoria({ unidadeId, unidadeNome, secoes, children }: ModalAuditoriaProps) {
  const [open, setOpen] = useState(false);
  const [secaoSelecionada, setSecaoSelecionada] = useState<string>(secoes[0]?.id || "");
  const [quantidade, setQuantidade] = useState("");
  const [observacao, setObservacao] = useState("");
  const [registros, setRegistros] = useState<RegistroAuditoria[]>([]);

  const secaoAtual = secoes.find(s => s.id === secaoSelecionada);

  const carregarRegistros = () => {
    if (secaoSelecionada) {
      const regs = getRegistrosPorSecao(unidadeId, secaoSelecionada);
      setRegistros(regs);
    }
  };

  const handleAdicionar = () => {
    if (!secaoSelecionada || !quantidade) return;

    adicionarRegistro({
      unidadeId,
      secaoId: secaoSelecionada,
      data: new Date().toISOString().split("T")[0],
      quantidade: parseInt(quantidade),
      observacao,
      usuario: "Usuário Logado",
    });

    setQuantidade("");
    setObservacao("");
    carregarRegistros();
  };

  const calcularTotal = () => {
    return registros.reduce((acc, r) => acc + r.quantidade, 0);
  };

  const calcularPercentual = () => {
    if (!secaoAtual) return 0;
    const total = calcularTotal();
    return Math.min(100, (total / secaoAtual.valorMeta) * 100);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children || (
          <Button variant="outline" size="sm" className="flex-1">
            <Eye className="h-4 w-4 mr-1" />
            Auditar
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Eye className="h-5 w-5" style={{ color: CORES_SAUDE_MUNICIPAL.primaria }} />
            Auditoria - {unidadeNome}
          </DialogTitle>
        </DialogHeader>

        <Tabs defaultValue={secoes[0]?.id} className="w-full" onValueChange={(v) => { setSecaoSelecionada(v); carregarRegistros(); }}>
          <TabsList className="grid w-full" style={{ gridTemplateColumns: `repeat(${Math.min(secoes.length, 4)}, 1fr)` }}>
            {secoes.map((secao) => (
              <TabsTrigger key={secao.id} value={secao.id} className="text-xs">
                {secao.nome}
              </TabsTrigger>
            ))}
          </TabsList>

          {secoes.map((secao) => (
            <TabsContent key={secao.id} value={secao.id} className="space-y-4">
              {/* Dashboard da Meta */}
              <div className="grid grid-cols-3 gap-4 p-4 bg-slate-50 rounded-lg">
                <div className="text-center">
                  <p className="text-xs text-slate-500">Meta</p>
                  <p className="text-xl font-bold" style={{ color: CORES_SAUDE_MUNICIPAL.primaria }}>
                    {secao.valorMeta}
                  </p>
                  <p className="text-xs text-slate-400">{secao.unidade}</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-slate-500">Realizado</p>
                  <p className="text-xl font-bold" style={{ color: CORES_SAUDE_MUNICIPAL.info }}>
                    {calcularTotal()}
                  </p>
                  <p className="text-xs text-slate-400">{secao.unidade}</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-slate-500">Alcance</p>
                  <p className="text-xl font-bold" style={{ color: calcularPercentual() >= 100 ? CORES_SAUDE_MUNICIPAL.sucesso : CORES_SAUDE_MUNICIPAL.alerta }}>
                    {calcularPercentual().toFixed(1)}%
                  </p>
                  <div className="w-full h-2 bg-slate-200 rounded-full mt-1 overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all"
                      style={{
                        width: `${calcularPercentual()}%`,
                        backgroundColor: calcularPercentual() >= 100 ? CORES_SAUDE_MUNICIPAL.sucesso : CORES_SAUDE_MUNICIPAL.alerta,
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Formulário de Novo Registro */}
              <div className="grid grid-cols-3 gap-4 p-4 border rounded-lg">
                <div>
                  <Label htmlFor="quantidade" className="text-xs">Quantidade</Label>
                  <Input
                    id="quantidade"
                    type="number"
                    value={quantidade}
                    onChange={(e) => setQuantidade(e.target.value)}
                    placeholder="0"
                  />
                </div>
                <div className="col-span-2">
                  <Label htmlFor="observacao" className="text-xs">Observação</Label>
                  <Textarea
                    id="observacao"
                    value={observacao}
                    onChange={(e) => setObservacao(e.target.value)}
                    placeholder="Observações sobre o registro..."
                    className="h-10"
                  />
                </div>
                <div className="col-span-3">
                  <Button
                    onClick={handleAdicionar}
                    className="w-full"
                    style={{ backgroundColor: CORES_SAUDE_MUNICIPAL.primaria }}
                    disabled={!quantidade}
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Adicionar Registro
                  </Button>
                </div>
              </div>

              {/* Lista de Registros */}
              <ScrollArea className="h-[250px] border rounded-lg">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px]">Data</TableHead>
                      <TableHead>Quantidade</TableHead>
                      <TableHead>Observação</TableHead>
                      <TableHead className="w-[100px]">Usuário</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {registros.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={4} className="text-center text-slate-400 py-8">
                          Nenhum registro encontrado
                        </TableCell>
                      </TableRow>
                    ) : (
                      registros.map((reg) => (
                        <TableRow key={reg.id}>
                          <TableCell className="text-xs">{reg.data}</TableCell>
                          <TableCell className="font-medium">{reg.quantidade}</TableCell>
                          <TableCell className="text-xs">{reg.observacao || "-"}</TableCell>
                          <TableCell className="text-xs">{reg.usuario}</TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </ScrollArea>
            </TabsContent>
          ))}
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
