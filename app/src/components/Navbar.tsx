import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <header className="site-header">
      <div className="container nav">
        <Link to="/" className="brand">
          <img src="/Karoo Dark Short.svg" alt="Karoo logo" />
        </Link>
        <div className="nav-links">
          <NavLink to="/" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>About</NavLink>
        </div>
      </div>
    </header>
  )
}

export default Navbar


