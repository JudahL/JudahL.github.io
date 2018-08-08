import React from "react";
import DownloadCV from "./DownloadCV";
import MainTitle from "./MainTitle";

export default function CV() {
  return (
    <React.Fragment>
      <MainTitle text="eatiV mulucirruC" desc="_" showPic={false} />
      <DownloadCV />
    </React.Fragment>
  );
}
