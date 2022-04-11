import { Form, Row, Col, FloatingLabel } from 'react-bootstrap';

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
        <Row className='d-flex align-items-end'>
          <Col>
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
          </Col>
          <Col>
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
          </Col>
        </Row>


      </div>
  );
};

export default EducationalExpEntryInput;