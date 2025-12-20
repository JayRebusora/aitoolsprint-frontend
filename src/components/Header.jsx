import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        {/* LEFT: Brand */}
        <Link to="/" className="brand">
          <img src={logo} alt="AI Tools Sprint logo" className="brand-logo" />
          <span className="brand-name">AI Tools Sprint</span>
        </Link>

        {/* RIGHT: Nav */}
        <nav className="nav">
          {/* Home section links (works even if user is on /services) */}
          <a href="/#reviews">Reviews</a>
          <a href="/#comparisons">Comparisons</a>
          <a href="/#tutorials">Tutorials</a>
          <a href="/#categories">Categories</a>

          {/* NEW: Services page link with active state */}
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? "nav-link nav-link-active" : "nav-link"
            }
          >
            Services
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
