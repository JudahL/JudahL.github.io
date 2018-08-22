import React from "react";
import { Route } from 'react-router-dom';
import SecondaryTitle from "./SecondaryTitle";
import ProjectPage from './ProjectPage';
import ProjectsList from './ProjectsList';
import PROJECTS from "../ProjectInformation";

export default function Projects() {
  return (
    <React.Fragment>
      <SecondaryTitle text="PROJECTS" linkTo="/projects" />
      <Route exact path="/projects" component={ProjectsList} />
      {PROJECTS.map(project => {
        return <Route path={project.linkTo} render={() => <ProjectPage projectInfo={project} />} />
      })}
    </React.Fragment>
  );
}
