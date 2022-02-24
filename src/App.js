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
      educationalExps: [],
      schoolName: '',
      major: '',
      degreeType: '',
      gpa: 4.00,
      graduationDate: this.getHTMLFormattedDate(new Date()),
      educationalExpID: uniqid(),
      // Professional Exp
      professionalExps: [],
      companyName: '',
      positionTitle: '',
      positionTasks: [],
      fromDate: this.getHTMLFormattedDate(new Date()),
      toDate: this.getHTMLFormattedDate(new Date()),
      professionalExpID: uniqid(),
      // Skills
      skillDescription: '',
      skillID: uniqid(),
      skills: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEducationalExpSubmit = this.handleEducationalExpSubmit.bind(this);
    this.handleProfessionalExpSubmit = this.handleProfessionalExpSubmit.bind(this);

    this.handleSkillEdit = this.handleSkillEdit.bind(this);
    this.handleSkillSubmit = this.handleSkillSubmit.bind(this);
    this.printPreview = this.printPreview.bind(this);
  };
  
  getHTMLFormattedDate(date) {
    return format(date, 'yyyy-MM-dd');
  }

  handleSubmit(event) {
    event.preventDefault();
  }
  handleChange(event) {
    const target = event.target
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value
    });
  };
  // Educational Exp callbacks
  handleEducationalExpSubmit(event) {
    event.preventDefault();
    const schoolName = this.state.schoolName;
    const major = this.state.major;
    const degreeType = this.state.degreeType;
    const gpa = this.state.gpa;
    const graduationDate = this.state.graduationDate;
    const educationalExpID = this.state.educationalExpID;
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
      graduationDate: this.getHTMLFormattedDate(new Date()),
      educationalExpID: uniqid(),
    });
  };
  // Professional Exp callabacks
  handleProfessionalExpSubmit(event) {
    const companyName = this.state.companyName;
    const positionTitle = this.state.positionTitle;
    const positionTasks = this.state.positionTasks;
    const fromDate = this.state.fromDate;
    const toDate = this.state.toDate;
    const professionalExpID = this.state.professionalExpID;
    const professionalExp = {
      companyName,
      positionTitle,
      positionTasks,
      fromDate,
      toDate,
      professionalExpID,
    }
    this.setState({
      // capture
      professionalExps: this.state.professionalExps.concat(professionalExp),
      // restore to default
      companyName: '',
      positionTitle: '',
      positionTasks: [],
      fromDate: this.getHTMLFormattedDate(new Date()),
      toDate: this.getHTMLFormattedDate(new Date()),
      professionalExpID: uniqid(),
    });
  };
  // Skills callbacks
  handleSkillEdit(event) {
    const skillID = event.target.id
    const skill = this.state.skills.find(skill => skill.skillID === skillID)
    this.setState({
      skillDescription: skill.skillDescription,
      skillID: skill.skillID,
      skills: this.state.skills.filter(function(sk) {
        return sk !== skill })
    })
  }
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
      educationalExpID,
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
      educationalExpID,
    }

    const professionalExp = {
      companyName,
      positionTitle,
      positionTasks,
      fromDate,
      toDate,
      professionalExpID,
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
                <form id='form' onSubmit={this.handleSubmit} noValidate>
                  <GeneralInfoSectionInput 
                    changeHandler = {this.handleChange}
                  />
                  <EducationalExpSectionInput
                    educationalExp = {educationalExp}
                    changeHandler = {this.handleChange}
                    submitHandler = {this.handleEducationalExpSubmit}
                  />
                  <ProfessionalExpSectionInput 
                    professionalExp = {professionalExp}
                    changeHandler = {this.handleChange}
                    submitHandler = {this.handleProfessionalExpSubmit}
                  />
                  <SkillsSectionInput
                    skill = {skill}
                    changeHandler = {this.handleChange}
                    submitHandler = {this.handleSkillSubmit}
                  />
              </form>
              </div>
              <div className='preview-container'>
                <div id='preview'>
                  <GeneralInfoSectionOutput 
                    firstName = {firstName}
                    lastName = {lastName}
                    phoneNumber = {phoneNumber}
                    email = {email}
                    linkedInURL = {linkedInURL}
                  />
                  <EducationalExpSectionOutput 
                    educationalExps = {educationalExps}
                  />
                  <ProfessionalExpSectionOutput 
                    professionalExps = {professionalExps}
                  />
                  <SkillsSectionOutput 
                    skills = {skills}
                    onEdit = {this.handleSkillEdit}
                  />
                </div>
              </div>
            </div>
            <div className='form-submit-btn-container'>
              <button id='btn-print-preview' className='btn-base' onClick={this.printPreview}>
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
