import { Component } from 'react';

class SkillsEntryInput extends Component {
  constructor(props) {
    super();

  }

  render() {
    const {skill, changeHandler} = this.props;
    const {skillDescription} = skill;


    return (
      <div className='form-entry'>
        <div className='form-control'>
          <label htmlFor='skill-description'>Skill Description:</label>
          <input 
            id='skill-description' 
            type='text' 
            name='skillDescription' 
            value={skillDescription} 
            onChange={changeHandler}>
          </input>
        </div>
      </div>
    );
  }
}

export default SkillsEntryInput;
