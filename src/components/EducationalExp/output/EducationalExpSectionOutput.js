import { Component } from 'react';
import EducationalExpEntryOutput from './EducationalExpEntryOutput';

class EducationalExpSectionOutput extends Component {
  constructor(props) {
    super()
  }
  render() {
    const {educationalExps} = this.props;
    return (
      <section id='education-preview-section' className='preview-section'>
        <h3 className='preview-section-header'>Educational Experience</h3>
        <ul>
          {educationalExps.map((educationalExp) => {
            return (
              <li key={educationalExp.id}>
                <EducationalExpEntryOutput educationExp = {educationalExp}/>
              </li>
            )
          })}
        </ul>
      </section>
    )
  }
}

export default EducationalExpSectionOutput;