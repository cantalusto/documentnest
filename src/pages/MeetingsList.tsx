import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import { useAuth } from '../contexts/AuthContext'
import { Reuniao } from '../types/reuniao'
import './MeetingsList.css'

export default function MeetingsList() {
  const [meetings, setMeetings] = useState<Reuniao[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [filterDate, setFilterDate] = useState('')
  const { user } = useAuth()

  useEffect(() => {
    loadMeetings()
  }, [user])

  async function loadMeetings() {
    if (!user) return

    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('reunioes')
        .select('*')
        .eq('usuario_id', user.id)
        .order('data', { ascending: false })

      if (error) throw error
      setMeetings(data || [])
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao carregar reuniões')
    } finally {
      setLoading(false)
    }
  }

  const filteredMeetings = meetings.filter((meeting) => {
    const matchesSearch = meeting.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      meeting.participantes.some(p => p.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesDate = !filterDate || meeting.data === filterDate
    return matchesSearch && matchesDate
  })

  if (loading) {
    return <div className="loading">Carregando reuniões...</div>
  }

  return (
    <div className="meetings-container">
      <div className="meetings-header">
        <h1>Reuniões</h1>
        <Link to="/meetings/new" className="btn-new-meeting">
          + Nova Reunião
        </Link>
      </div>

      <div className="meetings-filters">
        <input
          type="text"
          placeholder="Buscar por título ou participante..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <input
          type="date"
          value={filterDate}
          onChange={(e) => setFilterDate(e.target.value)}
          className="date-filter"
        />
        {filterDate && (
          <button onClick={() => setFilterDate('')} className="btn-clear-filter">
            Limpar filtro
          </button>
        )}
      </div>

      {error && <div className="error-message">{error}</div>}

      {filteredMeetings.length === 0 ? (
        <div className="empty-state">
          <p>Nenhuma reunião encontrada.</p>
          <Link to="/meetings/new">Criar primeira reunião</Link>
        </div>
      ) : (
        <div className="meetings-grid">
          {filteredMeetings.map((meeting) => (
            <Link
              key={meeting.id}
              to={`/meetings/${meeting.id}`}
              className="meeting-card"
            >
              <h3>{meeting.titulo}</h3>
              <p className="meeting-date">
                📅 {new Date(meeting.data).toLocaleDateString('pt-BR')}
                {meeting.hora && ` às ${meeting.hora}`}
              </p>
              {meeting.descricao && (
                <p className="meeting-description">{meeting.descricao}</p>
              )}
              <div className="meeting-participants">
                👥 {meeting.participantes.length} participante(s)
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
