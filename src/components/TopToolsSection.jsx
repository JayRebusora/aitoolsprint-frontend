import React, { useEffect, useState } from "react";

function TopToolsSection() {
  const [tools, setTools] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTools = async () => {
      try {
        const res = await fetch("https://aitoolsprint-backend-your-domain.com/api/tools"); 
        // replace with your ACTUAL backend URL once deployed

        const data = await res.json();
        setTools(data);
      } catch (err) {
        console.error("Failed to load tools:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTools();
  }, []);

  if (loading) return <p>Loading tools...</p>;

  return (
    <section className="top-tools">
      <h2>Top AI Tools</h2>

      <div className="top-tools-grid">
        {tools.map((tool) => (
          <article key={tool._id} className="tool-card">
            <div className="tool-tag">{tool.tag}</div>
            <h3>{tool.name}</h3>
            <p className="tool-category">{tool.category}</p>
            <p className="tool-desc">{tool.description}</p>
            <div className="tool-meta">
              <span>⭐ {tool.rating}</span>
              <span>{tool.price}</span>
            </div>
            <button className="btn-outline">Read review</button>
          </article>
        ))}
      </div>
    </section>
  );
}

export default TopToolsSection;
