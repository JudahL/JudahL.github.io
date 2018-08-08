import React from "react";

export default function Contact() {
  return (
    <React.Fragment>
      <h3 className="App-body-title">Contact</h3>
      <p className="App-body-content">
        Feel free to contact me at:{" "}
        <a className="download" href={"mailto:" + email}>
          {email}
        </a>
      </p>
    </React.Fragment>
  );
}

const email = "judahdslucas@gmail.com";
