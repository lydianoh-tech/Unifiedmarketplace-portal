
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="eyebrow">ONE PLATFORM. ENDLESS POSSIBILITIES.</p>

        <h1>
          Everything you need,
          <span> all in one place.</span>
        </h1>

        <p className="hero-description">
          Discover services, explore opportunities, and connect with
          people and businesses through one unified digital platform.
        </p>

        <div className="hero-actions">
          <Link to="/marketplace" className="primary-button">
            Explore Marketplace
          </Link>
          <Link to="/about" className="secondary-button">
            Learn More
          </Link>
        </div>

        <p className="hero-note">
          A simpler way to connect, discover, and grow.
        </p>
      </div>

      <div className="hero-visual" aria-hidden="true">
        <div className="visual-circle circle-one" />
        <div className="visual-circle circle-two" />

        <div className="visual-card">
          <div className="visual-icon">✦</div>
          <p className="visual-label">YOUR WORLD, CONNECTED</p>
          <h2>Welcome to a more unified experience.</h2>

          <div className="visual-line" />
          <div className="visual-line short-line" />

          <div className="visual-footer">
            <span className="status-dot" />
            Your possibilities start here
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
