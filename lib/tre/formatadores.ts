const BRL = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });
const BRL_COMPACTO = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", notation: "compact", minimumFractionDigits: 0, maximumFractionDigits: 2 });
const NUMERO = new Intl.NumberFormat("pt-BR");
const PERCENTUAL = new Intl.NumberFormat("pt-BR", { style: "percent", minimumFractionDigits: 1, maximumFractionDigits: 1 });
const MESES = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];

/** Data de referência da demonstração (os mocks são de 2024). */
export const DATA_REFERENCIA_TRE = "2024-02-01";

export const formatBRL = (valor: number) => BRL.format(valor);                 // R$ 1.234,50
export const formatBRLCompacto = (valor: number) => BRL_COMPACTO.format(valor); // R$ 2,85 mi
export const formatNumero = (valor: number) => NUMERO.format(valor);           // 1.250
export const formatPct = (pontos: number) => PERCENTUAL.format(pontos / 100);  // 3.2 -> 3,2%

/** "2024-01-15" -> "15/01/2024" sem Date (evita o -1 dia em America/Belem) */
export function formatData(iso: string | null | undefined): string {
  if (!iso) return "—";
  const [ano, mes, dia] = iso.slice(0, 10).split("-");
  return ano && mes && dia ? `${dia}/${mes}/${ano}` : iso;
}

export const formatCompetencia = (mes: number, ano: number) => `${MESES[mes - 1] ?? mes}/${ano}`; // jan/2024

/** Dias de `de` até `ate` (ISO). Negativo = já passou. */
export function diasEntre(ate: string, de: string = DATA_REFERENCIA_TRE): number {
  const utc = (iso: string) => {
    const [a, m, d] = iso.slice(0, 10).split("-").map(Number);
    return Date.UTC(a, m - 1, d);
  };
  return Math.round((utc(ate) - utc(de)) / 86_400_000);
}

export function iniciais(nome: string): string {
  const partes = nome.trim().split(/\s+/).filter(Boolean);
  const primeira = partes[0]?.[0] ?? "";
  const ultima = partes.length > 1 ? partes[partes.length - 1][0] : "";
  return (primeira + ultima).toUpperCase();
}

export const mascararCPF = (cpf: string) => cpf.replace(/^(\d{3})\.\d{3}\.\d{3}-(\d{2})$/, "$1.***.***-$2");
