// ============================================================
// SISTEMA DE VALIDAÇÃO POR QR CODE - FUNSAU PM
// Validação biométrica e contextual para policiais militares
// ============================================================

export interface DadosValidacaoQR {
  paciente_id: string;
  matricula_pm: string;
  patente: string;
  nome: string;
  tipo_sanguineo: string;
  alergias: string[];
  protocolo_atual?: string;
  foto_url?: string;
  qr_code_hash: string;
  data_validade_qr: string;
}

export interface DadosValidacaoRealizada {
  validado_em: string;
  localizacao?: {
    latitude: number;
    longitude: number;
    endereco_estimado?: string;
  };
  dispositivo?: {
    user_agent: string;
    ip: string;
    tipo: 'mobile' | 'desktop' | 'tablet';
  };
  foto_capturada?: string;
  biom_encontrada?: boolean;
  resultado: 'valido' | 'invalido' | 'suspeito' | 'expirado';
  motivo_rejeicao?: string;
}

// CACHE DE VALIDAÇÕES RECENTES (simulado)
const cacheValidacoes = new Map<string, {
  data: DadosValidacaoRealizada;
  contagem: number;
}>();

// BLACKLIST DE DISPOSITIVOS SUSPEITOS
const blacklistedDevices = new Set<string>([
  'suspect-device-001', // Simulação
  'emulator-xyz',
]);

// VALIDAÇÃO PRINCIPAL DO QR CODE
export async function validarQRPaciente(
  dadosQR: DadosValidacaoQR,
  dadosDispositivo: DadosValidacaoRealizada['dispositivo'],
  capturarFoto = false
): Promise<{
  sucesso: boolean;
  dados: DadosValidacaoRealizada;
  alertas: string[];
  proxima_acao: 'liberar' | 'verificar' | 'bloquear';
}> {
  const alertas: string[] = [];
  let resultado: DadosValidacaoRealizada['resultado'] = 'valido';
  let motivoRejeicao: string | undefined;
  
  // 1. VALIDAÇÃO BÁSICA DO HASH
  const hashValido = validarHashQR(dadosQR.qr_code_hash);
  if (!hashValido) {
    resultado = 'invalido';
    motivoRejeicao = 'Hash QR Code inválido ou adulterado';
    alertas.push('QR CODE INVÁLIDO: Tentativa de fraude detectada');
  }
  
  // 2. VALIDADE DO QR CODE (expira em 24h)
  const agora = new Date();
  const validade = new Date(dadosQR.data_validade_qr);
  if (agora > validade) {
    resultado = 'expirado';
    motivoRejeicao = 'QR Code expirado. Renovar carteirinha.';
    alertas.push('QR CODE EXPIRADO: Carteirinha vencida há ' + 
      Math.floor((agora.getTime() - validade.getTime()) / (1000 * 60 * 60 * 24)) + ' dias');
  }
  
  // 3. VERIFICAÇÃO DE DUPLICIDADE (anti-fraude)
  const chaveCache = `${dadosQR.matricula_pm}-${agora.toISOString().split('T')[0]}`;
  const validacaoRecente = cacheValidacoes.get(chaveCache);
  
  if (validacaoRecente && validacaoRecente.contagem >= 3) {
    resultado = 'suspeito';
    motivoRejeicao = 'Múltiplas validações no mesmo dia';
    alertas.push('FREQUÊNCIA SUSPEITA: 3+ validações detectadas hoje');
  }
  
  // 4. VERIFICAÇÃO DE LOCALIZAÇÃO (geofence)
  if (dadosDispositivo) {
    const localValido = await validarLocalizacao(dadosDispositivo.ip);
    if (!localValido) {
      alertas.push('LOCALIZAÇÃO: Fora da área de atuação da unidade');
    }
  }
  
  // 5. VERIFICAÇÃO DE DISPOSITIVO
  if (dadosDispositivo && blacklistedDevices.has(dadosDispositivo.user_agent)) {
    resultado = 'invalido';
    motivoRejeicao = 'Dispositivo bloqueado por suspeita de fraude';
    alertas.push('DISPOSITIVO BLOQUEADO: Entre em contato com o suporte');
  }
  
  // 6. SIMULAÇÃO DE VERIFICAÇÃO BIOMÉTRICA
  const biomEncontrada = Math.random() > 0.05; // 95% de sucesso na biometria
  
  // REGISTRA VALIDAÇÃO NO CACHE
  const dadosValidacao: DadosValidacaoRealizada = {
    validado_em: agora.toISOString(),
    localizacao: {
      latitude: -23.5505, // São Paulo (simulado)
      longitude: -46.6333,
      endereco_estimado: 'Hospital da Polícia Militar - São Paulo, SP'
    },
    dispositivo: dadosDispositivo,
    foto_capturada: capturarFoto ? `foto_${dadosQR.matricula_pm}_${Date.now()}.jpg` : undefined,
    biom_encontrada: biomEncontrada,
    resultado,
    motivo_rejeicao: motivoRejeicao
  };
  
  // Atualiza cache
  if (cacheValidacoes.has(chaveCache)) {
    cacheValidacoes.get(chaveCache)!.contagem++;
  } else {
    cacheValidacoes.set(chaveCache, { data: dadosValidacao, contagem: 1 });
  }
  
  // LIMPA CACHE ANTIGO (mantém apenas últimos 30 dias)
  limparCacheAntigo();
  
  // DETERMINA PRÓXIMA AÇÃO
  let proxima_acao: 'liberar' | 'verificar' | 'bloquear' = 'liberar';
  
  if (resultado === 'invalido' || resultado === 'expirado') {
    proxima_acao = 'bloquear';
  } else if (resultado === 'suspeito' || !biomEncontrada || alertas.length > 2) {
    proxima_acao = 'verificar';
  }
  
  return {
    sucesso: resultado === 'valido' || resultado === 'suspeito',
    dados: dadosValidacao,
    alertas,
    proxima_acao
  };
}

