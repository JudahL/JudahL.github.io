import React from "react";
import { Link } from "react-router-dom";
import "../componentsCss/NavBar.css";

import { HOME as HomePath, PROJECTS as ProjectsPath, CV as CVPath } from '../paths';

export default function NavBar() {
  return (
    <nav className="Nav">
      <div className="Nav-container">
        <Link to={HomePath}>
          <h1 className="Nav-title">
            JUDAH LUCAS
          </h1>
        </Link>
        <div className="Nav-menu">
          <Link to={HomePath}>
            <button className="Nav-link">
              Home
              </button>
          </Link>
          <Link to={ProjectsPath}>
            <button className="Nav-link">
              Projects
            </button>
          </Link>
          <Link to={CVPath}>
            <button className="Nav-link">
              CV
              </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
