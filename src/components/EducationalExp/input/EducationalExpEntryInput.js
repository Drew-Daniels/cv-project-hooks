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
        <label htmlFor='from-year'>From Year:</label>
        <input id='from-year' type='number' min='1900' max='2099' step='1' defaultValue={2022}></input>
        <label htmlFor='to-year'>To Year:</label>
        <input id='to-year' type='number' min='1900' max='2099' step='1' defaultValue={2022}></input>
      </div>
    )
  }
}

export default EducationalExpEntryInput;