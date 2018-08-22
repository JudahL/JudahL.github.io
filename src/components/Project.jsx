import React from "react";
import { Link } from 'react-router-dom';

export default function Project(props) {
  const { title, image, tech, description, linkTo } = props.project;
  return (
    <Link to={linkTo}>
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
    </Link>
  );
}