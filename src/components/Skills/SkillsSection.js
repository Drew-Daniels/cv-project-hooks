import { Component } from 'react';
import addEntryIcon from '../../images/icons/add-entry-icon.svg';
import SkillsEntry from './SkillsEntry';

class SkillsSection extends Component {
  constructor(prop) {
    super();
  }

  render() {

    return (
      <section className='form-section'>
        <SkillsEntry />
        <button className='btn-base'>
          <span>Add another Skill</span>
          <img src={addEntryIcon} alt="Addition Sign"></img>
        </button>
      </section>
    );
  }
}

export default SkillsSection;