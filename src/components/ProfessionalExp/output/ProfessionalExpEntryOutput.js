import { Component } from 'react';

class ProfessionalExpEntryOutput extends Component {
  constructor(props) {
    super();

  };

  render() {
    const {
      companyName,
      positionTitle,
      positionTasks,
      fromDate,
      toDate,
    } = this.props;

    return (
      <div className='preview-entry'>
        <div className='company-name-container-preview'>
          <span id='company-name-preview'>{companyName}</span>
        </div>
        <div className='position-title-container-preview'>
          <span id='position-title-preview'>{positionTitle}</span>
        </div>
        <div className='position-tasks-container-preview'>
          <p id='position-tasks-preview'>{positionTasks}</p>
        </div>
        <div className='from-date-container-preview'>
          <span id='from-date-preview'>{fromDate}</span>
        </div>
        <div className='to-date-container-preview'>
          <span id='to-date-preview'>{toDate}</span>
        </div>
      </div>
    )
  }
};

export default ProfessionalExpEntryOutput;