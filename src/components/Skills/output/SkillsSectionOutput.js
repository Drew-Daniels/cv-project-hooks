import { Component } from 'react';

class SkillsSectionOutput extends Component {
  constructor(props) {
    super();
  }

  render() {
    const {skills, onEdit, onDelete} = this.props;
    
    return (
      <section id='skills-preview-section' className='preview-section'>
        <h3 className='preview-section-header'>Skills</h3>
        <ul className='skills-list'>
          {skills.map((skill) => {
            return <li key={skill.skillID} id={skill.skillID} className='skill'>
                    {skill.skillDescription}
                    <button className='btn-base btn-preview btn-show-on-hover' onClick={onEdit}>Edit</button>
                    <button className='btn-base btn-preview btn-show-on-hover' onClick={onDelete}>Delete</button>
                   </li>;
          })}
        </ul>
      </section>
    );
  }
}

export default SkillsSectionOutput;