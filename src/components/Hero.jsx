import React, { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL;

function Hero() {
  const [featured, setFeatured] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        if (!API_URL) {
          console.warn("VITE_API_URL is not set");
          setError("API URL not configured.");
          setLoading(false);
          return;
        }

        const res = await fetch(`${API_URL}/api/tools/featured`);
        if (!res.ok) {
          throw new Error("Failed to fetch featured tool");
        }

        const data = await res.json();
        setFeatured(data);
      } catch (err) {
        console.error(err);
        setError("No featured tool set yet.");
      } finally {
        setLoading(false);
      }
    };

    fetchFeatured();
  }, []);

  return (
    <section className="hero">
      <div className="hero-inner">
        {/* LEFT SIDE – text, CTA */}
        <div className="hero-text">
          <span className="hero-pill">⚡ AI Tools Sprint</span>
          <h1>
            Find the best <span className="hero-highlight">AI tools</span> for
            your next sprint.
          </h1>
          <p>
            Discover curated reviews, comparisons, and tutorials on AI tools
            that actually boost productivity, automate your workflow, and help
            you earn more online.
          </p>

          <div className="hero-actions">
            <button className="btn-primary">View Top AI Tools</button>
            <button className="btn-ghost">Read Latest Reviews</button>
          </div>

          <p className="hero-meta">
            ✅ Updated for 2025 · 🎯 Perfect for creators, marketers, and
            founders
          </p>
        </div>

        {/* RIGHT SIDE – Featured AI Tool card */}
        <div className="hero-card">
          <div className="hero-card-header">
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
          </div>
          <div className="hero-card-body">
            <p className="hero-card-label">Featured AI Tool</p>

            {loading && (
              <p className="hero-card-desc">Loading featured tool…</p>
            )}

            {!loading && error && (
              <p className="hero-card-desc">{error}</p>
            )}

            {!loading && !error && featured && (
              <>
                <h2>{featured.name}</h2>
                <p className="hero-card-desc">{featured.description}</p>

                <ul className="hero-card-list">
                  <li>⭐ {featured.rating}/5 rating</li>
                  {featured.tag && <li>{featured.tag}</li>}
                  {featured.price && <li>{featured.price}</li>}
                </ul>

                <button
                  className="btn-secondary"
                  onClick={() => {
                    if (featured.affiliateUrl) {
                      window.open(
                        featured.affiliateUrl,
                        "_blank",
                        "noopener"
                      );
                    }
                  }}
                >
                  Read Review
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
