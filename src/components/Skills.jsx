import React, { PureComponent } from "react";
import SKILL_TYPES from '../SkillsInformation';

export default class Skills extends PureComponent {
  generateSkillList(skillList) {
    return skillList.map(skill => `${skill}, `);
  }

  generateSkillParagraph(skillType) {
    return (
      <p className="Content-paragraph">
        <h4 className="Content-subtitle">
          {`${skillType.type}:`}
        </h4>
        {this.generateSkillList(skillType.skillList)}
      </p>
    );
  }

  render() {
    return (
      <div className="Content-container">
        <h3 className="Content-title">
          SKILLS
        </h3>
        {SKILL_TYPES.map(skillType => this.generateSkillParagraph(skillType))}
      </div>
    );
  }
}

