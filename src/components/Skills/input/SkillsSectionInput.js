import addEntryIcon from '../../../images/icons/add-entry-icon.svg';
import SkillsEntryInput from './SkillsEntryInput';

function SkillsSectionInput(props) {
  const {
    skill, 
    changeHandler, 
    submitHandler
  } = props;

  return (
    <form id='skills-section' className='form'>
      <h3 className='form-header'>Skills</h3>
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
    </form>
  );
}

export default SkillsSectionInput;