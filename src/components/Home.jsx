import React from "react";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Contact from "./Contact";
import MainTitle from "./MainTitle";

export default function Home() {
  return (
    <React.Fragment>
      <MainTitle text="sacuL haduJ" desc="Software Developer" showPic={true} />
      <div className="Body-content">
        <AboutMe />
        <Skills />
        <Contact />
      </div>
    </React.Fragment>
  );
}
