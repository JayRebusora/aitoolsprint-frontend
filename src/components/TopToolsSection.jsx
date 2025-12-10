// src/components/TopToolsSection.jsx
import React, { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL;

function TopToolsSection() {
  const [tools, setTools] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTools = async () => {
      try {
        const res = await fetch(`${API_URL}/api/tools`);
        if (!res.ok) throw new Error("Failed to fetch tools");
        const data = await res.json();
        setTools(data);
      } catch (err) {
        console.error(err);
        setError("Could not load tools right now.");
      } finally {
        setLoading(false);
      }
    };

    fetchTools();
  }, []);

  return (
    <section className="top-tools" id="reviews">
      <div className="top-tools-header">
        <h2>Top AI tools this month</h2>
        <p>
          Curated tools we actually recommend for creators, marketers, and
          founders. Handpicked and updated regularly.
        </p>
      </div>

      {loading && <p>Loading tools…</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading && !error && (
        <div className="top-tools-grid">
          {tools.map((tool) => (
            <article key={tool._id} className="tool-card">
              <div className="tool-tag">{tool.tag}</div>
              <h3>{tool.name}</h3>
              <p className="tool-category">{tool.category}</p>
              <p className="tool-desc">{tool.description}</p>
              <div className="tool-meta">
                <span>⭐ {tool.rating}/5 rating</span>
                <span>{tool.price}</span>
              </div>
              <button
                className="btn-outline"
                onClick={() => {
                  if (tool.affiliateUrl) {
                    window.open(tool.affiliateUrl, "_blank", "noopener");
                  }
                }}
              >
                Read full review
              </button>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default TopToolsSection;
