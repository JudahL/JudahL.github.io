import "../componentsCss/Body.css";
import React from "react";
import Home from "./Home";
import Projects from "./Projects";
import CV from "./CV";
import { Route } from "react-router-dom";

export default function Body() {
  return (
    <div className="App-body">
      <div className="Body-top" />
      <Route exact path="/" component={Home} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/cv" component={CV} />
    </div>
  );
}
