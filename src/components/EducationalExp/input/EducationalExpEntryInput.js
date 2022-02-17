import { Component } from 'react';

class EducationalExpEntryInput extends Component {
  constructor(props) {
    super()
  }
  render() {

    return (
      <div className='form-entry'>
        <label htmlFor='school-name'>School Name:</label>
        <input id='school-name' type='text'></input>
        <label htmlFor='major'>Major:</label>
        <input id='major'></input>
        <div>
          <p className='degree-type-header'>Degree Type:</p>
          <div className='degree-types-container'>
            <div>
              <input id='degree-type-1' type='radio' name='degree-type' value='associates'></input>
              <label htmlFor='degree-type-1'>Associates</label>
            </div>
            <div>
              <input id='degree-type-2' type='radio' name='degree-type' value='bachelors'></input>
              <label htmlFor='degree-type-2'>Bachelors</label>
            </div>
            <div>
              <input id='degree-type-3' type='radio' name='degree-type' value='masters'></input>
              <label htmlFor='degree-type-3'>Masters</label>
            </div>
            <div>
              <input id='degree-type-4' type='radio' name='degree-type' value='doctorate'></input>
              <label htmlFor='degree-type-4'>Doctoral</label>
            </div>
          </div>
        </div>
        <label htmlFor='gpa'>GPA:</label>
        <input id='gpa' type='number' step='0.01' min='0'></input>
        <label htmlFor='graduation-date'>Graduation Date:</label>
        <input id='graduation-date' type='date'></input>
      </div>
    )
  }
}

export default EducationalExpEntryInput;