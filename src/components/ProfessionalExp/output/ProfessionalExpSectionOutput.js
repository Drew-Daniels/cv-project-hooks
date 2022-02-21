import { Component } from 'react';
import ProfessionalExpEntryOutput from './ProfessionalExpEntryOutput';

class ProfessionalExpSectionOutput extends Component {
  constructor(props) {
    super();
    
  };

  render() {
    return (
      <section id='professional-preview-section' className='preview-section'>
        <h3 className='preview-section-header'>Business Experience</h3>
        <ProfessionalExpEntryOutput 
          // Pass state from form to output
        />
      </section>
    )
  }
};

export default ProfessionalExpSectionOutput;
