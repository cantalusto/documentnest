export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      reunioes: {
        Row: {
          id: string
          titulo: string
          descricao: string | null
          data: string
          hora: string | null
          participantes: string[]
          decisoes: string | null
          tarefas: string | null
          criado_em: string
          usuario_id: string
        }
        Insert: {
          id?: string
          titulo: string
          descricao?: string | null
          data: string
          hora?: string | null
          participantes?: string[]
          decisoes?: string | null
          tarefas?: string | null
          criado_em?: string
          usuario_id: string
        }
        Update: {
          id?: string
          titulo?: string
          descricao?: string | null
          data?: string
          hora?: string | null
          participantes?: string[]
          decisoes?: string | null
          tarefas?: string | null
          criado_em?: string
          usuario_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
