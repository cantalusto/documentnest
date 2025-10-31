import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import './Navbar.css'

export default function Navbar() {
  const { user, signOut } = useAuth()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/meetings" className="navbar-brand" onClick={closeMenu}>
          <img src="/icons8-document.svg" alt="DocumentNest" width="24" height="24" style={{ marginRight: '8px', verticalAlign: 'middle' }} />
          DocumentNest
        </Link>
        
        <button className="navbar-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>

        <div className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/meetings" className="navbar-link" onClick={closeMenu}>
            📋 Reuniões
          </Link>
          <Link to="/meetings/new" className="navbar-link" onClick={closeMenu}>
            ➕ Nova Reunião
          </Link>
          {user && (
            <div className="navbar-user">
              <span className="navbar-email">{user.email}</span>
              <button onClick={() => { signOut(); closeMenu(); }} className="navbar-button">
                🚪 Sair
              </button>
            </div>
          )}
        </div>
      </div>
      {isMenuOpen && <div className="navbar-overlay" onClick={closeMenu}></div>}
    </nav>
  )
}
