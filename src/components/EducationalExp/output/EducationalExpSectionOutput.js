import { Component } from 'react';
import EducationalExpEntryOutput from './EducationalExpEntryOutput';

class EducationalExpSectionOutput extends Component {
  constructor(props) {
    super()
  }
  render() {

    return (
      <section className='preview-section'>
        <h3 className='preview-section-header'>Education</h3>
        <div className='education-line'>
          <span id='school-name-preview'>University Name</span>
          <span id='graduation-date-preview'>December 2022</span>
        </div>
        <div className='education-line'>
          <div>
            <span id='degree-type-preview'>Bachelors</span>
            <span>, </span>
            <span id='major-preview'>Major Name</span>
          </div>
          <div>
            <span>GPA: </span>
            <span id='gpa-preview'>4.00</span>
          </div>
        </div>
      </section>
    )
  }
}

export default EducationalExpSectionOutput;