import { Component } from 'react';
import addEntryIcon from '../../../images/icons/add-entry-icon.svg';
import SkillsEntryInput from './SkillsEntryInput';

class SkillsSectionInput extends Component {
  constructor(props) {
    super();
  };

  render() {
    const {
      skill, 
      changeHandler, 
      submitHandler
    } = this.props;
    
    return (
      <section>
        <SkillsEntryInput 
          skill={skill}
          changeHandler={changeHandler}
        />
        <div className='form-submit-btn-container'>
          <button className="btn-base btn-form" onClick={submitHandler}>
            <img src={addEntryIcon} alt="Addition Sign"></img>
            <span>Submit</span>
          </button>
        </div>
      </section>
    );
  };
}

export default SkillsSectionInput;