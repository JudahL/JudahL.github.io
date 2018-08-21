import React from "react";

export default function Project(props) {
  const { title, tech, description } = props;
  return (
    <div className="Content-container">
      <h3 className="Content-title">
        {title}
      </h3>
      <h4 className="Content-subtitle">
        {tech}
      </h4>
      <p className="Content-paragraph">
        {description}
      </p>
    </div>
  );
}