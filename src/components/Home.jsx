import React, { Fragment } from "react";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Contact from "./Contact";
import MainTitle from "./MainTitle";

export default function Home() {
  return (
    <Fragment>
      <MainTitle text="SACUL HADUJ" desc="SOFTWARE DEVELOPER" />
      <AboutMe />
      <Skills />
      <Contact />
    </Fragment>
  );
}
