// ============================================================
// SISTEMA DE AUTENTICAÇÃO E CONTROLE DE ACESSOS (RBAC)
// FUNSAU PM - Polícia Militar
// ============================================================

import React, { JSX } from "react";

// PERFIS DE ACESSO BASEADO EM PATENTE HIERÁRQUICA
export type PerfilAcesso = 
  | 'administrador'      // Coronel / Tenente-Coronel - Acesso total
  | 'auditor'           // Major / Capitão - Auditoria e relatórios
  | 'medico'            // Tenente / Aspirante - Atendimento e triagem
  | 'enfermeiro'        // 1º Sargento / 2º Sargento - Suporte e execução
  | 'atendente'         // 3º Sargento / Cabo - Cadastro e documentação
  | 'visualizador';     // Soldado - Apenas visualização própria

// PERMISSÕES GRANULARES
export interface Permissao {
  recurso: string;
  acao: 'criar' | 'ler' | 'atualizar' | 'excluir' | 'aprovar' | 'rejeitar';
  descricao: string;
}

// POLÍTICAS DE SEGURANÇA POR PERFIL
export const POLITICAS_ACESSO: Record<PerfilAcesso, Permissao[]> = {
  administrador: [
    { recurso: 'paciente', acao: 'criar', descricao: 'Cadastrar policial' },
    { recurso: 'paciente', acao: 'ler', descricao: 'Visualizar qualquer policial' },
    { recurso: 'paciente', acao: 'atualizar', descricao: 'Editar qualquer policial' },
    { recurso: 'paciente', acao: 'excluir', descricao: 'Remover policial' },
    { recurso: 'protocolo', acao: 'criar', descricao: 'Criar protocolo' },
    { recurso: 'protocolo', acao: 'ler', descricao: 'Ver todos os protocolos' },
    { recurso: 'protocolo', acao: 'atualizar', descricao: 'Editar protocolos' },
    { recurso: 'protocolo', acao: 'excluir', descricao: 'Cancelar protocolos' },
    { recurso: 'auditoria', acao: 'ler', descricao: 'Ver auditorias' },
    { recurso: 'auditoria', acao: 'aprovar', descricao: 'Aprovar auditorias' },
    { recurso: 'auditoria', acao: 'rejeitar', descricao: 'Rejeitar auditorias' },
    { recurso: 'financeiro', acao: 'ler', descricao: 'Ver financeiro' },
    { recurso: 'financeiro', acao: 'aprovar', descricao: 'Aprovar pagamentos' },
    { recurso: 'configuracao', acao: 'ler', descricao: 'Ver configurações' },
    { recurso: 'configuracao', acao: 'atualizar', descricao: 'Alterar configurações' },
  ],
  
  auditor: [
    { recurso: 'paciente', acao: 'ler', descricao: 'Visualizar policiais' },
    { recurso: 'protocolo', acao: 'ler', descricao: 'Ver protocolos' },
    { recurso: 'protocolo', acao: 'atualizar', descricao: 'Editar protocolos (limitado)' },
    { recurso: 'auditoria', acao: 'criar', descricao: 'Realizar auditoria' },
    { recurso: 'auditoria', acao: 'ler', descricao: 'Ver auditorias' },
    { recurso: 'auditoria', acao: 'aprovar', descricao: 'Aprovar auditorias' },
    { recurso: 'auditoria', acao: 'rejeitar', descricao: 'Rejeitar auditorias' },
    { recurso: 'financeiro', acao: 'ler', descricao: 'Ver financeiro' },
    { recurso: 'relatorio', acao: 'ler', descricao: 'Gerar relatórios' },
  ],
  
  medico: [
    { recurso: 'paciente', acao: 'criar', descricao: 'Cadastrar policial' },
    { recurso: 'paciente', acao: 'ler', descricao: 'Visualizar policiais' },
    { recurso: 'paciente', acao: 'atualizar', descricao: 'Editar dados clínicos' },
    { recurso: 'protocolo', acao: 'criar', descricao: 'Criar protocolo' },
    { recurso: 'protocolo', acao: 'ler', descricao: 'Ver protocolos' },
    { recurso: 'protocolo', acao: 'atualizar', descricao: 'Editar protocolos' },
    { recurso: 'protocolo', acao: 'excluir', descricao: 'Cancelar protocolo' },
    { recurso: 'triagem', acao: 'criar', descricao: 'Realizar triagem' },
    { recurso: 'triagem', acao: 'ler', descricao: 'Ver triagens' },
    { recurso: 'triagem', acao: 'atualizar', descricao: 'Editar triagens' },
  ],
  
  enfermeiro: [
    { recurso: 'paciente', acao: 'ler', descricao: 'Visualizar policiais' },
    { recurso: 'paciente', acao: 'atualizar', descricao: 'Atualizar dados clínicos' },
    { recurso: 'protocolo', acao: 'ler', descricao: 'Ver protocolos' },
    { recurso: 'protocolo', acao: 'atualizar', descricao: 'Atualizar status' },
    { recurso: 'execucao', acao: 'criar', descricao: 'Registrar execução' },
    { recurso: 'execucao', acao: 'ler', descricao: 'Ver execuções' },
    { recurso: 'execucao', acao: 'atualizar', descricao: 'Editar execuções' },
  ],
  
  atendente: [
    { recurso: 'paciente', acao: 'criar', descricao: 'Cadastrar policial' },
    { recurso: 'paciente', acao: 'ler', descricao: 'Visualizar policiais' },
    { recurso: 'paciente', acao: 'atualizar', descricao: 'Atualizar cadastro' },
    { recurso: 'protocolo', acao: 'ler', descricao: 'Ver protocolos' },
    { recurso: 'documento', acao: 'criar', descricao: 'Upload documentos' },
    { recurso: 'documento', acao: 'ler', descricao: 'Ver documentos' },
  ],
  
  visualizador: [
    { recurso: 'paciente', acao: 'ler', descricao: 'Visualizar próprio cadastro' },
    { recurso: 'protocolo', acao: 'ler', descricao: 'Ver próprios protocolos' },
  ],
};

