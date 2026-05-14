export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      bairros: {
        Row: {
          id: string;
          nome: string;
          descricao: string | null;
          imagem_url: string | null;
          cidade: string | null;
          estado: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          nome: string;
          descricao?: string | null;
          imagem_url?: string | null;
          cidade?: string | null;
          estado?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          nome?: string;
          descricao?: string | null;
          imagem_url?: string | null;
          cidade?: string | null;
          estado?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      registros: {
        Row: {
          id: string;
          bairro_id: string;
          categoria: string;
          secao: string;
          dados: Json;
          status: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          bairro_id: string;
          categoria: string;
          secao: string;
          dados?: Json;
          status?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          bairro_id?: string;
          categoria?: string;
          secao?: string;
          dados?: Json;
          status?: string;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "registros_bairro_id_fkey";
            columns: ["bairro_id"];
            isOneToOne: false;
            referencedRelation: "bairros";
            referencedColumns: ["id"];
          }
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
