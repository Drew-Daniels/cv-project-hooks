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
                    <Button size='sm' type='button' className= 'd-flex justify-content-center' onClick={onEdit} style={{ backgroundColor: '#FF6E40', borderColor: 'white'}} >
                      <EditIcon />
                    </Button>
                    <Button size='sm' type='button' className='d-flex justify-content-center' onClick={onDelete} style={{ backgroundColor: '#FF6E40', borderColor: 'white'}} >
                      <DeleteIcon />
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