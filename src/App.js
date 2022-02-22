import React, { Component } from 'react';
import uniqid from 'uniqid';
import { format } from 'date-fns';

import HeaderSection from './components/HeaderSection';
import FooterSection from './components/FooterSection';
// import form components
import GeneralInfoSectionInput from './components/GeneralInfo/input/GeneralInfoSectionInput';
import EducationalExpSectionInput from './components/EducationalExp/input/EducationalExpSectionInput';
import ProfessionalExpSectionInput from './components/ProfessionalExp/input/ProfessionalExpSectionInput';
import SkillsSectionInput from './components/Skills/input/SkillsSectionInput';

// import preview components
import GeneralInfoSectionOutput from './components/GeneralInfo/output/GeneralnfoSectionOutput';
import EducationalExpSectionOutput from './components/EducationalExp/output/EducationalExpSectionOutput';
import ProfessionalExpSectionOutput from './components/ProfessionalExp/output/ProfessionalExpSectionOutput';
import SkillsSectionOutput from './components/Skills/output/SkillsSectionOutput';

// import styling
import './styles/Reset.css';
import './styles/App.css';
import './styles/EducationalExp.css';
import './styles/GeneralInfo.css';
import './styles/ProfessionalExp.css';

// import images
import formSubmitIcon from './images/icons/form-submit-icon.svg';

class App extends Component {
  constructor(props) {
    super();

    this.state = {
      // General Info
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      linkedInURL: '',
      // Educational Exp
      // educationalExp: {
      //   schoolName: '',
      //   major: '',
      //   degreeType: '',
      //   gpa: 4.00,
      //   graduationDate: this.getFormattedDate(new Date()),
      //   id: uniqid(),
      // },
      educationalExps: [],
      schoolName: '',
      major: '',
      degreeType: '',
      gpa: 4.00,
      graduationDate: this.getFormattedDate(new Date()),
      educationExpID: uniqid(),

      // Professional Exp      
      // professionalExp: {
      //   companyName: '',
      //   positionTitle: '',
      //   positionTasks: [],
      //   fromDate: this.getFormattedDate(new Date()),
      //   toDate: this.getFormattedDate(new Date()),
      //   id: uniqid(),
      // },
      professionalExps: [],
      companyName: '',
      positionTitle: '',
      positionTasks: [],
      fromDate: this.getFormattedDate(new Date()),
      toDate: this.getFormattedDate(new Date()),
      professionalExpID: uniqid(),
      // Skills
      // skill: {
      //   skillDescription: '',
      //   id: uniqid(),
      // },
      skillDescription: '',
      skillID: uniqid(),
      skills: [],
    };

    // BIND methods
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // General callbacks
    this.handleGeneralInfoChange = this.handleGeneralInfoChange.bind(this);
    // Educational Exp callbacks
    this.handleEducationalExpChange = this.handleEducationalExpChange.bind(this);
    this.handleEducationalExpSubmit = this.handleEducationalExpSubmit.bind(this);
    // Professional Exp callbacks

    // Skill callbacks
    this.handleSkillChange = this.handleSkillChange.bind(this);
    this.handleSkillSubmit = this.handleSkillSubmit.bind(this);
    // Print preview
    this.printPreview = this.printPreview.bind(this);
  };
  
  getFormattedDate(date) {
    return format(date, 'yyyy-MM-dd');
  }

