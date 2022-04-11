import { Form, FloatingLabel } from 'react-bootstrap';

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
    // <div className='form-entry'>
    //   <div className='form-control'>
    //     <label htmlFor='company-name'>Company Name:</label>
    //     <input 
    //       id='company-name' 
    //       type='text' 
    //       name='companyName' 
    //       value={companyName}
    //       onChange={changeHandler}>
    //     </input>
    //   </div>
    //   <div className='form-control'>
    //     <label htmlFor='position-title'>Position Title:</label>
    //     <input 
    //       id='position-title' 
    //       type='text' 
    //       name='positionTitle'
    //       value={positionTitle}
    //       onChange={changeHandler}>
    //     </input>
    //   </div>
    //   <div className='form-control'>
    //     <label htmlFor='position-tasks'>Position Tasks:</label>
    //     <textarea 
    //       id='position-tasks' 
    //       type='text' 
    //       name='positionTasks'
    //       value={positionTasks}
    //       onChange={changeHandler}>
    //     </textarea>
    //   </div>
    //   <div className='form-control'>
    //     <label htmlFor='from-date'>From Date:</label>
    //     <input 
    //       id='from-date' 
    //       type='date' 
    //       name='fromDate' 
    //       value={fromDate}
    //       onChange={changeHandler}>
    //     </input>
    //   </div>
    //   <div className='form-control'>
    //     <label htmlFor='to-date'>To Date:</label>
    //     <input 
    //       id='to-date' 
    //       type='date' 
    //       name='toDate' 
    //       value={toDate}
    //       onChange={changeHandler}>
    //     </input> 
    //   </div>
    // </div>
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
    </div>
  );
}

export default ProfessionalExpEntryInput;
