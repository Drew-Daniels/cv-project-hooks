import { format , parse } from 'date-fns';

function ProfessionalExpEntryOutput(props) {

  const {
    companyName,
    positionTitle,
    positionTasks,
    fromDate,
    toDate,
  } = props;

  function parseHTMLDateToProfessionalDate(dateStr) {
    const date = parse(dateStr, 'yyyy-MM-dd', new Date());
    const today = new Date()
    today.setHours(0, 0, 0, 0);
    if (date.toString() === today.toString()) {
      return 'Present'
    } else {
      return format(date, 'MMMM yyyy');
    };
  }

  return (
    <div className='preview-entry'>
      <div className='company-name-and-dates-preview-container'>
        <div className='company-name-container-preview'>
          <span className='company-name-preview'>{companyName}</span>
        </div>
        <div className='dates-container'>
          <div className='from-date-container-preview'>
            <span className='from-date-preview'>{parseHTMLDateToProfessionalDate(fromDate)}</span>
          </div>
          <span className='date-separator'>-</span>
          <div className='to-date-container-preview'>
            <span className='to-date-preview'>{parseHTMLDateToProfessionalDate(toDate)}</span>
          </div>
        </div>
      </div>
      <div className='position-title-container-preview'>
        <span className='position-title-preview'>{positionTitle}</span>
      </div>
      <div className='position-tasks-container-preview'>
        <p className='position-tasks-preview'>{positionTasks}</p>
      </div>
    </div>
  );
}

export default ProfessionalExpEntryOutput;