  handleSubmit(event) {
    event.preventDefault();
    const target = event.target;
    if (target.type === 'input') {

    }
  }
  handleChange(event) {
    const target = event.target
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value
    });
  };
  // General Info callbacks
  handleGeneralInfoChange(event) {
    const attr = event.target.name;
    const value = event.target.value;
    this.setState({
      [attr]: value
    });
  };
  // Educational Exp callbacks
  handleEducationalExpChange(event) {
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      educationalExp: {
        [name]: value,
        id: this.state.educationalExp.id,
      }
    });
  };
  handleEducationalExpSubmit(event) {
    event.preventDefault();
    const schoolName = this.state.schoolName;
    const major = this.state.major;
    const degreeType = this.state.degreeType;
    const gpa = this.state.gpa;
    const graduationDate = this.state.graduationDate;
    const educationalExpID = this.state.educationExpID;
    const educationalExp = {
      schoolName,
      major,
      degreeType,
      gpa,
      graduationDate,
      educationalExpID,
    }
    this.setState({
      // capture
      educationalExps: this.state.educationalExps.concat(educationalExp),
      // restore to default
      schoolName: '',
      major: '',
      degreeType: '',
      gpa: 4.00,
      graduationDate: this.getFormattedDate(new Date()),
      educationalExpID: uniqid(),
    });
  };
  // Professional Exp callabacks

  // Skills callbacks
  handleSkillChange(event) {
    event.preventDefault();
    this.setState({
      skillDescription: event.target.value,
      id: this.state.skillID,
    });
  };
  handleSkillSubmit(event) {
    event.preventDefault();
    const skillDescription = this.state.skillDescription;
    const skillID = this.state.skillID;
    const skill = {
      skillDescription,
      skillID,
    }
    this.setState({
      // capture
      skills: this.state.skills.concat(skill),
      // restore to default
      skillDescription: '',
      skillID: uniqid(),
    });
  };

  printPreview() {
    window.print();
  }
  render() {
    const {
      // General info 
      firstName,
      lastName,
      phoneNumber,
      email,
      linkedInURL,
      // Educational Exp
      schoolName,
      major,
      degreeType,
      gpa,
      graduationDate,
      educationExpID,
      // educationalExp,
      educationalExps,
      // Professional Exp
      companyName,
      positionTitle,
      positionTasks,
      fromDate,
      toDate,
      professionalExpID,
      // professionalExp,
      professionalExps,
      // Skills
      skillDescription,
      skillID,
      skills
    } = this.state;

    const educationalExp = {
      schoolName,
      major,
      degreeType,
      gpa,
      graduationDate,
      educationExpID,
    }

    const professionalExp = {

    }

    const skill = {
      skillDescription,
      skillID,
    }

    return (
      <div className='content-container'>
        <div className='content'>
          <HeaderSection />
          <div className='ui'>
            <div className='form-and-preview-container'>
              <div className='form-container'>
                <div className='header-container'>
                  <h2>Entries</h2>
                </div>
                <form id='form' onSubmit={this.handleSubmit}>
                  <h3 className='form-section-header'>General</h3>
                  <GeneralInfoSectionInput 
                    changeHandler = {this.handleChange}
                  />
                  <h3 className='form-section-header'>Educational Experience</h3>
                  <EducationalExpSectionInput
                    educationalExp = {educationalExp}
                    changeHandler = {this.handleChange}
                    submitHandler = {this.handleEducationalExpSubmit}
                  />
                  {/* <h3 className='form-section-header'>Professional Experience</h3>
                  <ProfessionalExpSectionInput 

                  /> */}
                  <h3 className='form-section-header'>Skills</h3>
                  <SkillsSectionInput
                    skill = {skill}
                    changeHandler = {this.handleChange}
                    submitHandler = {this.handleSkillSubmit}
                  />
              </form>
              </div>
              <div className='preview-container'>
                <div className='header-container'>
                  <h2>Preview</h2>
                </div>
                <div id='preview'>
                  <GeneralInfoSectionOutput 
                    firstName = {firstName}
                    lastName = {lastName}
                    phoneNumber = {phoneNumber}
                    email = {email}
                    linkedInURL = {linkedInURL}
                  />
                  <EducationalExpSectionOutput educationalExps = {educationalExps}/>
                  <ProfessionalExpSectionOutput professionalExps = {professionalExps}/>
                  <SkillsSectionOutput skills = {skills}/>
                </div>
              </div>
            </div>
            <div className='form-submit-btn-container'>
              <button className='btn-base' onClick={this.printPreview}>
                <img src={formSubmitIcon} alt='printer'></img>
                <span>Print</span>
              </button>
            </div>
          </div>
        </div>
        <FooterSection />
      </div>
    )
  }
}

export default App;
