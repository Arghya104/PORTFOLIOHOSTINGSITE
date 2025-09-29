import './Navigation.css'

function Navigation() {
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-content">
          <div className="nav-logo">PORTFOLIO</div>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
