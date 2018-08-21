import React from "react";

export default function Project(props) {
  const { title, image, tech, description } = props;
  return (
    <div className="Content-container">
      <div className="Project-image-container">
        <img src={image} className="Project-image" />
      </div>
      <div className="Project-information-container">
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
    </div>
  );
}