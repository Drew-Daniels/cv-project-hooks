import { Component } from 'react';

import GeneralInfoSectionInput from './GeneralInfo/input/GeneralInfoSectionInput';
import EducationalExpSectionInput from './EducationalExp/input/EducationalExpSectionInput';
import ProfessionalExpSectionInput from './ProfessionalExp/input/ProfessionalExpSectionInput';
import SkillsSectionInput from './Skills/input/SkillsSectionInput';

class CVForm extends Component {
  constructor(props) {
    super();

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      linkedInURL: '',
      educationalExperiences: [],
      professionalExperiences: [],
      skills: [],
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    // set state
    this.setState({
      [name]: value
    })

    // update previews
    document.querySelector('#' + target.id + '-preview').textContent = value;
    console.log('here');
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form id='form' onSubmit={this.handleSubmit}>
        <h3 className='form-section-header'>General</h3>
        <GeneralInfoSectionInput 
          changeHandler={this.handleChange}
        />
        <h3 className='form-section-header'>Educational Experience</h3>
        <EducationalExpSectionInput 

        />
        <h3 className='form-section-header'>Professional Experience</h3>
        <ProfessionalExpSectionInput 

        />
        <h3 className='form-section-header'>Skills</h3>
        <SkillsSectionInput 

        />
      </form>
    )
  };
};

export default CVForm;
