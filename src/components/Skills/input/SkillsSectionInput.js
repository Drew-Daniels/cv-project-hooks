import { Component } from 'react';
import addEntryIcon from '../../../images/icons/add-entry-icon.svg';
import SkillsEntryInput from './SkillsEntryInput';

class SkillsSectionInput extends Component {
  constructor(prop) {
    super();
  }

  render() {

    return (
      <section className='form-section'>
        <SkillsEntryInput />
        <button className='btn-base'>
          <span>Add another Skill</span>
          <img src={addEntryIcon} alt="Addition Sign"></img>
        </button>
      </section>
    );
  }
}

export default SkillsSectionInput;