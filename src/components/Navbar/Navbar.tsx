import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="logo">
        Unified<span>Portal</span>
      </Link>

      <nav className="nav-links" aria-label="Main navigation">
        <Link to="/">Home</Link>
        <Link to="/marketplace">Marketplace</Link>
        <Link to="/services">Services</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <div className="nav-actions">
        <Link to="/login" className="login-link">
          Log in
        </Link>

        <Link to="/register" className="signup-button">
          Get Started
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
