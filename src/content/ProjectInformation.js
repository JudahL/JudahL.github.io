import ObjectivesAppImage from "../images/ObjectivesApp.jpg";
import ObjectivesAppLargeImage from "../images/ObjectivesAppWide.jpg";
import PortfolioSiteImage from "../images/PortfolioSite.jpg";
import PortfolioSiteLargeImage from "../images/PortfolioSiteWide.jpg";
import EnterpriseGameImage from "../images/EnterpriseGame.jpg";
import EnterpriseGameLargeImage from "../images/TheEnterpriseGameWide.jpg";
import StudyNinjaImage from "../images/icon_7.png";
import StudyNinjaLargeImage from "../images/StudyNinjaWide.jpg";
import { PROJECTS as ProjectsPath } from '../paths';


const PROJECTS = [
  {
    title: 'DAILY OBJECTIVES APP',
    image: ObjectivesAppImage,
    largeImage: ObjectivesAppLargeImage,
    tech: 'React, Redux, Node.js, Express, MongoDB, CSS',
    description: 'A full-stack app for setting up daily objectives.',
    linkTo: ProjectsPath + '/daily-objectives-app',
    projectLink: 'https://limitless-beyond-46458.herokuapp.com/',
    githubLink: 'https://github.com/JudahL/DailyObjectivesApp',
    fullDescription: ['This is a simple app I created to keep track of daily objectives and habits.',
      'The front-end was built using React, and also utilises Redux for state management. The back-end uses the Node.js framework Express and a MongoDB database hosted on mLab.']
  },
  {
    title: 'PORTFOLIO SITE',
    image: PortfolioSiteImage,
    largeImage: PortfolioSiteLargeImage,
    tech: 'React, CSS, GitHub pages',
    description: 'This portfolio site was created by myself using React and GitHub pages.',
    linkTo: ProjectsPath + '/portfolio',
    projectLink: null,
    githubLink: 'https://github.com/JudahL/JudahL.github.io',
    fullDescription: ["I built this portfolio website with React. GitHub pages was used for hosting."]
  },
  {
    title: 'THE ENTERPRISE GAME',
    image: EnterpriseGameImage,
    largeImage: EnterpriseGameLargeImage,
    tech: 'Unity, C#',
    description: 'An educational game about running businesses based on an existing boardgame.',
    linkTo: ProjectsPath + '/enterprise-game',
    projectLink: null,
    githubLink: null,
    fullDescription: ['The Enterprise Game is an educational board game designed to help teach students about running a business.',
      'My role was to build a desktop version of the game, based on the rules of an existing physical board game.'
      + ' I worked with talented artists to integrate their assets into the development platform (Unity).']
  },
  {
    title: 'STUDY NINJA',
    image: StudyNinjaImage,
    largeImage: StudyNinjaLargeImage,
    tech: 'Unity, C#',
    description: 'A study app for scheduling exam study timetables, motivational messages and learning-focused mini-games.',
    linkTo: ProjectsPath + '/study-ninja',
    projectLink: null,
    githubLink: null,
    fullDescription: ['Study Ninja was an educational mobile app developed for both android and iOS platforms.',
      ' It was designed to aid those studying for exams by scheduling a study plan for them based on their subjects and exam timetable.'
      + ' The app also featured fun educational mini-games to help break up study sessions.',
      'I worked with some talented artists to bring the project to life. My role was to work as a freelance developer within Unity.']
  },
];

export default PROJECTS;