import { Component } from 'react';
import { format, parse } from 'date-fns';

class EducationalExpEntryOutput extends Component {
  constructor(props) {
    super()
  }
  parseHTMLDateToEducationalDate(dateStr) {
    const date = parse(dateStr, 'yyyy-MM-dd', new Date());
    if (date.getDate() === new Date().getDate()) {
      return 'Present'
    } else {
      return format(date, 'MMMM yyyy');
    };
  }

  render() {
    const {
      schoolName,
      major,
      degreeType,
      gpa,
      graduationDate,
    } = this.props;

    return (
      <div className='preview-entry'>
        <div className='education-line'>
          <span className='school-name-preview'>{schoolName}</span>
          <span className='graduation-date-preview'>{this.parseHTMLDateToEducationalDate(graduationDate)}</span>
        </div>
        <div className='education-line'>
          <div>
            <span className='degree-type-preview'>{degreeType.charAt(0).toUpperCase() + degreeType.slice(1)}</span>
            <span>, </span>
            <span className='major-preview'>{major}</span>
          </div>
          <div>
            <span className='gpa-label'>GPA:</span>
            <span className='gpa-preview'>{gpa}</span>
          </div>
        </div>
      </div>
    )
  }
}

export default EducationalExpEntryOutput;