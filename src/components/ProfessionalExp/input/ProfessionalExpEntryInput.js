import { Component } from 'react';

class ProfessionalExpEntryInput extends Component {
  constructor(props) {
    super();
    
  };

  render() {
    return (
      <div className='form-entry'>
        <div className='form-control'>
          <label htmlFor='company-name'>Company Name:</label>
          <input id='company-name' type='text'></input>
        </div>
        <div className='form-control'>
          <label htmlFor='position-title'>Position Title:</label>
          <input id='position-title' type='text'></input>
        </div>
        <div className='form-control'>
          {/* Position Tasks here as a list than can be added to */}
          <label htmlFor='from-date'>From Date:</label>
          <input id='from-date' type='date'></input>
        </div>
        <div className='form-control'>
          <label htmlFor='to-date'>To Date:</label>
          <input id='to-date' type='date'></input> 
        </div>
      </div>
    )
  }
};

export default ProfessionalExpEntryInput;
