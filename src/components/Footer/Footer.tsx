import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <Link to="/" className="logo">
        Unified<span>Portal</span>
      </Link>

      <p>One platform. More possibilities.</p>

      <p>
        © {new Date().getFullYear()} Unified Portal. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
