import React from "react";
import { Route } from 'react-router-dom';
import SecondaryTitle from "./SecondaryTitle";
import ProjectPage from './ProjectPage';
import ProjectsList from './ProjectsList';
import PROJECTS from "../content/ProjectInformation";
import { PROJECTS as ProjectsPath } from '../paths';

export default function Projects() {
  return (
    <React.Fragment>
      <SecondaryTitle text="PROJECTS" linkTo={ProjectsPath} />
      <Route exact path={ProjectsPath} component={ProjectsList} />
      {PROJECTS.map(project => {
        return <Route path={project.linkTo} render={() => <ProjectPage projectInfo={project} />} />
      })}
    </React.Fragment>
  );
}
