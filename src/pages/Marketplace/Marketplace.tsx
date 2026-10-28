

function Marketplace() {
  return (
    <section className="page-section">
      <p className="eyebrow">DISCOVER MORE</p>

      <h1 className="marketplace-title">
        Explore the Marketplace
      </h1>

      <p className="marketplace-description">
        Discover products, services, and opportunities
        all in one place.
      </p>

      <div className="marketplace-grid">
        <article className="marketplace-card">
          <div className="marketplace-icon">✦</div>
          <h2>Products</h2>
          <p>
            Discover thoughtfully selected products for
            your everyday needs.
          </p>
          <span className="marketplace-link">
            Explore products →
          </span>
        </article>

        <article className="marketplace-card">
          <div className="marketplace-icon">◇</div>
          <h2>Services</h2>
          <p>
            Find helpful services and solutions from
            people and businesses.
          </p>
          <span className="marketplace-link">
            Discover services →
          </span>
        </article>

        <article className="marketplace-card">
          <div className="marketplace-icon">↗</div>
          <h2>Opportunities</h2>
          <p>
            Explore new possibilities to connect,
            learn, and grow.
          </p>
          <span className="marketplace-link">
            Explore opportunities →
          </span>
        </article>
      </div>
    </section>
  );
}

export default Marketplace;
