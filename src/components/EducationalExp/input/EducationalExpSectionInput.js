import addEntryIcon from '../../../images/icons/add-entry-icon.svg';
import EducationalExpEntryInput from './EducationalExpEntryInput';

function EducationalExpSectionInput(props) {
  const { 
    educationalExp,
    changeHandler, 
    submitHandler 
  } = props;

  return (
    <form id='educational-section' onSubmit={submitHandler} className='form'>
      <h3 className='form-header'>Educational Experience</h3>
      <EducationalExpEntryInput 
        educationalExp = {educationalExp}
        changeHandler={changeHandler}
      />
      <div className='form-submit-btn-container'>
        <button id='education-submit-btn' className='btn-base btn-form' onClick ={submitHandler}>
          <img src={addEntryIcon} alt='Addition sign'></img>
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
};

export default EducationalExpSectionInput;
