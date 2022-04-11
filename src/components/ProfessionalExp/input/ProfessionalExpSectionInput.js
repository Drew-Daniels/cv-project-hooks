import { RiAddFill as SubmitIcon } from 'react-icons/ri';
import ProfessionalExpEntryInput from './ProfessionalExpEntryInput';

import { Card, Form, Button } from 'react-bootstrap';

function ProfessionalExpSectionInput(props) {
  const {
    professionalExp,
    changeHandler,
    submitHandler,
  } = props;
  
  return (
    <Card id='professional-experiences'>
      <Card.Header as='h2'>Professional Experience</Card.Header>
      <Card.Body>
        <Form className='form'>
          <ProfessionalExpEntryInput
            professionalExp = {professionalExp}
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
}

export default ProfessionalExpSectionInput;
