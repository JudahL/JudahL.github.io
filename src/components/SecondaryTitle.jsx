import React, { PureComponent } from "react";
import '../componentsCss/MainTitle.css';

export default class SecondaryTitle extends PureComponent {
  render() {
    const { text, desc } = this.props;
    return (
      <React.Fragment>
        <div className="MainTitle-container">
          <div className="MainTitle-content">
            <h2 className="MainTitle-name">
              {text}
            </h2>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
