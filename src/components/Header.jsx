import { useState } from 'react'
import { Link } from 'react-router-dom'
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

          <Link to="/" className="logo mobile-logo" onClick={closeMenu}>
            <img src="/logo.svg" alt="MUMMIA" className="logo-image" />
          </Link>

          <Link to="#" className="nav-link mobile-cart">CART (0)</Link>
        </div>

        {/* Desktop & Mobile Navigation */}
        <div className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <div className="nav-left">
            <Link to="#" className="nav-link underline" onClick={closeMenu}>NEW ARRIVALS</Link>
            <Link to="#" className="nav-link" onClick={closeMenu}>TOPS</Link>
            <Link to="#" className="nav-link" onClick={closeMenu}>BODYSUITS</Link>
            <Link to="#" className="nav-link" onClick={closeMenu}>BOTTOMS</Link>
            <Link to="#" className="nav-link" onClick={closeMenu}>DRESSES</Link>
            <Link to="#" className="nav-link" onClick={closeMenu}>SWIM</Link>
            <Link to="#" className="nav-link" onClick={closeMenu}>ACCESSORIES</Link>
            <Link to="#" className="nav-link" onClick={closeMenu}>CONTACT</Link>
          </div>

          <div className="nav-center desktop-only">
            <Link to="/" className="logo">
              <img src="/logo.svg" alt="MUMMIA" className="logo-image" />
            </Link>
          </div>

          <div className="nav-right">
            <Link to="#" className="nav-link" onClick={closeMenu}>SEARCH</Link>
            <Link to="#" className="nav-link desktop-only" onClick={closeMenu}>CART (0)</Link>
          </div>
        </div>

        {/* Overlay for mobile menu */}
        {isMenuOpen && <div className="nav-overlay" onClick={closeMenu}></div>}
      </nav>
    </header>
  )
}

export default Header
