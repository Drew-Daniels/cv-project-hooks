import { Component } from 'react';
import ProfessionalExpEntryOutput from './ProfessionalExpEntryOutput';

class ProfessionalExpSectionOutput extends Component {
  constructor(props) {
    super();
  };

  render() {
    const {professionalExps} = this.props;
    return (
      <section id='professional-preview-section' className='preview-section'>
        <h3 className='preview-section-header'>Business Experience</h3>
        <ul>
          {professionalExps.map((professionalExp) => {
            return <li key={professionalExp.professionalExpID} className='professional-exp'>
                    <ProfessionalExpEntryOutput
                      companyName = {professionalExp.companyName}
                      positionTitle = {professionalExp.positionTitle}
                      positionTasks = {professionalExp.positionTasks}
                      fromDate = {professionalExp.fromDate}
                      toDate = {professionalExp.toDate}
                    />
                   </li>
          })}
        </ul>
      </section>
    )
  }
};

export default ProfessionalExpSectionOutput;
