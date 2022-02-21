import { Component } from 'react';

class ProfessionalExpEntryOutput extends Component {
  constructor(props) {
    super();

  };

  render() {
    return (
      <div className='preview-entry'>
        <div className='company-name-container-preview'>
          <span id='company-name-preview'>{this.props.companyName}</span>
        </div>
        <div className='position-title-container-preview'>
          <span id='position-title-preview'>{this.props.positionTitle}</span>
        </div>
        <div className='position-tasks-container-preview'>
          <span id='position-tasks-preview'>{this.props.positionTasks}</span>
        </div>
        <div className='from-date-container-preview'>
          <span id='from-date-preview'>{this.props.fromDate}</span>
        </div>
        <div className='to-date-container-preview'>
          <span id='to-date-preview'>{this.props.toDate}</span>
        </div>
      </div>
    )
  }
};

export default ProfessionalExpEntryOutput;