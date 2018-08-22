import React from "react";
import "../componentsCss/Skills.css";

export default function Skills() {
  return (
    <div className="Content-container">
      <h3 className="Content-title">
        SKILLS
      </h3>
      <p className="Content-paragraph">
        <h4 className="Content-subtitle">
          Languages:
        </h4>
        HTML, Javascript, CSS, C#, Python.
      </p>
      <p className="Content-paragraph">
        <h4 h4 className="Content-subtitle">
          Frameworks/Libraries:
        </h4>
        React, Redux, Node.js, Express, MongoDB, Unity.
      </p>
      <p className="Content-paragraph">
        <h4 h4 className="Content-subtitle">
          Editors:
        </h4>
        Visual Studio Code, Visual Studio, Brackets, Sublime Text.
      </p>
      <p className="Content-paragraph">
        <h4 className="Content-subtitle">
          Other:
        </h4>
        Test-Driven-Development, Version Control(Git/GitHub), SOLID Principles, Dependency Injection.
      </p>
    </div>
  );
}