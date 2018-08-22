import React from "react";
import { Link } from "react-router-dom";
import "../componentsCss/NavBar.css";

export default function NavBar() {
  return (
    <nav className="Nav">
      <div className="Nav-container">
        <h1 className="Nav-title">
          JUDAH LUCAS
        </h1>
        <div className="Nav-menu">
          <Link to="/">
            <button className="Nav-link">
              Home
              </button>
          </Link>
          <Link to="/projects">
            <button className="Nav-link">
              Projects
            </button>
          </Link>
          <Link to="/cv">
            <button className="Nav-link">
              CV
              </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
