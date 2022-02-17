import { Component } from 'react';

class SkillsEntryInput extends Component {
  constructor(prop) {
    super();
  }

  render() {

    return (
      <div className='form-entry'>
        <label htmlFor='skill'>Skill:</label>
        <input id='skill' type='text'></input>
      </div>
    );
  }
}

export default SkillsEntryInput;