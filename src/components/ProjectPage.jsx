import React, { PureComponent } from "react";

export default class ProjectPage extends PureComponent {
  getProjectLink() {
    const { projectLink } = this.props.projectInfo;

    if (projectLink) {
      return (
        <p className="Content-paragraph">
          The project can be found <a className="download" href={projectLink}>here</a>.
        </p>
      );
    }
  }

  getGithubLink() {
    const { githubLink } = this.props.projectInfo;

    if (githubLink) {
      return (
        <p className="Content-paragraph">
          Code can be found on GitHub <a className="download" href={githubLink}>here</a>.
        </p>
      );
    }
  }

  getDescription() {
    const { fullDescription } = this.props.projectInfo;

    return fullDescription.map(desc => {
      return (
        <p className="Content-paragraph">
          {desc}
        </p>
      );
    });
  }

  render() {
    const { largeImage, title } = this.props.projectInfo;

    return (
      <React.Fragment>
        <div className="Content-container">
          <img src={largeImage} className="ProjectPage-image" />
        </div>
        <div className="Content-container">
          <h3 className="Content-title">
            {title}
          </h3>
          {this.getDescription()}
          {this.getProjectLink()}
          {this.getGithubLink()}
        </div>
      </React.Fragment>
    );
  }
}
