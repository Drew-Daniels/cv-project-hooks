import { Component } from 'react';

class EducationalExpEntryInput extends Component {
  constructor(props) {
    super()
  }

  render() {
    const {educationalExp, changeHandler} = this.props;

    const {
      schoolName,
      major,
      degreeType,
      gpa,
      graduationDate,
    } = educationalExp;

    return (
      <div className='form-entry'>
        <div className='form-control'>
          <label htmlFor='school-name'>School Name:</label>
          <input 
            id='school-name' 
            type='text' 
            name='schoolName'
            required
            value={schoolName}
            onChange={changeHandler}>
          </input>
        </div>
        <div className='form-control'>
          <label htmlFor='major'>Major:</label>
          <input 
            id='major' 
            name='major'
            required
            value={major}
            onChange={changeHandler}>
          </input>
        </div>
        <div className='form-control'>
          <p className='degree-type-header'>Degree Type:</p>
          <div className='degree-types-container'>
            <div>
              <input 
                id='degree-type-1' 
                type='radio' 
                name='degreeType' 
                required
                value='associates' 
                checked={degreeType === 'associates'}
                onChange={changeHandler}>
              </input>
              <label htmlFor='degree-type-1'>Associates</label>
            </div>
            <div>
              <input 
                id='degree-type-2' 
                type='radio' 
                name='degreeType' 
                required
                value='bachelors'
                checked={degreeType === 'bachelors'}
                onChange={changeHandler}>
              </input>
              <label htmlFor='degree-type-2'>Bachelors</label>
            </div>
            <div>
              <input 
                id='degree-type-3' 
                type='radio' 
                name='degreeType' 
                required
                value='masters' 
                checked={degreeType === 'masters'}
                onChange={changeHandler}>
              </input>
              <label htmlFor='degree-type-3'>Masters</label>
            </div>
            <div>
              <input 
                id='degree-type-4' 
                type='radio' 
                name='degreeType' 
                required
                value='doctorate' 
                checked={degreeType === 'doctorate'}
                onChange={changeHandler}>    
              </input>
              <label htmlFor='degree-type-4'>Doctoral</label>
            </div>
          </div>
        </div>
        <div className='form-control'>
          <label htmlFor='gpa'>GPA:</label>
          <input 
            id='gpa' 
            type='number' 
            step='0.01' 
            min='0'
            max='4' 
            name='gpa' 
            required
            value={gpa} 
            onChange={changeHandler}>
          </input>
        </div>
        <div className='form-control'>
          <label htmlFor='graduation-date'>Graduation Date:</label>
          <input 
            id='graduation-date' 
            type='date' 
            name='graduationDate'
            required
            value={graduationDate}
            onChange={changeHandler}>
          </input>
        </div>
      </div>
    )
  }
}

export default EducationalExpEntryInput;