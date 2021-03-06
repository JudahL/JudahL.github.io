import React, { Fragment } from "react";
import { Route } from 'react-router-dom';
import SecondaryTitle from "./SecondaryTitle";
import ProjectPage from './ProjectPage';
import ProjectsList from './ProjectsList';
import PROJECTS from "../content/ProjectInformation";
import { PROJECTS as ProjectsPath } from '../paths';
import '../componentsCss/Projects.css';

export default function Projects() {
  return (
    <Fragment>
      <SecondaryTitle text="PROJECTS" linkTo={ProjectsPath} />
      <Route exact path={process.env.PUBLIC_URL + ProjectsPath} component={ProjectsList} />
      {PROJECTS.map(project => {
        return <Route path={process.env.PUBLIC_URL + project.linkTo} render={() => <ProjectPage projectInfo={project} />} />
      })}
    </Fragment>
  );
}
