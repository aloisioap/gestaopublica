import { createClient } from '@supabase/supabase-js';
import { Database } from '@/types/database';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Criar cliente apenas se as credenciais estiverem disponíveis
export const supabase = supabaseUrl && supabaseKey 
  ? createClient<Database>(supabaseUrl, supabaseKey)
  : createClient<Database>('http://localhost', 'dummy-key'); // Cliente dummy para evitar erros

// Helper para upload de imagens
export async function uploadImagem(file: File, pasta: string = 'bairros'): Promise<string | null> {
  try {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}_${Math.random().toString(36).substring(7)}.${fileExt}`;
    const filePath = `${pasta}/${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from('imagens')
      .upload(filePath, file);

    if (uploadError) throw uploadError;

    const { data: { publicUrl } } = supabase.storage
      .from('imagens')
      .getPublicUrl(filePath);

    return publicUrl;
  } catch (error) {
    console.error('Erro no upload:', error);
    return null;
  }
}

// Helper para deletar imagem
export async function deleteImagem(url: string): Promise<void> {
  try {
    const path = url.split('/').slice(-2).join('/');
    await supabase.storage.from('imagens').remove([path]);
  } catch (error) {
    console.error('Erro ao deletar imagem:', error);
  }
}
