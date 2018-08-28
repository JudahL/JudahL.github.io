import "../componentsCss/Body.css";
import "../componentsCss/Content.css";
import React from "react";
import Home from "./Home";
import Projects from "./Projects";
import CV from "./CV";
import { Route } from "react-router-dom";
import { HOME as HomePath, PROJECTS as ProjectsPath, CV as CVPath } from '../paths';

export default function Body() {
  return (
    <div className="App-body">
      <div className="Content">
        <Route exact path={HomePath} component={Home} />
        <Route path={ProjectsPath} component={Projects} />
        <Route path={CVPath} component={CV} />
      </div>
    </div>
  );
}
