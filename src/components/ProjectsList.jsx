import React from "react";
import Project from "./Project";
import PROJECTS from "../ProjectInformation";

export default function Projects() {
  return (
    PROJECTS.map(project => {
      return <Project project={project} />
    })
  );
}