import { Component } from 'react';
import addEntryIcon from '../../../images/icons/add-entry-icon.svg';
import ProfessionalExpEntryInput from './ProfessionalExpEntryInput';

class ProfessionalExpSectionInput extends Component {
  constructor(props) {
    super();
    
  };

  render() {
    return (
      <section className='form-section'>
        <ProfessionalExpEntryInput />
        <button className="btn-base">
          <img src={addEntryIcon} alt="Addition Sign"></img>
          <span>Add another Professional Experience Entry</span>
        </button>
      </section>
    )
  }
};

export default ProfessionalExpSectionInput;
