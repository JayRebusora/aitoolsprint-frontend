import React from "react";
import logo from "../assets/logo.png"; // same logo na ginamit mo

function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        {/* Logo + Brand */}
        <div className="brand">
          <img src={logo} alt="AI Tools Sprint logo" className="brand-logo" />
          <span className="brand-name">AI Tools Sprint</span>
        </div>

        {/* Navigation */}
        <nav className="nav">
          <a href="#reviews">Reviews</a>
          <a href="#comparisons">Comparisons</a>
          <a href="#tutorials">Tutorials</a>
          <a href="#categories">Categories</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
