import React from "react";
import ObjectivesAppImage from "../images/ObjectivesApp.jpg";


export default function ProjectPage(props) {
  const { image, title, fullDescription } = props.projectInfo
  return (
    <React.Fragment>
      <div className="Content-container">
        <img src={image} className="ProjectPage-image" />
      </div>
      <div className="Content-container">
        <h3 className="Content-title">
          {title}
        </h3>
        {fullDescription.map(desc => {
          return (
            <p className="Content-paragraph">
              {desc}
            </p>
          )
        })}
      </div>
    </React.Fragment>
  );
}
