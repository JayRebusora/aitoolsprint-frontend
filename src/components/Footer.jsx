import React from "react";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        {/* Brand / tagline */}
        <div className="footer-brand">
          <div className="footer-logo">
            ⚡ <span>AI Tools Sprint</span>
          </div>
          <p>
            Curated AI tools, reviews, and tutorials to help creators,
            marketers, and founders ship faster sprints.
          </p>
        </div>

        {/* Navigation links */}
        <div className="footer-links">
          <h4>Explore</h4>
          <ul>
            <li><a href="#reviews">Reviews</a></li>
            <li><a href="#comparisons">Comparisons</a></li>
            <li><a href="#tutorials">Tutorials</a></li>
            <li><a href="#categories">Categories</a></li>
          </ul>
        </div>

        {/* Tiny callout */}
        <div className="footer-note">
          <h4>Creator friendly</h4>
          <p>
            No fluff. Just tested AI tools and practical guides
            to help you earn more with less grind.
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {year} AI Tools Sprint. All rights reserved.</span>
        <span className="footer-small-links">
          <a href="#">Privacy</a>
          <span>•</span>
          <a href="#">Terms</a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
