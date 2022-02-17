import { Component } from 'react';
import addEntryIcon from '../../images/icons/add-entry-icon.svg';
import ProfessionalExpEntry from './ProfessionalExpEntry';

class ProfessionalExpSection extends Component {
  constructor(props) {
    super();
    
  };

  render() {
    return (
      <section className='form-section'>
        <ProfessionalExpEntry />
        <button className="btn-base">
          <img src={addEntryIcon} alt="Addition Sign"></img>
          <span>Add another Professional Experience Entry</span>
        </button>
      </section>
    )
  }
};

export default ProfessionalExpSection;
