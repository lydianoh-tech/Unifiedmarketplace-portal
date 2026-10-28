import { Link } from 'react-router-dom';
import Hero from '../../components/Hero/Hero';

function Home() {
  return (
    <>
      <Hero />
      <section className="features">
      <div className="section-heading">
        <p className="eyebrow">BUILT AROUND YOU</p>
        <h2>Discover what you can do.</h2>
        <p>
          One destination to explore services, find opportunities,
          and bring your ideas to life.
        </p>
      </div>

      <div className="feature-grid">
        <article className="feature-card">
          <div className="feature-icon">⌕</div>
          <h3>Explore the Marketplace</h3>
          <p>
            Discover products, services, and opportunities in one place.
          </p>
          <Link to="/marketplace">Explore marketplace →</Link>
        </article>

        <article className="feature-card">
          <div className="feature-icon">✧</div>
          <h3>Find Services</h3>
          <p>
            Connect with services and solutions that fit your needs.
          </p>
          <Link to="/services">Discover services →</Link>
        </article>

        <article className="feature-card">
          <div className="feature-icon">↗</div>
          <h3>Grow Your Opportunities</h3>
          <p>
            Bring your goals closer with a more connected experience.
          </p>
          <Link to="/register">Get started →</Link>
        </article>
      </div>
    </section>
    
    </>
  );
}

export default Home;
