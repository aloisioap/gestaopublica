"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowRight, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const FIELD_CONFIG: Record<string, { fieldLabel: string; detailLabel: string; placeholder: string; extraLabel: string; extraPlaceholder: string }> = {
  assistencial: {
    fieldLabel: "Tipo de atendimento",
    detailLabel: "Paciente / Ação",
    placeholder: "Ex: Consulta, Curativo, Visita domiciliar",
    extraLabel: "Observação",
    extraPlaceholder: "Descreva o detalhe do atendimento",
  },
  farmacia: {
    fieldLabel: "Medicamento / Produto",
    detailLabel: "Quantidade / Destinatário",
    placeholder: "Ex: Dipirona, Insulina, Curativo",
    extraLabel: "Observação",
    extraPlaceholder: "Descreva a dispensação ou controle",
  },
  infraestrutura: {
    fieldLabel: "Tipo de intervenção",
    detailLabel: "Descrição da demanda",
    placeholder: "Ex: Manutenção, Reforma, Equipamento",
    extraLabel: "Prioridade",
    extraPlaceholder: "Alta, Média ou Baixa",
  },
};

interface FuncaoDashboardProps {
  itemId: string;
  itemName: string;
  funcao: string;
  funcaoLabel: string;
}

interface RegistroFuncao {
  id: string;
  data: string;
  assunto: string;
  detalhe: string;
  extra: string;
  status: "Pendente" | "Concluído";
}

function createNewRegistro(base: Omit<RegistroFuncao, "id">): RegistroFuncao {
  return {
    id: `${base.data}-${Date.now()}`,
    ...base,
  };
}

