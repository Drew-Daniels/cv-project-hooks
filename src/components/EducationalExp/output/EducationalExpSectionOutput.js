import EducationalExpEntryOutput from './EducationalExpEntryOutput';

function EducationalExpSectionOutput(props) {

  const {educationalExps, onEdit, onDelete} = props;

  return (
    <section id='education-preview-section' className='preview-section'>
      <h3 className='preview-section-header'>Educational Experience</h3>
      <ul>
        {educationalExps.map((educationalExp) => {
          return <li key={educationalExp.educationalExpID} id={educationalExp.educationalExpID} className='educational-exp'>
                  <EducationalExpEntryOutput 
                    schoolName={educationalExp.schoolName}
                    major={educationalExp.major}
                    degreeType={educationalExp.degreeType}
                    gpa={educationalExp.gpa}
                    graduationDate={educationalExp.graduationDate}
                  />
                  <div className='btn-container'>
                    <button type='button' className='btn-base btn-preview btn-show-on-hover btn-edit' onClick={onEdit}>Edit</button>
                    <button type='button' className='btn-base btn-preview btn-show-on-hover btn-delete' onClick={onDelete}>Delete</button>
                  </div>
                  </li>
        })}
      </ul>
    </section>
  );
};

export default EducationalExpSectionOutput;