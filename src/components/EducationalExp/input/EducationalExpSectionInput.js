import { Component } from 'react';
import addEntryIcon from '../../../images/icons/add-entry-icon.svg';
import EducationalExpEntryInput from './EducationalExpEntryInput';

class EducationalExpSectionInput extends Component {
  constructor(props) {
    super()
  }

  render() {
    return (
      <section className='form-section'>
        <EducationalExpEntryInput changeHandler={this.props.changeHandler}/>
        <div className='form-submit-btn-container'>
          <button className='btn-base btn-form' onClick ={this.props.submitHandler}>
            <img src={addEntryIcon} alt='Addition sign'></img>
            <span>Add another Education Experience Entry</span>
          </button>
        </div>
      </section>
    )
  }
}

export default EducationalExpSectionInput;


