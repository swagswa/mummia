import { useState } from 'react'
import './Header.css'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="header">
      <nav className="nav">
        {/* Mobile Header */}
        <div className="mobile-header">
          <button
            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <a href="/" className="logo mobile-logo">
            <img src="/logo.svg" alt="MUMIA" className="logo-image" />
          </a>

          <a href="#" className="nav-link mobile-cart">CART (0)</a>
        </div>

        {/* Desktop & Mobile Navigation */}
        <div className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <div className="nav-left">
            <a href="#" className="nav-link underline" onClick={closeMenu}>NEW ARRIVALS</a>
            <a href="#" className="nav-link" onClick={closeMenu}>TOPS</a>
            <a href="#" className="nav-link" onClick={closeMenu}>BODYSUITS</a>
            <a href="#" className="nav-link" onClick={closeMenu}>BOTTOMS</a>
            <a href="#" className="nav-link" onClick={closeMenu}>DRESSES</a>
            <a href="#" className="nav-link" onClick={closeMenu}>SWIM</a>
            <a href="#" className="nav-link" onClick={closeMenu}>ACCESSORIES</a>
            <a href="#" className="nav-link" onClick={closeMenu}>CONTACT</a>
          </div>

          <div className="nav-center desktop-only">
            <a href="/" className="logo">
              <img src="/logo.svg" alt="MUMIA" className="logo-image" />
            </a>
          </div>

          <div className="nav-right">
            <a href="#" className="nav-link" onClick={closeMenu}>SEARCH</a>
            <a href="#" className="nav-link desktop-only" onClick={closeMenu}>CART (0)</a>
          </div>
        </div>

        {/* Overlay for mobile menu */}
        {isMenuOpen && <div className="nav-overlay" onClick={closeMenu}></div>}
      </nav>
    </header>
  )
}

export default Header
