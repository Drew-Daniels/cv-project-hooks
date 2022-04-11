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
    // <form id='professional-section' className='form'>
    //   <h3 className='form-header'>Professional Experience</h3>
    //   <ProfessionalExpEntryInput 
    //     professionalExp = {professionalExp}
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
