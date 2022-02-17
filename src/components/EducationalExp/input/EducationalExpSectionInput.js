import { Component } from 'react';
import EducationalExpEntryInput from './EducationalExpEntryInput';
import addEntryIcon from '../../../images/icons/add-entry-icon.svg';

class EducationalExpSectionInput extends Component {
  constructor(props) {
    super()
  }
  render() {

    return (
      <section className='form-section'>
        <EducationalExpEntryInput />
        <button className='btn-base'>
          <img src={addEntryIcon} alt='Addition sign'></img>
          <span>Add another Education Experience Entry</span>
        </button>
      </section>
    )
  }
}

export default EducationalExpSectionInput;