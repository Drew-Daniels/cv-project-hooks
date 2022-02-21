import { Component } from 'react';

class EducationalExpEntryOutput extends Component {
  constructor(props) {
    super()
  }
  render() {
    const {
      schoolName,
      major,
      degreeType,
      gpa,
      graduationDate,
    } = this.props;

    return (
      <div className='preview-entry'>
        <h3 className='preview-section-header'>Education</h3>
        <div className='education-line'>
          <span id='school-name-preview'>{schoolName}</span>
          <span id='graduation-date-preview'>{graduationDate}</span>
        </div>
        <div className='education-line'>
          <div>
            <span id='degree-type-preview'>{degreeType}</span>
            <span>, </span>
            <span id='major-preview'>{major}</span>
          </div>
          <div>
            <span>GPA: </span>
            <span id='gpa-preview'>{gpa}</span>
          </div>
        </div>
      </div>
    )
  }
}

export default EducationalExpEntryOutput;