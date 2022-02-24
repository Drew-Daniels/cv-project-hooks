import { Component } from 'react';
import EducationalExpEntryOutput from './EducationalExpEntryOutput';

class EducationalExpSectionOutput extends Component {
  constructor(props) {
    super()
  }
  render() {
    const {educationalExps, onEdit} = this.props;

    return (
      <section id='education-preview-section' className='preview-section'>
        <h3 className='preview-section-header'>Educational Experience</h3>
        <ul>
          {educationalExps.map((educationalExp) => {
            return <li key={educationalExp.educationalExpID} id={educationalExp.educationalExpID} className='educational-exp' onClick={onEdit}>
                    <EducationalExpEntryOutput 
                      schoolName={educationalExp.schoolName}
                      major={educationalExp.major}
                      degreeType={educationalExp.degreeType}
                      gpa={educationalExp.gpa}
                      graduationDate={educationalExp.graduationDate}
                    />
                    <button className='btn-base btn-preview btn-show-on-hover' onClick={onEdit}>Edit</button>
                   </li>
          })}
        </ul>
      </section>
    )
  }
}

export default EducationalExpSectionOutput;