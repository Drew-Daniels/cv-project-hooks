import React, { Component } from 'react';
import uniqid from 'uniqid';
import { format, isThisMonth } from 'date-fns';

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

    this.getStateItemIndex = this.getStateItemIndex.bind(this);
    this.stateItemExists = this.stateItemExists.bind(this);
    this.updateStateItem = this.updateStateItem.bind(this);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
    this.handleEducationalExpEdit = this.handleEducationalExpEdit.bind(this);
    this.handleEducationalExpSubmit = this.handleEducationalExpSubmit.bind(this);

    this.handleProfessionalExpEdit = this.handleProfessionalExpEdit.bind(this);
    this.handleProfessionalExpSubmit = this.handleProfessionalExpSubmit.bind(this);

    this.getSkillIndex = this.getSkillIndex.bind(this);
    this.skillExists = this.skillExists.bind(this);
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
  getStateItemIndex(itemID, itemType) {
    let i;
    switch (itemType) {
      case 'educational':
        i = this.state.educationalExps.findIndex(educationalExp => educationalExp.skillID === itemID);
        break;
      case 'professional':
        i = this.state.professionalExps.findIndex(professionalExp => professionalExp.skillID === itemID);
        break;
      case 'skill':
        i = this.state.skills.findIndex(skill => skill.skillID === itemID);
        break;
      default:
        console.log('Incorrect itemType provided');
    }
    return i;
  }
  stateItemExists(itemID, itemType) {
    let result;
    switch (itemType) {
      case 'educational':
        const educationalExps = this.state.educationalExps;
        result = !!educationalExps.find(educationalExp => educationalExp.educationalExpID === itemID);
        break;
      case 'professional':
        const professionalExps = this.state.professionalExps;
        result = !!professionalExps.find(professionalExp => professionalExp.professionalExpID === itemID);
        break;
      case 'skill':
        const skills = this.state.skills;
        result = !!skills.find(skill => skill.skillID === itemID);
        break;
      default:
        console.log('Incorrect itemType provided');
    }
    return result;
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
  educationalExpExists(educationalExpID) {
    const result = this.stateItemExists(educationalExpID, 'educational');
    return result;
  }
  getEducationalExpIndex(educationalExpID) {
    const i = this.getStateItemIndex(educationalExpID, 'educational');
    return i;
  }
  updateEducationalExp(educationalExpID) {
    this.updateStateItem(educationalExpID, 'educational');
  }
  handleEducationalExpEdit(event) {

  }
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
    if (!(this.educationalExpExists(educationalExpID))) {
      this.setState({
        educationalExps: this.state.educationalExps.concat(educationalExp),
      })
    } else {

    }
    this.setState({
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
  updateProfessionalExp(professionalExpID) {
    this.updateStateItem(professionalExpID, 'professional');
  }
  professionalExpExists(professionalExpID) {
    const result = this.stateItemExists(professionalExpID, 'professional');
    return result;
  }
  getProfessionalExpIndex(professionalExpID) {
    const i = this.getStateItemIndex(professionalExpID, 'professional');
    return i;
  }
  handleProfessionalExpEdit(event) {

  }
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
    // capture
    if (!(this.professionalExpExists(professionalExpID))) {
      this.setState({
        professionalExps: this.state.professionalExps.concat(professionalExp),
      })
    } else {
      
    }
    this.setState({
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
  getSkillIndex(skillID) {
    const i = this.getStateItemIndex(skillID, 'skill');
    return i;
  }
  skillExists(skillID) {
    const result = this.stateItemExists(skillID, 'skill');
    return result;
  }
  handleSkillEdit(event) {
    const skillID = event.target.parentNode.id
    const skill = this.state.skills.find(skill => skill.skillID === skillID)
    this.setState({
      skillDescription: skill.skillDescription,
      skillID: skill.skillID,
    })
  }
  /**
   * 
   * @param {*} itemID 
   * @param {*} itemType 
   * 1. Create a copy of previous state array
   * 2. Update the item in the copied state array
   * 3. Overwrite old state array with new state array
   */
  updateStateItem(itemID, itemType) {
    let i, stateItems, stateItem;
    switch (itemType) {
      case 'educational':
        const {
          schoolName,
          major,
          degreeType,
          gpa,
          graduationDate,
        } = this.state;
        i = this.getStateItemIndex(itemID, itemType);
        stateItems = [...this.state.educationalExps];
        stateItem = stateItems[i];
        stateItem.schoolName = schoolName;
        stateItem.major = major;
        stateItem.degreeType = degreeType;
        stateItem.gpa = gpa;
        stateItem.graduationDate = graduationDate;
        this.setState({educationalExps: stateItems})
        break;
      case 'professional':
        const {
          companyName,
          positionTitle,
          positionTasks,
          fromDate,
          toDate,
        } = this.state;
        i = this.getStateItemIndex(itemID, itemType);
        stateItems = [...this.state.professionalExps];
        stateItem = stateItems[i];
        stateItem.companyName = companyName;
        stateItem.positionTitle = positionTitle;
        stateItem.positionTasks = positionTasks;
        stateItem.fromDate = fromDate;
        stateItem.toDate = toDate;
        this.setState({professionalExps: stateItems})
        break;
      case 'skill':
        const {skillDescription} = this.state;
        i = this.getStateItemIndex(itemID, itemType);
        stateItems = [...this.state.skills];
        stateItem = stateItems[i];
        stateItem.skillDescription = skillDescription;
        this.setState({skills: stateItems})
        break;
      default:
        console.log('Incorrect item type provided');
    }
  }
  /**
   * Updates a skill in skills to what skill state is currently set to
   * @param {*} skillID
   */
  updateSkill(skillID) {
    this.updateStateItem(skillID, 'skill');
  }
  handleSkillSubmit(event) {
    event.preventDefault();
    const skillDescription = this.state.skillDescription;
    const skillID = this.state.skillID;
    const skill = {
      skillDescription,
      skillID,
    }
    if (!(this.skillExists(skillID))) {
      // skill DOES NOT exist - add to state
      this.setState({
        skills: this.state.skills.concat(skill),
      });
    } else {
      this.updateSkill(skillID);
    }
    this.setState({
      // restore to default
      skillDescription: '',
      skillID: uniqid(),
    })
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
                    onEdit = {this.handleEducationalExpEdit}
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
