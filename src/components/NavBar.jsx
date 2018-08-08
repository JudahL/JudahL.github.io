import React from "react";
import { Link } from "react-router-dom";
import "../componentsCss/NavBar.css";

export default function NavBar() {
  return (
    <nav className="Nav">
      <div className="Nav-container">
        <h1 className="Nav-title">JL</h1>
        <ul className="Nav-menu">
          <li className="inline-list">
            <Link to="/" className="Nav-link">
              Home
            </Link>
          </li>
          <li className="inline-list">
            <Link to="/projects" className="Nav-link">
              Projects
            </Link>
          </li>
          <li className="inline-list">
            <Link to="/cv" className="Nav-link">
              CV
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
