import { Container, ButtonGroup, Button } from 'react-bootstrap';

import { AiFillEdit as EditIcon } from 'react-icons/ai';
import { AiFillDelete as DeleteIcon } from 'react-icons/ai';

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
                    <Button size='sm' type='button' className='btn-base btn-preview btn-show-on-hover btn-edit' onClick={onEdit}>
                      <EditIcon />
                      <span>Edit</span>
                    </Button>
                    <Button size='sm' type='button' className='btn-base btn-preview btn-show-on-hover btn-delete' onClick={onDelete}>
                      <DeleteIcon />
                      <span>Delete</span>
                    </Button>
                  </ButtonGroup>
                  </Container>
                  </li>;
        })}
      </ul>
    </section>
  );
}

export default SkillsSectionOutput;