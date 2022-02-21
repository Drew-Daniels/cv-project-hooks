import { Component } from 'react';

class SkillsSectionOutput extends Component {
  constructor(props) {
    super();
  }

  render() {
    const {skills} = this.props;
    return (
      <section id='skills-preview-section' className='preview-section'>
        <h3 className='preview-section-header'>Skills</h3>
        <ul>
          {skills.map((skill) => {
            return <li key={skill.id}>{skill.skillDescription}</li>;
          })}
        </ul>
      </section>
    );
  }
}

export default SkillsSectionOutput;