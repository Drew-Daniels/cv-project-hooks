import EducationalExpEntryOutput from './EducationalExpEntryOutput';
import { Container, ButtonGroup, Button } from 'react-bootstrap';
import { AiFillEdit as EditIcon } from 'react-icons/ai';
import { AiFillDelete as DeleteIcon } from 'react-icons/ai';

function EducationalExpSectionOutput(props) {

  const {educationalExps, onEdit, onDelete} = props;

  return (
    <section id='education-preview-section' className='preview-section'>
      <h3 className='preview-section-header'>Educational Experience</h3>
      <Container as='ul'>
        {educationalExps.map((educationalExp) => {
          return <li key={educationalExp.educationalExpID} id={educationalExp.educationalExpID} className='educational-exp'>
                  <EducationalExpEntryOutput 
                    schoolName={educationalExp.schoolName}
                    major={educationalExp.major}
                    degreeType={educationalExp.degreeType}
                    gpa={educationalExp.gpa}
                    graduationDate={educationalExp.graduationDate}
                  />
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
                  </li>
        })}
      </Container>
    </section>
  );
};

export default EducationalExpSectionOutput;