import React from "react";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        {/* Left side – text */}
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
            ✅ Updated for 2025 · 🎯 Perfect for creators, marketers, and founders
          </p>
        </div>

        {/* Right side – simple card mockup */}
        <div className="hero-card">
          <div className="hero-card-header">
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
          </div>
          <div className="hero-card-body">
            <p className="hero-card-label">Featured AI Tool</p>
            <h2>SmartWrite AI</h2>
            <p className="hero-card-desc">
              Generate blog posts, emails, and sales copy in seconds with AI.
            </p>
            <ul className="hero-card-list">
              <li>✨ 4.8/5 rating</li>
              <li>⚙️ Templates for blogs, ads, emails</li>
              <li>💸 Free trial available</li>
            </ul>
            <button className="btn-secondary">Read Review</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
