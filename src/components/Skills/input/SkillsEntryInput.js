import { Form, FloatingLabel } from 'react-bootstrap';

function SkillsEntryInput(props) {

    const {skill, changeHandler} = props;
    const {skillDescription} = skill;

  return (
    // <div className='form-entry'>
    //   <div className='form-control'>
    //     <label htmlFor='skill-description'>Skill Description:</label>
    //     <input 
    //       id='skill-description' 
    //       type='text' 
    //       name='skillDescription' 
    //       value={skillDescription} 
    //       onChange={changeHandler}>
    //     </input>
    //   </div>
    // </div>
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