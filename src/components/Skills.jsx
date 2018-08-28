import React, { PureComponent } from "react";
import SKILL_TYPES from '../content/SkillsInformation';

export default class Skills extends PureComponent {
  // Returns a fullstop if the element of given index is the last in the array or a comma if not
  getCommaOrFullstop(skillList, index) {
    return skillList.length === index + 1 ? '.' : ',';
  }

  // Creates a returns a string of all the elements in the array seperated by commas
  generateSkillList(skillList) {
    return skillList.map((skill, index) => `${skill}${this.getCommaOrFullstop(skillList, index)} `);
  }

  // Creates and returns a styled paragraph based on the skillType information passed as a parameter
  // SkillType contains the type (for example 'Programming Languages') and an array of the different skills of that type
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

