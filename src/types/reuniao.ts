export interface Reuniao {
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
