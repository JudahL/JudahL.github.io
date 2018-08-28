import React, { Fragment } from "react";
import DownloadCV from "./DownloadCV";
import SecondaryTitle from "./SecondaryTitle";

export default function CV() {
  return (
    <Fragment>
      <SecondaryTitle text="Curriculum Vitae" linkTo="/cv" />
      <DownloadCV />
    </Fragment>
  );
}