export function FunctionDashboard({ itemId, itemName, funcao, funcaoLabel }: FuncaoDashboardProps) {
  const [registros, setRegistros] = useState<RegistroFuncao[]>([]);
  const [assunto, setAssunto] = useState("");
  const [detalhe, setDetalhe] = useState("");
  const [extra, setExtra] = useState("");
  const [status, setStatus] = useState<RegistroFuncao["status"]>("Pendente");

  const storageKey = `saude-${itemId}-${funcao}-registros`;
  const config = FIELD_CONFIG[funcao] ?? FIELD_CONFIG.assistencial;

  useEffect(() => {
    const saved = window.localStorage.getItem(storageKey);
    if (saved) {
      try {
        setRegistros(JSON.parse(saved));
      } catch {
        setRegistros([]);
      }
    }
  }, [storageKey]);

  useEffect(() => {
    window.localStorage.setItem(storageKey, JSON.stringify(registros));
  }, [registros, storageKey]);

  const summary = useMemo(() => {
    const total = registros.length;
    const concluido = registros.filter((item) => item.status === "Concluído").length;
    const pendente = registros.filter((item) => item.status === "Pendente").length;
    return { total, concluido, pendente };
  }, [registros]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!assunto || !detalhe) return;

    const novo = createNewRegistro({
      data: new Date().toISOString().split("T")[0],
      assunto,
      detalhe,
      extra,
      status,
    });

    setRegistros((prev) => [novo, ...prev]);
    setAssunto("");
    setDetalhe("");
    setExtra("");
    setStatus("Pendente");
  };

  const toggleStatus = (id: string) => {
    setRegistros((prev) =>
      prev.map((registro) =>
        registro.id === id
          ? { ...registro, status: registro.status === "Pendente" ? "Concluído" : "Pendente" }
          : registro
      )
    );
  };

  const chartData = useMemo(() => {
    const counts: Record<string, number> = {};
    registros.forEach((registro) => {
      counts[registro.status] = (counts[registro.status] ?? 0) + 1;
    });
    const total = registros.length || 1;
    return [
      { label: "Concluído", value: counts["Concluído"] ?? 0, color: "bg-emerald-500" },
      { label: "Pendente", value: counts["Pendente"] ?? 0, color: "bg-orange-500" },
    ].map((item) => ({
      ...item,
      percent: Math.round((item.value / total) * 100),
    }));
  }, [registros]);

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-3xl bg-white border border-slate-200 p-5 shadow-sm">
          <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Item</p>
          <p className="mt-2 text-2xl font-semibold text-slate-900">{itemName}</p>
          <p className="mt-2 text-sm text-slate-600">{funcaoLabel}</p>
        </div>
        <div className="rounded-3xl bg-white border border-slate-200 p-5 shadow-sm">
          <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Total de registros</p>
          <p className="mt-2 text-3xl font-semibold text-slate-900">{summary.total}</p>
          <p className="mt-2 text-sm text-slate-600">Acompanhe as entradas do fluxo.</p>
        </div>
        <div className="grid gap-3">
          <div className="rounded-3xl bg-white border border-slate-200 p-5 shadow-sm">
            <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Concluídos</p>
            <p className="mt-2 text-2xl font-semibold text-emerald-700">{summary.concluido}</p>
          </div>
          <div className="rounded-3xl bg-white border border-slate-200 p-5 shadow-sm">
            <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Pendentes</p>
            <p className="mt-2 text-2xl font-semibold text-orange-600">{summary.pendente}</p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl bg-white border border-slate-200 p-6 shadow-sm">
          <div className="mb-5">
            <p className="text-sm font-semibold text-slate-900">Novo registro</p>
            <p className="text-sm text-slate-500">Preencha os dados para cadastrar a função do item.</p>
          </div>

          <label className="block text-sm font-medium text-slate-700">{config.fieldLabel}</label>
          <input
            value={assunto}
            onChange={(event) => setAssunto(event.target.value)}
            placeholder={config.placeholder}
            className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-slate-400 focus:outline-none"
          />

          <label className="mt-4 block text-sm font-medium text-slate-700">{config.detailLabel}</label>
          <textarea
            value={detalhe}
            onChange={(event) => setDetalhe(event.target.value)}
            placeholder="Descreva o registro com informações relevantes"
            rows={4}
            className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-slate-400 focus:outline-none"
          />

          <label className="mt-4 block text-sm font-medium text-slate-700">{config.extraLabel}</label>
          <input
            value={extra}
            onChange={(event) => setExtra(event.target.value)}
            placeholder={config.extraPlaceholder}
            className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-slate-400 focus:outline-none"
          />

          <label className="mt-4 block text-sm font-medium text-slate-700">Status</label>
          <select
            value={status}
            onChange={(event) => setStatus(event.target.value as RegistroFuncao["status"])}
            className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-slate-400 focus:outline-none"
          >
            <option value="Pendente">Pendente</option>
            <option value="Concluído">Concluído</option>
          </select>

          <div className="mt-6">
            <Button type="submit" className="w-full inline-flex items-center justify-center gap-2">
              <Plus className="h-4 w-4" />
              Registrar
            </Button>
          </div>
        </div>

        <div className="rounded-3xl bg-white border border-slate-200 p-6 shadow-sm">
          <p className="text-sm font-semibold text-slate-900">Últimos registros</p>
          <div className="mt-5 space-y-4">
            {registros.length === 0 ? (
              <div className="rounded-3xl border border-dashed border-slate-200 bg-slate-50 p-5 text-slate-500">
                Nenhum registro encontrado. Cadastre um novo registro para começar.
              </div>
            ) : (
              registros.slice(0, 5).map((registro) => (
                <div key={registro.id} className="rounded-3xl bg-slate-50 p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold text-slate-900">{registro.assunto}</p>
                      <p className="mt-1 text-xs text-slate-500">{registro.data}</p>
                    </div>
                    <Badge className={registro.status === "Concluído" ? "bg-emerald-100 text-emerald-700" : "bg-orange-100 text-orange-700"}>
                      {registro.status}
                    </Badge>
                  </div>
                  <p className="mt-3 text-sm text-slate-700">{registro.detalhe}</p>
                  {registro.extra && <p className="mt-2 text-xs text-slate-500">{registro.extra}</p>}
                  <button
                    type="button"
                    onClick={() => toggleStatus(registro.id)}
                    className="mt-4 inline-flex items-center gap-2 text-slate-700 hover:text-slate-900"
                  >
                    <ArrowRight className="h-4 w-4 rotate-180" />
                    Marcar como {registro.status === "Pendente" ? "Concluído" : "Pendente"}
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </form>

      <section className="rounded-3xl bg-white border border-slate-200 p-6 shadow-sm">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold text-slate-900">Dashboard gráfico</p>
            <p className="text-sm text-slate-500">Visão rápida de status dos registros por função.</p>
          </div>
          <div className="inline-flex items-center rounded-2xl bg-slate-50 px-4 py-2 text-sm text-slate-700">
            {chartData[0].value} concluídos · {chartData[1].value} pendentes
          </div>
        </div>

        <div className="mt-6 space-y-4">
          {chartData.map((item) => (
            <div key={item.label} className="space-y-2">
              <div className="flex items-center justify-between text-sm text-slate-600">
                <span>{item.label}</span>
                <span>{item.value} ({item.percent}%)</span>
              </div>
              <div className="h-3 w-full rounded-full bg-slate-200 overflow-hidden">
                <div className={`${item.color} h-full rounded-full`} style={{ width: `${item.percent}%` }} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
