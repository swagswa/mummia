import './Header.css'

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-left">
          <a href="#" className="nav-link underline">NEW ARRIVALS</a>
          <a href="#" className="nav-link">TOPS</a>
          <a href="#" className="nav-link">BODYSUITS</a>
          <a href="#" className="nav-link">BOTTOMS</a>
          <a href="#" className="nav-link">DRESSES</a>
          <a href="#" className="nav-link">SWIM</a>
          <a href="#" className="nav-link">ACCESSORIES</a>
          <a href="#" className="nav-link">CONTACT</a>
        </div>

        <div className="nav-center">
          <a href="/" className="logo">
            <img src="/logo.svg" alt="MUMIA" className="logo-image" />
          </a>
        </div>

        <div className="nav-right">
          <a href="#" className="nav-link">SEARCH</a>
          <a href="#" className="nav-link">CART (0)</a>
        </div>
      </nav>
    </header>
  )
}

export default Header
