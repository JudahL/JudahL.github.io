import React, { PureComponent } from "react";
import "../componentsCss/Footer.css";
import FOOTER_SOCIAL_LINKS from '../content/FooterSocialLinks';

class Footer extends PureComponent {
  // Returns the html for a given footer social link button
  renderLink(socialLink) {
    return (
      <div className="Footer-column">
        <a
          href={socialLink.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="Footer-button">
            {socialLink.title}
          </button>
        </a>
      </div>
    );
  }

  // Returns the generated html for footer social link buttons based on the information provided in FOOTER_SOCIAL_LINKS
  renderSocialLinks() {
    return FOOTER_SOCIAL_LINKS.map(link => this.renderLink(link));
  }

  render() {
    return (
      <footer className="Footer">
        {this.renderSocialLinks()}
        <p className="Footer-created">created by judah lucas with react.js</p>
      </footer>
    );
  }
}

export default Footer;
