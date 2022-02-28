import { Component } from 'react';
import addEntryIcon from '../../../images/icons/add-entry-icon.svg';
import ProfessionalExpEntryInput from './ProfessionalExpEntryInput';

class ProfessionalExpSectionInput extends Component {
  constructor(props) {
    super();
  }

  render() {
    const {
      professionalExp,
      changeHandler,
      submitHandler,
    } = this.props;
    return (
      <form id='professional-section' className='form'>
        <h3 className='form-header'>Professional Experience</h3>
        <ProfessionalExpEntryInput 
          professionalExp = {professionalExp}
          changeHandler={changeHandler}
        />
        <div className='form-submit-btn-container'>
          <button className="btn-base btn-form" onClick={submitHandler}>
            <img src={addEntryIcon} alt="Addition Sign"></img>
            <span>Submit</span>
          </button>
        </div>
      </form>
    )
  }
};

export default ProfessionalExpSectionInput;
