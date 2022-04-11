import { Container, ButtonGroup, Button } from 'react-bootstrap';

function SkillsSectionOutput(props) {

  const {skills, onEdit, onDelete} = props;

  return (
    <section id='skills-preview-section' className='preview-section'>
      <h3 className='preview-section-header'>Skills</h3>
      <ul className='skills-list'>
        {skills.map((skill) => {
          return <li key={skill.skillID} id={skill.skillID} className='skill-entry'>
                  <Container className='skill'>
                    <span>{skill.skillDescription}</span>
                    <ButtonGroup className='btn-container'>
                      <Button size='sm' type='button' className='btn-base btn-preview btn-show-on-hover' onClick={onEdit}>Edit</Button>
                      <Button size='sm' type='button' className='btn-base btn-preview btn-show-on-hover' onClick={onDelete}>Delete</Button>
                    </ButtonGroup>
                  </Container>
                  </li>;
        })}
      </ul>
    </section>
  );
}

export default SkillsSectionOutput;