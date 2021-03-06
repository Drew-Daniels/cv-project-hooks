import { Form, Row, Col, FloatingLabel } from 'react-bootstrap';

function ProfessionalExpEntryInput(props) {

  const {professionalExp, changeHandler} = props;
  const {
    companyName,
    positionTitle,
    positionTasks,
    fromDate,
    toDate,
  } = professionalExp;

  return (
    <div className='form-entry'>
      <FloatingLabel
        controlId='company-name'
        label='Company name'
        className='mb-3'
      >
        <Form.Control
          name='companyName'
          type='text' 
          placeholder='Type company name'
          value={companyName}
          onChange={changeHandler} 
          required 
        />
      </FloatingLabel>
      <FloatingLabel
        controlId='position-title'
        label='Position title'
        className='mb-3'
      >
        <Form.Control
          name='positionTitle'
          type='text'
          placeholder='Type position title'
          value={positionTitle}
          onChange={changeHandler} 
          required 
        />
      </FloatingLabel>
      <FloatingLabel
        controlId='position-tasks'
        label='Position tasks'
        className='mb-3'
      >
        <Form.Control 
          name='positionTasks'
          type='text'
          as='textarea'
          placeholder='Type position tasks'
          value={positionTasks}
          onChange={changeHandler}
          style={{ height: '100px' }}
          required />
      </FloatingLabel>
      <Row>
        <Col>
          <Form.Group className='mb-3'>
            <Form.Label>From Date</Form.Label>
            <Form.Control 
              id='from-date'
              type='date'
              name='fromDate'
              value={fromDate}
              onChange={changeHandler}
            ></Form.Control>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className='mb-3'>
            <Form.Label>To Date</Form.Label>
            <Form.Control 
              id='to-date'
              type='date'
              name='toDate'
              value={toDate}
              onChange={changeHandler}
            ></Form.Control>
          </Form.Group>
        </Col>
      </Row>


    </div>
  );
}

export default ProfessionalExpEntryInput;
