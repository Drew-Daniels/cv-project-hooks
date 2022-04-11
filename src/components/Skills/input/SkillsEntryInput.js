import { Form, FloatingLabel } from 'react-bootstrap';

function SkillsEntryInput(props) {

    const {skill, changeHandler} = props;
    const {skillDescription} = skill;

  return (
    <FloatingLabel
      controlId='skill-description'
      label='Skill'
      className='mb-3'
    >
      <Form.Control 
        name='skillDescription'
        type='text' 
        placeholder='Type skill description'
        value={skillDescription}
        onChange={changeHandler}
        />
    </FloatingLabel>
  )
}

export default SkillsEntryInput;