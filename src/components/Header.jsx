import React from "react";
import logo from "../assets/logo.png"; // lightning logo mo

function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        {/* LEFT: Brand */}
        <div className="brand">
          <img
            src={logo}
            alt="AI Tools Sprint logo"
            className="brand-logo"
          />
          <span className="brand-name">AI Tools Sprint</span>
        </div>

        {/* RIGHT: Nav */}
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
