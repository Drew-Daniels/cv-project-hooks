import { RiAddFill as SubmitIcon } from 'react-icons/ri';
import EducationalExpEntryInput from './EducationalExpEntryInput';

import { Card, Form, Button } from 'react-bootstrap';

function EducationalExpSectionInput(props) {
  const { 
    educationalExp,
    changeHandler, 
    submitHandler 
  } = props;

  return (
    // <form id='educational-section' onSubmit={submitHandler} className='form'>
    //   <h3 className='form-header'>Educational Experience</h3>
      // <EducationalExpEntryInput 
      //   educationalExp = {educationalExp}
      //   changeHandler={changeHandler}
      // />
    //   <div className='form-submit-btn-container'>
    //     <button id='education-submit-btn' className='btn-base btn-form' onClick ={submitHandler}>
    //       <img src={addEntryIcon} alt='Addition sign'></img>
    //       <span>Submit</span>
    //     </button>
    //   </div>
    // </form>
    <Card>
      <Card.Header as='h2'>Educational Experience</Card.Header>
      <Card.Body>
        <Form onSubmit={submitHandler} className='form'>
          <EducationalExpEntryInput 
            educationalExp = {educationalExp}
            changeHandler={changeHandler}
          />
          <Button onClick={submitHandler}>
            <SubmitIcon />
            <span>Submit</span>
          </Button>
        </Form>
      </Card.Body>
    </Card>

  );
};

export default EducationalExpSectionInput;
