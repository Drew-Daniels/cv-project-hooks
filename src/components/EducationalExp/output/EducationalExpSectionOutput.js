import { Component } from 'react';
import EducationalExpEntryOutput from './EducationalExpEntryOutput';

class EducationalExpSectionOutput extends Component {
  constructor(props) {
    super()
  }
  render() {
    
    return (
      <section id='education-preview-section' className='preview-section'>
        <EducationalExpEntryOutput 
          // pass in state as props here
        />
      </section>
    )
  }
}

export default EducationalExpSectionOutput;