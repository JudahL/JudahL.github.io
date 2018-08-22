import React from "react";
import DownloadCV from "./DownloadCV";
import SecondaryTitle from "./SecondaryTitle";

export default function CV() {
  return (
    <React.Fragment>
      <SecondaryTitle text="Curriculum Vitae" linkTo="/cv" />
      <DownloadCV />
    </React.Fragment>
  );
}
