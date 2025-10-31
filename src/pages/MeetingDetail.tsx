import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import { Reuniao } from '../types/reuniao'
import './MeetingDetail.css'

export default function MeetingDetail() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [meeting, setMeeting] = useState<Reuniao | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    loadMeeting()
  }, [id])

  async function loadMeeting() {
    if (!id) return

    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('reunioes')
        .select('*')
        .eq('id', id)
        .single()

      if (error) throw error
      setMeeting(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao carregar reunião')
    } finally {
      setLoading(false)
    }
  }

  async function handleDelete() {
    if (!id || !confirm('Tem certeza que deseja excluir esta reunião?')) return

    try {
      setDeleting(true)
      const { error } = await supabase
        .from('reunioes')
        .delete()
        .eq('id', id)

      if (error) throw error
      navigate('/meetings')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao excluir reunião')
      setDeleting(false)
    }
  }

  if (loading) {
    return <div className="loading">Carregando...</div>
  }

  if (error) {
    return (
      <div className="error-container">
        <div className="error-message">{error}</div>
        <Link to="/meetings" className="btn-back">Voltar para reuniões</Link>
      </div>
    )
  }

  if (!meeting) {
    return (
      <div className="error-container">
        <p>Reunião não encontrada</p>
        <Link to="/meetings" className="btn-back">Voltar para reuniões</Link>
      </div>
    )
  }

  return (
    <div className="meeting-detail">
      <div className="detail-header">
        <Link to="/meetings" className="btn-back">← Voltar</Link>
        <div className="detail-actions">
          <Link to={`/meetings/${id}/edit`} className="btn-edit">
            ✏️ Editar
          </Link>
          <button
            onClick={handleDelete}
            disabled={deleting}
            className="btn-delete"
          >
            {deleting ? 'Excluindo...' : '🗑️ Excluir'}
          </button>
        </div>
      </div>

      <div className="detail-content">
        <h1>{meeting.titulo}</h1>
        
        <div className="detail-info">
          <div className="info-item">
            <strong>📅 Data:</strong>
            <span>{new Date(meeting.data).toLocaleDateString('pt-BR')}</span>
          </div>
          
          {meeting.hora && (
            <div className="info-item">
              <strong>🕐 Horário:</strong>
              <span>{meeting.hora}</span>
            </div>
          )}
          
          <div className="info-item">
            <strong>📝 Criado em:</strong>
            <span>{new Date(meeting.criado_em).toLocaleDateString('pt-BR')}</span>
          </div>
        </div>

        {meeting.descricao && (
          <div className="detail-section">
            <h2>Descrição</h2>
            <p>{meeting.descricao}</p>
          </div>
        )}

        <div className="detail-section">
          <h2>👥 Participantes</h2>
          {meeting.participantes.length > 0 ? (
            <ul className="participants-list">
              {meeting.participantes.map((participante, index) => (
                <li key={index}>{participante}</li>
              ))}
            </ul>
          ) : (
            <p>Nenhum participante cadastrado</p>
          )}
        </div>

        {meeting.decisoes && (
          <div className="detail-section">
            <h2>✅ Decisões</h2>
            <p className="whitespace-pre-wrap">{meeting.decisoes}</p>
          </div>
        )}

        {meeting.tarefas && (
          <div className="detail-section">
            <h2>📋 Tarefas</h2>
            <p className="whitespace-pre-wrap">{meeting.tarefas}</p>
          </div>
        )}
      </div>
    </div>
  )
}
