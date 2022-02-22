import { Component } from 'react';

class ProfessionalExpEntryInput extends Component {
  constructor(props) {
    super();
  };

  render() {
    const {professionalExp, changeHandler} = this.props;
    const {
      companyName,
      positionTitle,
      positionTasks,
      fromDate,
      toDate,
    } = professionalExp;
    return (
      <div className='form-entry'>
        <div className='form-control'>
          <label htmlFor='company-name'>Company Name:</label>
          <input 
            id='company-name' 
            type='text' 
            name='companyName' 
            value={companyName}
            onChange={changeHandler}>
          </input>
        </div>
        <div className='form-control'>
          <label htmlFor='position-title'>Position Title:</label>
          <input 
            id='position-title' 
            type='text' 
            name='positionTitle'
            value={positionTitle}
            onChange={changeHandler}>
          </input>
        </div>
        <div className='form-control'>
          <label htmlFor='position-tasks'>Position Tasks:</label>
          <textarea 
            id='position-tasks' 
            type='text' 
            name='positionTasks'
            value={positionTasks}
            onChange={changeHandler}>
          </textarea>
        </div>
        <div className='form-control'>
          <label htmlFor='from-date'>From Date:</label>
          <input 
            id='from-date' 
            type='date' 
            name='fromDate' 
            value={fromDate}
            onChange={changeHandler}>
          </input>
        </div>
        <div className='form-control'>
          <label htmlFor='to-date'>To Date:</label>
          <input 
            id='to-date' 
            type='date' 
            name='toDate' 
            value={toDate}
            onChange={changeHandler}>
          </input> 
        </div>
      </div>
    )
  }
};

export default ProfessionalExpEntryInput;
