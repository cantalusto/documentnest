import { useState, useEffect, FormEvent } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import { useAuth } from '../contexts/AuthContext'
import './MeetingForm.css'

export default function MeetingForm() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { user } = useAuth()
  const isEditing = Boolean(id)

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  
  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [data, setData] = useState('')
  const [hora, setHora] = useState('')
  const [participantesInput, setParticipantesInput] = useState('')
  const [decisoes, setDecisoes] = useState('')
  const [tarefas, setTarefas] = useState('')

  useEffect(() => {
    if (isEditing) {
      loadMeeting()
    }
  }, [id])

  async function loadMeeting() {
    if (!id) return

    try {
      setLoading(true)
      const { data: meeting, error } = await supabase
        .from('reunioes')
        .select('*')
        .eq('id', id)
        .single()

      if (error) throw error

      if (meeting) {
        setTitulo(meeting.titulo)
        setDescricao(meeting.descricao || '')
        setData(meeting.data)
        setHora(meeting.hora || '')
        setParticipantesInput(meeting.participantes.join(', '))
        setDecisoes(meeting.decisoes || '')
        setTarefas(meeting.tarefas || '')
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao carregar reunião')
    } finally {
      setLoading(false)
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    
    if (!user) {
      setError('Usuário não autenticado')
      return
    }

    setError('')
    setLoading(true)

    const participantes = participantesInput
      .split(',')
      .map(p => p.trim())
      .filter(p => p.length > 0)

    const meetingData = {
      titulo,
      descricao: descricao || null,
      data,
      hora: hora || null,
      participantes,
      decisoes: decisoes || null,
      tarefas: tarefas || null,
      usuario_id: user.id,
    }

    try {
      if (isEditing && id) {
        const { error } = await supabase
          .from('reunioes')
          .update(meetingData)
          .eq('id', id)

        if (error) throw error
        navigate(`/meetings/${id}`)
      } else {
        const { data: newMeeting, error } = await supabase
          .from('reunioes')
          .insert([meetingData])
          .select()
          .single()

        if (error) throw error
        navigate(`/meetings/${newMeeting.id}`)
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao salvar reunião')
      setLoading(false)
    }
  }

  return (
    <div className="meeting-form-container">
      <div className="form-header">
        <h1>{isEditing ? 'Editar Reunião' : 'Nova Reunião'}</h1>
        <Link to={isEditing ? `/meetings/${id}` : '/meetings'} className="btn-cancel">
          Cancelar
        </Link>
      </div>

      {error && <div className="error-message">{error}</div>}

      <form onSubmit={handleSubmit} className="meeting-form">
        <div className="form-group">
          <label htmlFor="titulo">Título *</label>
          <input
            id="titulo"
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
            placeholder="Ex: Reunião de planejamento Q4"
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="data">Data *</label>
            <input
              id="data"
              type="date"
              value={data}
              onChange={(e) => setData(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="hora">Horário</label>
            <input
              id="hora"
              type="time"
              value={hora}
              onChange={(e) => setHora(e.target.value)}
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="descricao">Descrição / Pauta</label>
          <textarea
            id="descricao"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            rows={4}
            placeholder="Breve descrição ou pauta da reunião"
          />
        </div>

        <div className="form-group">
          <label htmlFor="participantes">Participantes</label>
          <input
            id="participantes"
            type="text"
            value={participantesInput}
            onChange={(e) => setParticipantesInput(e.target.value)}
            placeholder="Separe os nomes por vírgula (Ex: João, Maria, Pedro)"
          />
          <small>Separe os participantes por vírgula</small>
        </div>

        <div className="form-group">
          <label htmlFor="decisoes">Decisões Tomadas</label>
          <textarea
            id="decisoes"
            value={decisoes}
            onChange={(e) => setDecisoes(e.target.value)}
            rows={4}
            placeholder="Liste as principais decisões tomadas na reunião"
          />
        </div>

        <div className="form-group">
          <label htmlFor="tarefas">Tarefas / Ações</label>
          <textarea
            id="tarefas"
            value={tarefas}
            onChange={(e) => setTarefas(e.target.value)}
            rows={4}
            placeholder="Liste as tarefas e responsáveis"
          />
        </div>

        <div className="form-actions">
          <Link to={isEditing ? `/meetings/${id}` : '/meetings'} className="btn-secondary">
            Cancelar
          </Link>
          <button type="submit" disabled={loading} className="btn-primary">
            {loading ? 'Salvando...' : isEditing ? 'Salvar Alterações' : 'Criar Reunião'}
          </button>
        </div>
      </form>
    </div>
  )
}
