function SkillsEntryInput(props) {

    const {skill, changeHandler} = props;
    const {skillDescription} = skill;

  return (
    <div className='form-entry'>
    <div className='form-control'>
      <label htmlFor='skill-description'>Skill Description:</label>
      <input 
        id='skill-description' 
        type='text' 
        name='skillDescription' 
        value={skillDescription} 
        onChange={changeHandler}>
      </input>
    </div>
  </div>
  )
}

export default SkillsEntryInput;