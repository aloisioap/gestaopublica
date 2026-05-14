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
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Wrench, Plus, Calendar, DollarSign, Gauge, AlertTriangle, CheckCircle, Clock } from "lucide-react";
import { VeiculoMovel, ManutencaoVeiculo } from "@/lib/dados-saude-municipal";
import { CORES_SAUDE_MUNICIPAL } from "@/lib/dados-saude-municipal";

interface ModalManutencaoProps {
  veiculos: VeiculoMovel[];
  servicoNome: string;
  children?: React.ReactNode;
}

const statusColors: Record<string, string> = {
  "Operacional": "bg-green-100 text-green-700 border-green-200",
  "Manutenção": "bg-amber-100 text-amber-700 border-amber-200",
  "Inoperante": "bg-red-100 text-red-700 border-red-200",
};

const manutencaoStatusColors: Record<string, string> = {
  "Concluída": "bg-green-100 text-green-700",
  "Em andamento": "bg-blue-100 text-blue-700",
  "Pendente": "bg-amber-100 text-amber-700",
};

export function ModalManutencao({ veiculos, servicoNome, children }: ModalManutencaoProps) {
  const [open, setOpen] = useState(false);
  const [veiculoSelecionado, setVeiculoSelecionado] = useState<string>(veiculos[0]?.id || "");
  const [novaManutencao, setNovaManutencao] = useState({
    tipo: "Preventiva",
    descricao: "",
    custo: "",
    kmAtual: "",
    proximaRevisao: "",
  });

  const veiculoAtual = veiculos.find(v => v.id === veiculoSelecionado);

  const handleAdicionarManutencao = () => {
    // Aqui você implementaria a lógica para adicionar
    console.log("Adicionando manutenção:", novaManutencao);
    setNovaManutencao({
      tipo: "Preventiva",
      descricao: "",
      custo: "",
      kmAtual: "",
      proximaRevisao: "",
    });
  };

  const calcularGastosTotais = (manutencoes: ManutencaoVeiculo[]) => {
    return manutencoes.reduce((acc, m) => acc + m.custo, 0);
  };

  const calcularKmProximaRevisao = (kmAtual: number, proximaRevisao: number) => {
    return Math.max(0, proximaRevisao - kmAtual);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children || (
          <Button variant="outline" size="sm">
            <Wrench className="h-4 w-4 mr-1" />
            Manutenção
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Wrench className="h-5 w-5" style={{ color: CORES_SAUDE_MUNICIPAL.movel }} />
            Manutenção de Veículos - {servicoNome}
          </DialogTitle>
        </DialogHeader>

        <Tabs defaultValue={veiculos[0]?.id} onValueChange={setVeiculoSelecionado}>
          <TabsList className="grid w-full" style={{ gridTemplateColumns: `repeat(${Math.min(veiculos.length, 4)}, 1fr)` }}>
            {veiculos.map((veiculo) => (
              <TabsTrigger key={veiculo.id} value={veiculo.id} className="text-xs relative">
                {veiculo.nome}
                {veiculo.status !== "Operacional" && (
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
                )}
              </TabsTrigger>
            ))}
          </TabsList>

          {veiculos.map((veiculo) => (
            <TabsContent key={veiculo.id} value={veiculo.id} className="space-y-4">
              {/* Info do Veículo */}
              <div className="grid grid-cols-4 gap-4 p-4 bg-slate-50 rounded-lg">
                <div className="text-center">
                  <p className="text-xs text-slate-500">Placa</p>
                  <p className="text-lg font-bold">{veiculo.placa}</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-slate-500">Ano</p>
                  <p className="text-lg font-bold">{veiculo.ano}</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-slate-500">KM Atual</p>
                  <p className="text-lg font-bold">{veiculo.kmAtual.toLocaleString()}</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-slate-500">Status</p>
                  <Badge variant="outline" className={statusColors[veiculo.status]}>
                    {veiculo.status}
                  </Badge>
                </div>
              </div>

              {/* Métricas */}
              <div className="grid grid-cols-3 gap-4">
                <div className="p-3 border rounded-lg text-center">
                  <p className="text-xs text-slate-500">Atendimentos/Mês</p>
                  <p className="text-xl font-bold" style={{ color: CORES_SAUDE_MUNICIPAL.primaria }}>
                    {veiculo.atendimentosMes}
                  </p>
                  <p className="text-xs text-slate-400">meta: {veiculo.metaMes}</p>
                </div>
                <div className="p-3 border rounded-lg text-center">
                  <p className="text-xs text-slate-500">Total Manutenções</p>
                  <p className="text-xl font-bold" style={{ color: CORES_SAUDE_MUNICIPAL.info }}>
                    {veiculo.manutencoes.length}
                  </p>
                </div>
                <div className="p-3 border rounded-lg text-center">
                  <p className="text-xs text-slate-500">Gastos Totais</p>
                  <p className="text-xl font-bold" style={{ color: CORES_SAUDE_MUNICIPAL.destaque }}>
                    R$ {calcularGastosTotais(veiculo.manutencoes).toLocaleString()}
                  </p>
                </div>
              </div>

              {/* Formulário Nova Manutenção */}
              <div className="p-4 border rounded-lg bg-slate-50">
                <h4 className="text-sm font-medium mb-3 flex items-center gap-2">
                  <Plus className="h-4 w-4" />
                  Registrar Nova Manutenção
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label className="text-xs">Tipo</Label>
                    <select
                      value={novaManutencao.tipo}
                      onChange={(e) => setNovaManutencao({ ...novaManutencao, tipo: e.target.value })}
                      className="w-full h-10 px-3 border rounded-md text-sm"
                    >
                      <option value="Preventiva">Preventiva</option>
                      <option value="Corretiva">Corretiva</option>
                      <option value="Revisão">Revisão</option>
                      <option value="Emergencial">Emergencial</option>
                    </select>
                  </div>
                  <div>
                    <Label className="text-xs">Custo (R$)</Label>
                    <Input
                      type="number"
                      value={novaManutencao.custo}
                      onChange={(e) => setNovaManutencao({ ...novaManutencao, custo: e.target.value })}
                      placeholder="0,00"
                    />
                  </div>
                  <div>
                    <Label className="text-xs">KM Atual</Label>
                    <Input
                      type="number"
                      value={novaManutencao.kmAtual}
                      onChange={(e) => setNovaManutencao({ ...novaManutencao, kmAtual: e.target.value })}
                      placeholder={veiculo.kmAtual.toString()}
                    />
                  </div>
                  <div>
                    <Label className="text-xs">Próxima Revisão (KM)</Label>
                    <Input
                      type="number"
                      value={novaManutencao.proximaRevisao}
                      onChange={(e) => setNovaManutencao({ ...novaManutencao, proximaRevisao: e.target.value })}
                      placeholder="0"
                    />
                  </div>
                  <div className="col-span-2">
                    <Label className="text-xs">Descrição</Label>
                    <Textarea
                      value={novaManutencao.descricao}
                      onChange={(e) => setNovaManutencao({ ...novaManutencao, descricao: e.target.value })}
                      placeholder="Descrição do serviço realizado..."
                      className="h-20"
                    />
                  </div>
                </div>
                <Button
                  onClick={handleAdicionarManutencao}
                  className="mt-3 w-full"
                  style={{ backgroundColor: CORES_SAUDE_MUNICIPAL.movel }}
                  disabled={!novaManutencao.descricao || !novaManutencao.custo}
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Registrar Manutenção
                </Button>
              </div>

              {/* Histórico de Manutenções */}
              <ScrollArea className="h-[200px] border rounded-lg">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Data</TableHead>
                      <TableHead>Tipo</TableHead>
                      <TableHead>Descrição</TableHead>
                      <TableHead>Custo</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {veiculo.manutencoes.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={5} className="text-center text-slate-400 py-8">
                          Nenhuma manutenção registrada
                        </TableCell>
                      </TableRow>
                    ) : (
                      veiculo.manutencoes.map((manut) => (
                        <TableRow key={manut.id}>
                          <TableCell className="text-xs">{manut.data}</TableCell>
                          <TableCell>
                            <Badge variant="outline" className="text-xs">
                              {manut.tipo}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-xs max-w-[200px] truncate">{manut.descricao}</TableCell>
                          <TableCell className="font-medium">
                            R$ {manut.custo.toLocaleString()}
                          </TableCell>
                          <TableCell>
                            <Badge className={`text-xs ${manutencaoStatusColors[manut.status]}`}>
                              {manut.status}
                            </Badge>
                          </TableCell>
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
