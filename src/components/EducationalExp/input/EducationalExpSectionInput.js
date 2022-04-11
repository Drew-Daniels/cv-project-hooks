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
