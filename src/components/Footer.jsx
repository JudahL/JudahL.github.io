import React from "react";
import "../componentsCss/Footer.css";

export default function Footer() {
  return (
    <footer className="Footer">
      <div className="Footer-container">
        <div className="Footer-social">
          <div className="Footer-column">
            <a
              className="Footer-link"
              href="https://www.linkedin.com/in/judah-lucas-29942743"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="Footer-button">
                LinkedIn
              </button>
            </a>
          </div>
          <div className="Footer-column">
            <a
              className="Footer-link"
              href="https://github.com/JudahL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="Footer-button">
                GitHub
              </button>
            </a>
          </div>
        </div>
        <p className="Footer-created">created by judah lucas with react.js</p>
      </div>
    </footer>
  );
}

/*<div>
          <p className="Footer-contact-email">
            contact: judahdslucas@gmail.com
          </p>
        </div>*/
