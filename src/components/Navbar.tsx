import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import './Navbar.css'

export default function Navbar() {
  const { user, signOut } = useAuth()

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/meetings" className="navbar-brand">
          <img src="/icons8-document.svg" alt="DocumentNest" width="24" height="24" style={{ marginRight: '8px', verticalAlign: 'middle' }} />
          DocumentNest
        </Link>
        
        <div className="navbar-menu">
          <Link to="/meetings" className="navbar-link">
            Reuniões
          </Link>
          <Link to="/meetings/new" className="navbar-link">
            Nova Reunião
          </Link>
          {user && (
            <div className="navbar-user">
              <span className="navbar-email">{user.email}</span>
              <button onClick={signOut} className="navbar-button">
                Sair
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
