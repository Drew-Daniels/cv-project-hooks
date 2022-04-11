import SkillsEntryInput from './SkillsEntryInput';

import { Card, Form, Button } from 'react-bootstrap';
import { RiAddFill as SubmitIcon } from 'react-icons/ri';

function SkillsSectionInput(props) {
  const {
    skill, 
    changeHandler, 
    submitHandler
  } = props;

  return (
    <Card>
      <Card.Header as='h2'>Skills</Card.Header>
      <Card.Body>
        <Form className='form'>
          <SkillsEntryInput 
            skill={skill}
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

export default SkillsSectionInput;