// MAPEAMENTO DE PATENTE PARA PERFIL PADRÃO
export const MAPEAMENTO_PATENTE_PERFIL: Record<PerfilAcesso, string[]> = {
  administrador: ['Coronel', 'Tenente-Coronel'],
  auditor: ['Major', 'Capitão'],
  medico: ['Tenente', 'Aspirante', 'Subtenente'],
  enfermeiro: ['1º Sargento', '2º Sargento', 'Subtenente'],
  atendente: ['3º Sargento', 'Cabo'],
  visualizador: ['Soldado'],
};

// ============================================================
// SISTEMA DE AUTENTICAÇÃO
// ============================================================

export interface UsuarioSistema {
  id: string;
  matricula: string;
  nome: string;
  email: string;
  patente: string;
  perfil: PerfilAcesso;
  unidade: string;
  foto_url?: string;
  ultimo_acesso: string;
  ativo: boolean;
  permissoes_especificas?: Permissao[]; // Override de permissões
}

// USUÁRIOS MOCK (em produção viria do banco)
export const USUARIOS_SISTEMA: UsuarioSistema[] = [
  {
    id: 'usr-001',
    matricula: 'PM-001234',
    nome: 'Coronel Roberto Dias',
    email: 'roberto.dias@pm.sp.gov.br',
    patente: 'Coronel',
    perfil: 'administrador',
    unidade: 'Comando de Operações Especiais',
    foto_url: '/fotos/cel-roberto.jpg',
    ultimo_acesso: new Date().toISOString(),
    ativo: true
  },
  {
    id: 'usr-002',
    matricula: 'PM-005678',
    nome: 'Maj. Carla Souza',
    email: 'carla.souza@pm.sp.gov.br',
    patente: 'Major',
    perfil: 'auditor',
    unidade: 'Auditoria Médica - FUNSAU',
    foto_url: '/fotos/maj-carla.jpg',
    ultimo_acesso: new Date().toISOString(),
    ativo: true
  },
  {
    id: 'usr-003',
    matricula: 'PM-009012',
    nome: 'Dr. Ricardo Mendes',
    email: 'ricardo.mendes@pm.sp.gov.br',
    patente: 'Tenente',
    perfil: 'medico',
    unidade: 'Hospital da Polícia Militar',
    foto_url: '/fotos/ten-ricardo.jpg',
    ultimo_acesso: new Date().toISOString(),
    ativo: true
  },
  {
    id: 'usr-004',
    matricula: 'PM-013456',
    nome: 'Sgt. Ana Oliveira',
    email: 'ana.oliveira@pm.sp.gov.br',
    patente: '1º Sargento',
    perfil: 'enfermeiro',
    unidade: 'Hospital da Polícia Militar',
    foto_url: '/fotos/sgt-ana.jpg',
    ultimo_acesso: new Date().toISOString(),
    ativo: true
  },
  {
    id: 'usr-005',
    matricula: 'PM-017890',
    nome: 'Cb. Pedro Silva',
    email: 'pedro.silva@pm.sp.gov.br',
    patente: 'Cabo',
    perfil: 'atendente',
    unidade: '1º Batalhão',
    foto_url: '/fotos/cb-pedro.jpg',
    ultimo_acesso: new Date().toISOString(),
    ativo: true
  },
];

// ============================================================
// SERVIÇO DE AUTENTICAÇÃO
// ============================================================

class ServicoAutenticacao {
  private usuarioAtual: UsuarioSistema | null = null;
  private sessaoIniciada: string | null = null;
  
