import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import '../componentsCss/MainTitle.css';

export default class SecondaryTitle extends PureComponent {
  render() {
    const { text, linkTo } = this.props;

    return (
      <Link to={linkTo}>
        <div className="MainTitle-container">
          <div className="MainTitle-content">
            <h2 className="MainTitle-name">
              {text}
            </h2>
          </div>
        </div>
      </Link>
    );
  }
}
