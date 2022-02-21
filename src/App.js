import React, { Component } from 'react';
import uniqid from 'uniqid';

import HeaderSection from './components/HeaderSection';
import FooterSection from './components/FooterSection';
// import form components
import CVForm from './components/CVForm';
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
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      linkedInURL: '',
      educationalExp: {
        schoolName: '',
        major: '',
        degreeType: '',
        gpa: 4.00,
        graduationDate: new Date(),
        id: uniqid(),
      },
      educationalExps: [],
      professionalExp: {
        companyName: '',
        positionTitle: '',
        positionTasks: [],
        fromDate: new Date(),
        toDate: new Date(),
        id: uniqid(),
      },
      professionalExps: [],
      skill: {
        skillDescription: '',
        id: uniqid(),
      },
      skills: [],
    };

    // bind functions
    this.handleGeneralInfoChange = this.handleGeneralInfoChange.bind(this);
    this.handleSkillChange = this.handleSkillChange.bind(this);
    this.handleSkillSubmit = this.handleSkillSubmit.bind(this);
    this.printPreview = this.printPreview.bind(this);
  };

  handleGeneralInfoChange(event) {
    const attr = event.target.name;
    const value = event.target.value;
    this.setState({
      [attr]: value
    });
  };

  handleSkillChange(event) {
    event.preventDefault();
    this.setState({
      skill: {
        skillDescription: event.target.value,
        id: uniqid(),
      }
    });
  };

  handleSkillSubmit(event) {
    event.preventDefault();
    this.setState({
      skills: this.state.skills.concat(this.state.skill),
      skill: {
        skillDescription: '',
        id: uniqid(),
      }
    });
  };

  printPreview() {
    window.print();
  }
  render() {
    const { 
      firstName,
      lastName,
      phoneNumber,
      email,
      linkedInURL, 
      educationalExps, 
      professionalExps, 
      skills 
    } = this.state;

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
                    changeHandler = {this.handleGeneralInfoChange}
                  />
                  {/* <h3 className='form-section-header'>Educational Experience</h3>
                  <EducationalExpSectionInput 

                  />
                  <h3 className='form-section-header'>Professional Experience</h3>
                  <ProfessionalExpSectionInput 

                  /> */}
                  <h3 className='form-section-header'>Skills</h3>
                  <SkillsSectionInput
                    changeHandler = {this.handleSkillChange}
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
                  <EducationalExpSectionOutput educationalExps = { educationalExps }/>
                  <ProfessionalExpSectionOutput professionalExps = { professionalExps }/>
                  <SkillsSectionOutput skills = { skills }/>
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
