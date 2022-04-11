import ProfessionalExpEntryOutput from './ProfessionalExpEntryOutput';
import { ButtonGroup, Button } from 'react-bootstrap';
import { AiFillEdit as EditIcon } from 'react-icons/ai';
import { AiFillDelete as DeleteIcon } from 'react-icons/ai';

function ProfessionalExpSectionOutput(props) {

  const {professionalExps, onEdit, onDelete} = props;

  return (
    <section id='professional-preview-section' className='preview-section'>
      <h3 className='preview-section-header'>Business Experience</h3>
      <ul>
        {professionalExps.map((professionalExp) => {
          return <li key={professionalExp.professionalExpID} id={professionalExp.professionalExpID} className='professional-exp'>
                  <ProfessionalExpEntryOutput
                    companyName = {professionalExp.companyName}
                    positionTitle = {professionalExp.positionTitle}
                    positionTasks = {professionalExp.positionTasks}
                    fromDate = {professionalExp.fromDate}
                    toDate = {professionalExp.toDate}
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
      </ul>
    </section>
  );
};

export default ProfessionalExpSectionOutput;