  // LOGIN NO SISTEMA
  async login(matricula: string, senha: string): Promise<{
    sucesso: boolean;
    usuario?: UsuarioSistema;
    erro?: string;
    requer_2fa?: boolean;
  }> {
    // Simula verificação (em produção: hash + salt do banco)
    const usuario = USUARIOS_SISTEMA.find(u => u.matricula === matricula);
    
    if (!usuario) {
      return { sucesso: false, erro: 'Matrícula não encontrada' };
    }
    
    if (!usuario.ativo) {
      return { sucesso: false, erro: 'Usuário desativado. Contate o administrador.' };
    }
    
    // Verifica senha (simulado)
    const senhaValida = this.verificarSenha(senha, matricula);
    if (!senhaValida) {
      return { sucesso: false, erro: 'Senha incorreta' };
    }
    
    // Registra tentativa de login
    this.registrarLogin(usuario);
    
    // Para patentes superiores, requer 2FA
    const requer2FA = ['Coronel', 'Tenente-Coronel', 'Major'].includes(usuario.patente);
    
    // Se não requer 2FA, já autencia
    if (!requer2FA) {
      this.usuarioAtual = usuario;
      this.sessaoIniciada = new Date().toISOString();
    }
    
    return {
      sucesso: true,
      usuario,
      requer_2fa: requer2FA
    };
  }
  
  // VERIFICAÇÃO 2FA (via email ou SMS)
  async verificar2FA(codigo: string): Promise<{ sucesso: boolean; erro?: string }> {
    // Código fixo para demonstração (em produção: TOTP)
    const codigosValidos = ['123456', '654321', '987654'];
    
    if (codigosValidos.includes(codigo)) {
      // Completa autenticação
      this.sessaoIniciada = new Date().toISOString();
      return { sucesso: true };
    }
    
    return { sucesso: false, erro: 'Código 2FA inválido' };
  }
  
  // VERIFICA PERMISSÃO
  temPermissao(recurso: string, acao: Permissao['acao']): boolean {
    if (!this.usuarioAtual) return false;
    
    const politicas = this.usuarioAtual.permissoes_especificas || 
                      POLITICAS_ACESSO[this.usuarioAtual.perfil];
    
    return politicas.some(p => p.recurso === recurso && p.acao === acao);
  }
  
  // VERIFICA PERFIL
  temPerfil(perfil: PerfilAcesso): boolean {
    return this.usuarioAtual?.perfil === perfil;
  }
  
  // VERIFICA PERFIL MÍNIMO (hierarquia)
  temPerfilMinimo(perfilMinimo: PerfilAcesso): boolean {
    const hierarquia: PerfilAcesso[] = [
      'visualizador',
      'atendente',
      'enfermeiro',
      'medico',
      'auditor',
      'administrador'
    ];
    
    const indexAtual = this.usuarioAtual ? hierarquia.indexOf(this.usuarioAtual.perfil) : -1;
    const indexMinimo = hierarquia.indexOf(perfilMinimo);
    
    return indexAtual >= indexMinimo;
  }
  
  // LOGOUT
  logout(): void {
    if (this.usuarioAtual) {
      this.registrarLogout(this.usuarioAtual);
    }
    this.usuarioAtual = null;
    this.sessaoIniciada = null;
  }
  
  // USUÁRIO ATUAL
  getUsuarioAtual(): UsuarioSistema | null {
    return this.usuarioAtual;
  }
  
  // SESSÃO ATIVA
  sessaoAtiva(): boolean {
    if (!this.sessaoIniciada || !this.usuarioAtual) return false;
    
    const inicio = new Date(this.sessaoIniciada);
    const agora = new Date();
    const duracaoMs = agora.getTime() - inicio.getTime();
    
    // Sessão expira em 8 horas
    const sessaoExpirada = duracaoMs > (8 * 60 * 60 * 1000);
    
    return !sessaoExpirada;
  }
  
  // MÉTODOS PRIVADOS (simulados)
  private verificarSenha(senha: string, matricula: string): boolean {
    // Em produção: bcrypt.compare(senha, hashDoBanco)
    const senhasValidas: Record<string, string> = {
      'PM-001234': 'senha123',
      'PM-005678': 'senha456',
      'PM-009012': 'senha789',
      'PM-013456': 'senha321',
      'PM-017890': 'senha654'
    };
    return senhasValidas[matricula] === senha;
  }
  
  private registrarLogin(usuario: UsuarioSistema): void {
    // Simula log de auditoria
    console.log(`[AUDIT] Login: ${usuario.matricula} - ${usuario.nome} em ${new Date().toISOString()}`);
  }
  
  private registrarLogout(usuario: UsuarioSistema): void {
    // Simula log de auditoria
    console.log(`[AUDIT] Logout: ${usuario.matricula} - ${usuario.nome} em ${new Date().toISOString()}`);
  }
}

// INSTÂNCIA GLOBAL
export const AutenticacaoService = new ServicoAutenticacao();

// MIDDLEWARE DE AUTENTICAÇÃO PARA PÁGINAS
export function withAuth(perfilRequerido: PerfilAcesso) {
  return function<P extends object>(Component: React.ComponentType<P>) {
    return function WithAuthComponent(props: P): JSX.Element {
      if (typeof window !== 'undefined') {
        const usuario = AutenticacaoService.getUsuarioAtual();
        
        if (!usuario) {
          window.location.href = '/login';
          return React.createElement(React.Fragment, {});
        }
        
        if (!AutenticacaoService.temPerfilMinimo(perfilRequerido)) {
          window.location.href = '/acesso-negado';
          return React.createElement(React.Fragment, {});
        }
      }
      
      return React.createElement(Component, props);
    };
  };
}

export default AutenticacaoService;
