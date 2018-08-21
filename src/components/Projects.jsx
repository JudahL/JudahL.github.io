import React from "react";
import SecondaryTitle from "./SecondaryTitle";
import Project from "./Project";
import StudyNinjaImage from "../images/icon_7.png";
import EnterpriseGameImage from "../images/EnterpriseGame.jpg";
import PortfolioSiteImage from "../images/PortfolioSite.jpg";
import ObjectivesAppImage from "../images/ObjectivesApp.jpg";
import Placeholder from "../images/logo.svg";

const PROJECTS = [
  {
    title: 'DAILY OBJECTIVES APP',
    image: ObjectivesAppImage,
    tech: 'React, Redux, Node.js, Express, MongoDB, CSS',
    description: 'A full-stack app for setting up daily objectives.'
  },
  {
    title: 'PORTFOLIO SITE',
    image: PortfolioSiteImage,
    tech: 'React, CSS, GitHub pages',
    description: 'This portfolio site was created by myself using React and GitHub pages.'
  },
  {
    title: 'THE ENTERPRISE GAME',
    image: EnterpriseGameImage,
    tech: 'Unity, C#',
    description: 'An educational game about running businesses based on an existing boardgame.'
  },
  {
    title: 'STUDY NINJA',
    image: StudyNinjaImage,
    tech: 'Unity, C#',
    description: 'A study app for scheduling exam study timetables, motivational messages and learning-focused mini-games.'
  },
];


export default function Projects() {
  return (
    <React.Fragment>
      <SecondaryTitle text="PROJECTS" />
      <div className="Content">
        {PROJECTS.map(project => {
          return <Project title={project.title} image={project.image} tech={project.tech} description={project.description} />
        })}
      </div>
    </React.Fragment>
  );
}
