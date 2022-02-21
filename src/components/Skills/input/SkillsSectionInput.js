import { Component } from 'react';
import addEntryIcon from '../../../images/icons/add-entry-icon.svg';
import SkillsEntryInput from './SkillsEntryInput';

class SkillsSectionInput extends Component {
  constructor(props) {
    super();
  };

  render() {
    const {skillDescription, changeHandler} = this.props;
    return (
      <section>
        <SkillsEntryInput skillDescription= {skillDescription} changeHandler={changeHandler}/>
        <div className='form-submit-btn-container'>
          <button className="btn-base btn-form" onClick={this.props.submitHandler}>
            <img src={addEntryIcon} alt="Addition Sign"></img>
            <span>Add another Skill entry</span>
          </button>
        </div>
      </section>
    );
  };
}

export default SkillsSectionInput;