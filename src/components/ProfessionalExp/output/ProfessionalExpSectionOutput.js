import { Component } from 'react';
import ProfessionalExpEntryOutput from './ProfessionalExpEntryOutput';

class ProfessionalExpSectionOutput extends Component {
  constructor(props) {
    super();
  };

  render() {
    const {professionalExps, onEdit, onDelete} = this.props;
    return (
      <section id='professional-preview-section' className='preview-section'>
        <h3 className='preview-section-header'>Business Experience</h3>
        <ul>
          {professionalExps.map((professionalExp) => {
            return <li key={professionalExp.professionalExpID} id= {professionalExp.professionalExpID} className='professional-exp'>
                    <ProfessionalExpEntryOutput
                      companyName = {professionalExp.companyName}
                      positionTitle = {professionalExp.positionTitle}
                      positionTasks = {professionalExp.positionTasks}
                      fromDate = {professionalExp.fromDate}
                      toDate = {professionalExp.toDate}
                    />
                    <div className='btn-container'>
                      <button type='button' className='btn-base btn-preview btn-show-on-hover' onClick={onEdit}>Edit</button>
                      <button type='button' className='btn-base btn-preview btn-show-on-hover' onClick={onDelete}>Delete</button>  
                    </div>
                   </li>
          })}
        </ul>
      </section>
    )
  }
};

export default ProfessionalExpSectionOutput;
