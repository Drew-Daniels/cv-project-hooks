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
      <section id='educational-section' className='form-section'>
        <h3 className='form-section-header'>Educational Experience</h3>
        <EducationalExpEntryInput 
          educationalExp = {educationalExp}
          changeHandler={changeHandler}
        />
        <div className='form-submit-btn-container'>
          <button className='btn-base btn-form' onClick ={submitHandler}>
            <img src={addEntryIcon} alt='Addition sign'></img>
            <span>Submit</span>
          </button>
        </div>
      </section>
    )
  }
}

export default EducationalExpSectionInput;