// VALIDAÇÃO DE HASH QR CODE (simulada)
export function validarHashQR(hash: string): boolean {
  // Simula: hash válido deve ter 32 caracteres e não estar na blacklist
  const hashInvalidos = new Set(['000000', '123456', 'abcdef']);
  return hash.length >= 20 && !hashInvalidos.has(hash.substring(0, 6));
}

// VALIDAÇÃO DE LOCALIZAÇÃO (geofence)
export async function validarLocalizacao(ip: string): Promise<boolean> {
  // Simula: valida se IP está na faixa da PM-SP
  const ipsValidos = [
    '192.168.', '10.0.', '172.16.', // IPs internos
    '200.99.', // Faixa PM-SP (exemplo)
  ];
  
  return ipsValidos.some(prefix => ip.startsWith(prefix));
}

// GERAÇÃO DE QR CODE HASH (para carteirinha)
export function gerarHashQRPaciente(matricula: string, dataEmissao: string): string {
  // Gera hash baseado em matrícula + data + salt
  const salt = 'PMSP-FUNSAU-2024';
  const input = `${matricula}-${dataEmissao}-${salt}`;
  
  // Simula hash SHA256 (em produção usar biblioteca crypto)
  return Buffer.from(input).toString('base64').substring(0, 32);
}

// EXPORT DE ESTATÍSTICAS DE FRAUDE
export function getEstatisticasFraude(matricula?: string): {
  total_validacoes: number;
  suspeitas: number;
  fraudes_confirmadas: number;
  taxa_sucesso: number;
} {
  const estatisticas = {
    total_validacoes: 0,
    suspeitas: 0,
    fraudes_confirmadas: 0,
    taxa_sucesso: 0
  };
  
  cacheValidacoes.forEach((valor, chave) => {
    if (!matricula || chave.startsWith(matricula)) {
      estatisticas.total_validacoes += valor.contagem;
      
      if (valor.data.resultado === 'suspeito') {
        estatisticas.suspeitas++;
      } else if (valor.data.resultado === 'invalido') {
        estatisticas.fraudes_confirmadas++;
      }
    }
  });
  
  estatisticas.taxa_sucesso = estatisticas.total_validacoes > 0 
    ? ((estatisticas.total_validacoes - estatisticas.fraudes_confirmadas) / estatisticas.total_validacoes) * 100
    : 100;
  
  return estatisticas;
}

// LIMPEZA DE CACHE
function limparCacheAntigo(): void {
  const trintaDiasAtras = new Date();
  trintaDiasAtras.setDate(trintaDiasAtras.getDate() - 30);
  
  cacheValidacoes.forEach((valor, chave) => {
    const dataValidacao = new Date(valor.data.validado_em);
    if (dataValidacao < trintaDiasAtras) {
      cacheValidacoes.delete(chave);
    }
  });
}

// EXPORT DA CLASSE
export const ValidacaoQREngine = {
  validarQRPaciente,
  gerarHashQRPaciente,
  validarHashQR,
  getEstatisticasFraude,
  TEMPO_EXPIRACAO_QR: 24 * 60 * 60 * 1000 // 24 horas em ms
};

export default ValidacaoQREngine;
