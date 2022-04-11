import { Form, FloatingLabel } from 'react-bootstrap';

function EducationalExpEntryInput(props) {

  const {educationalExp, changeHandler} = props;
  const {
    schoolName,
    major,
    degreeType,
    gpa,
    graduationDate,
  } = educationalExp;

  return (
    // <div className='form-entry'>
    //   <div className='form-control'>
    //     <label htmlFor='school-name'>School Name:</label>
    //     <input 
    //       id='school-name' 
    //       type='text' 
    //       name='schoolName'
    //       required
    //       value={schoolName}
    //       onChange={changeHandler}>
    //     </input>
    //   </div>
    //   <div className='form-control'>
    //     <label htmlFor='major'>Major:</label>
    //     <input 
    //       id='major' 
    //       name='major'
    //       required
    //       value={major}
    //       onChange={changeHandler}>
    //     </input>
    //   </div>
    //   <div className='form-control'>
    //     <p className='degree-type-header'>Degree Type:</p>
    //     <div className='degree-types-container'>
    //       <div>
    //         <input 
    //           id='degree-type-1' 
    //           type='radio' 
    //           name='degreeType' 
    //           required
    //           value='associates' 
    //           checked={degreeType === 'associates'}
    //           onChange={changeHandler}>
    //         </input>
    //         <label htmlFor='degree-type-1'>Associates</label>
    //       </div>
    //       <div>
    //         <input 
    //           id='degree-type-2' 
    //           type='radio' 
    //           name='degreeType' 
    //           required
    //           value='bachelors'
    //           checked={degreeType === 'bachelors'}
    //           onChange={changeHandler}>
    //         </input>
    //         <label htmlFor='degree-type-2'>Bachelors</label>
    //       </div>
    //       <div>
    //         <input 
    //           id='degree-type-3' 
    //           type='radio' 
    //           name='degreeType' 
    //           required
    //           value='masters' 
    //           checked={degreeType === 'masters'}
    //           onChange={changeHandler}>
    //         </input>
    //         <label htmlFor='degree-type-3'>Masters</label>
    //       </div>
    //       <div>
    //         <input 
    //           id='degree-type-4' 
    //           type='radio' 
    //           name='degreeType' 
    //           required
    //           value='doctorate' 
    //           checked={degreeType === 'doctorate'}
    //           onChange={changeHandler}>    
    //         </input>
    //         <label htmlFor='degree-type-4'>Doctoral</label>
    //       </div>
    //     </div>
    //   </div>
    //   <div className='form-control'>
    //     <label htmlFor='gpa'>GPA:</label>
    //     <input 
    //       id='gpa' 
    //       type='number' 
    //       step='0.01' 
    //       min='0'
    //       max='4' 
    //       name='gpa' 
    //       required
    //       value={gpa} 
    //       onChange={changeHandler}>
    //     </input>
    //   </div>
    //   <div className='form-control'>
    //     <label htmlFor='graduation-date'>Graduation Date:</label>
    //     <input 
    //       id='graduation-date' 
    //       type='date' 
    //       name='graduationDate'
    //       required
    //       value={graduationDate}
    //       onChange={changeHandler}>
    //     </input>
    //   </div>
    // </div>
      <div className='form-entry'>
        <FloatingLabel
          controlId='school-name'
          label='School name'
          className='mb-3'
        >
          <Form.Control
            name='schoolName'
            type='text' 
            placeholder='Type school name' 
            value={schoolName}
            onChange={changeHandler} 
            required 
          />
        </FloatingLabel>
        <FloatingLabel
          controlId='major'
          label='Major'
          className='mb-3'
        >
          <Form.Control 
            name='major'
            type='text' 
            placeholder='Type major' 
            value={major}
            onChange={changeHandler} 
            required 
          />
        </FloatingLabel>
        <Form.Group className='mb-3'>
          <Form.Label>Degree</Form.Label>
          {['associates', 'bachelors', 'masters', 'doctoral'].map((thisDegree, i) => {
            return (
              <Form.Check key={i}
                id={'degree-type-' + i}
                name='degreeType'
                type='radio'
                label={thisDegree[0].toUpperCase() + thisDegree.slice(1)}
                value={thisDegree}
                onChange={changeHandler}
                checked={degreeType === thisDegree}
                required
              />
            )
          })}
        </Form.Group>
        <FloatingLabel
          controlId='gpa'
          label='GPA'
          className='mb-3'
        >
          <Form.Control
            name='gpa'
            type='number'
            placeholder='4' 
            value={gpa}
            onChange={changeHandler} 
            required 
            min='0' 
            max='4' 
            step='0.01'
          />
        </FloatingLabel>
        <Form.Group className='mb-3'>
          <Form.Label>Graduation Date</Form.Label>
          <Form.Control 
            id='graduation-date'
            type='date'
            name='graduationDate'
            value={graduationDate}
            onChange={changeHandler}
          ></Form.Control>
        </Form.Group>
      </div>
  );
};

export default EducationalExpEntryInput;