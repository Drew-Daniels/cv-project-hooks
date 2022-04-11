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
    // <form id='skills-section' className='form'>
    //   <h3 className='form-header'>Skills</h3>
    //   <SkillsEntryInput 
    //     skill={skill}
    //     changeHandler={changeHandler}
    //   />
    //   <div className='form-submit-btn-container'>
    //     <button className="btn-base btn-form" onClick={submitHandler}>
    //       <img src={addEntryIcon} alt="Addition Sign"></img>
    //       <span>Submit</span>
    //     </button>
    //   </div>
    // </form>
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