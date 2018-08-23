import React from "react";

export default function Contact() {
  return (
    <div className="Content-container">
      <h3 className="Content-title">
        CONTACT
      </h3>
      <p className="Content-paragraph">
        {'Feel free to contact me at: '}
        <a className="download" href={"mailto:" + EMAIL}>
          {EMAIL}
        </a>
      </p>
    </div>
  );
}

const EMAIL = "judahdslucas@gmail.com";
