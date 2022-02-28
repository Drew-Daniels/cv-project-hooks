  import { Component } from 'react';
import addEntryIcon from '../../../images/icons/add-entry-icon.svg';
import EducationalExpEntryInput from './EducationalExpEntryInput';

class EducationalExpSectionInput extends Component {
  constructor(props) {
    super()
  }
  render() {
    const { 
      educationalExp,
      changeHandler, 
      submitHandler 
    } = this.props;
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
    )
  }
}

export default EducationalExpSectionInput;


