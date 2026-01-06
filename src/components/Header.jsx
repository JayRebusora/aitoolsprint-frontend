import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

function Header() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        {/* LEFT: Brand */}
        <Link to="/" className="brand" onClick={closeMenu}>
          <img src={logo} alt="AI Tools Sprint logo" className="brand-logo" />
          <span className="brand-name">AI Tools Sprint</span>
        </Link>

        {/* Mobile toggle */}
        <button
          className="nav-toggle"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          ☰
        </button>

        {/* RIGHT: Nav */}
        <nav className={`nav ${open ? "nav-open" : ""}`}>
          {/* Home section links */}
          <a href="/#reviews" onClick={closeMenu}>
            Reviews
          </a>
          <a href="/#comparisons" onClick={closeMenu}>
            Comparisons
          </a>
          <a href="/#tutorials" onClick={closeMenu}>
            Tutorials
          </a>

          {/* Real pages with active state */}
          <NavLink
            to="/categories"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? "nav-link nav-link-active" : "nav-link"
            }
          >
            Categories
          </NavLink>

          <NavLink
            to="/services"
            onClick={closeMenu}
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
