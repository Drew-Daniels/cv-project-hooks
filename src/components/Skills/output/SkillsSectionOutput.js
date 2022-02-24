import { Component } from 'react';

class SkillsSectionOutput extends Component {
  constructor(props) {
    super();
  }

  render() {
    const {skills, onEdit} = this.props;
    
    return (
      <section id='skills-preview-section' className='preview-section'>
        <h3 className='preview-section-header'>Skills</h3>
        <ul className='skills-list'>
          {skills.map((skill) => {
            return <li key={skill.skillID} id={skill.skillID} className='skill' onClick={onEdit}>{skill.skillDescription}</li>;
          })}
        </ul>
      </section>
    );
  }
}

export default SkillsSectionOutput;