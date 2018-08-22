import React from "react";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Contact from "./Contact";
import MainTitle from "./MainTitle";

export default function Home() {
  return (
    <React.Fragment>
      <MainTitle text="SACUL HADUJ" desc="FULL-STACK DEVELOPER" showPic={true} />
      <AboutMe />
      <Skills />
      <Contact />
    </React.Fragment>
  );
}
