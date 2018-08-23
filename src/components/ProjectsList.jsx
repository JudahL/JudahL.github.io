import React from "react";
import Project from "./Project";
import PROJECTS from "../ProjectInformation";

export default function ProjectsList() {
  return PROJECTS.map(project => <Project project={project} />);
}