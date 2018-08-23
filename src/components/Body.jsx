import "../componentsCss/Body.css";
import "../componentsCss/Content.css";
import React from "react";
import Home from "./Home";
import Projects from "./Projects";
import CV from "./CV";
import { Route } from "react-router-dom";

export default function Body() {
  return (
    <div className="App-body">
      <div className="Content">
        <Route exact path="/" component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/cv" component={CV} />
      </div>
    </div>
  );
}
