import React, { Component} from 'react';
import { useState, useEfect } from 'react';
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

function App() {

  const [{
      firstName,
      lastName,
      phoneNumber,
      email,
      linkedInURL,
      educationalExps,
      schoolName,
      major,
      degreeType,
      gpa,
      graduationDate,
      educationalExpID,
      professionalExps,
      companyName,
      positionTitle,
      positionTasks,
      fromDate,
      toDate,
      professionalExpID,
      skillDescription,
      skillID,
      skills,
    }, setState] = useState({
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      linkedInURL: '',
      educationalExps: [],
      schoolName: '',
      major: '',
      degreeType: 'associates',
      gpa: 4.00,
      graduationDate: getHTMLFormattedDate(new Date()),
      educationalExpID: uniqid(),
      professionalExps: [],
      companyName: '',
      positionTitle: '',
      positionTasks: [],
      fromDate: getHTMLFormattedDate(new Date()),
      toDate: getHTMLFormattedDate(new Date()),
      professionalExpID: uniqid(),
      skillDescription: '',
      skillID: uniqid(),
      skills: [],
  });

  const educationalExp = {
    schoolName,
    major,
    degreeType,
    gpa,
    graduationDate,
    educationalExpID,
  };

  const professionalExp = {
    companyName,
    positionTitle,
    positionTasks,
    fromDate,
    toDate,
    professionalExpID,
  };

  const skill = {
    skillDescription,
    skillID,
  };

  function getHTMLFormattedDate(date) {
    return format(date, 'yyyy-MM-dd');
  }

  function handleSubmit(event) {
    event.preventDefault();
  }
  function getStateItemIndex(itemID, itemType) {
    let i;
    switch (itemType) {
      case 'educational':
        i = educationalExps.findIndex(educationalExp => educationalExp.educationalExpID === itemID);
        break;
      case 'professional':
        i = professionalExps.findIndex(professionalExp => professionalExp.professionalExpID === itemID);
        break;
      case 'skill':
        i = skills.findIndex(skill => skill.skillID === itemID);
        console.log(skills);
        console.log(i);
        break;
      default:
        console.log('Incorrect itemType provided');
    }
    return i;
  }
  function stateItemExists(itemID, itemType) {
    let result;
    switch (itemType) {
      case 'educational':
        result = !!educationalExps.find(educationalExp => educationalExp.educationalExpID === itemID);
        break;
      case 'professional':
        result = !!professionalExps.find(professionalExp => professionalExp.professionalExpID === itemID);
        break;
      case 'skill':
        result = !!skills.find(skill => skill.skillID === itemID);
        break;
      default:
        console.log('Incorrect itemType provided');
    }
    return result;
  }
  function handleChange(event) {
    const target = event.target
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    setState(prevState => ({...prevState, [name]: value}));

  };
  // Educational Exp callbacks
  function educationalExpExists(educationalExpID) {
    const result = stateItemExists(educationalExpID, 'educational');
    return result;
  }
  function updateEducationalExp(educationalExpID) {
    updateStateItem(educationalExpID, 'educational');
  }
  function handleEducationalExpEdit(event) {
    const educationalExpID = event.target.parentNode.parentNode.id;
    const educationalExp = educationalExps.find(
      educationalExp => educationalExp.educationalExpID === educationalExpID
    );
    // setSchoolName(educationalExp.schoolName);
    setState(prevState => (
      {...prevState, 
        schoolName: educationalExp.schoolName,
        major: educationalExp.major,
        degreeType: educationalExp.degreeType,
        gpa: educationalExp.gpa,
        graduationDate: educationalExp.graduationDate,
        educationalExpID: educationalExp.educationalExpID,
      }));
  };
  function handleEducationalExpDelete(event) {
    const id = event.target.parentNode.parentNode.id;
    deleteStateItem(id, 'educational');
  }
  function handleEducationalExpSubmit(event) {
    event.preventDefault();
    const educationalExp = {
      schoolName,
      major,
      degreeType,
      gpa,
      graduationDate,
      educationalExpID,
    }
    if (!(educationalExpExists(educationalExpID))) {
      setState(prevState => (
        {...prevState,
          educationalExps: educationalExps.concat(educationalExp),
        }
      ));
    } else {
      updateEducationalExp(educationalExpID);
    }
    restoreStateDefault('educational');
  };
  // Professional Exp callabacks
  function updateProfessionalExp(professionalExpID) {
    updateStateItem(professionalExpID, 'professional');
  }
  function professionalExpExists(professionalExpID) {
    const result = stateItemExists(professionalExpID, 'professional');
    return result;
  }
  function handleProfessionalExpEdit(event) {
    const expID = event.target.parentNode.parentNode.id;
    const exp = professionalExps.find(
      exp => exp.professionalExpID === expID
    );
    setState(prevState => (
      {...prevState, 
        companyName: exp.companyName,
        positionTitle: exp.positionTitle,
        positionTasks: exp.positionTasks,
        fromDate: exp.fromDate,
        toDate: exp.toDate,
        professionalExpID: exp.professionalExpID,
      }));
  }
  function handleProfessionalExpDelete(event) {
    const id = event.target.parentNode.parentNode.id;
    deleteStateItem(id, 'professional');
  }
  function handleProfessionalExpSubmit(event) {
    const professionalExp = {
      companyName,
      positionTitle,
      positionTasks,
      fromDate,
      toDate,
      professionalExpID,
    }
    if (!(professionalExpExists(professionalExpID))) {
      setState(prevState => (
        {...prevState,
          professionalExps: professionalExps.concat(professionalExp),
        }));
    } else {
      updateProfessionalExp(professionalExpID);
    }
    restoreStateDefault('professional');
  };
  // Skills callbacks
  function skillExists(skillID) {
    const result = stateItemExists(skillID, 'skill');
    return result;
  }
  /**
   * Sets the skillDescription displayed in the form equal to the one of the button clicked
   * @param {*} event 
   */
   function handleSkillEdit(event) {
    const skillID = event.target.parentNode.parentNode.parentNode.id;
    const skill = skills.find(skill => skill.skillID === skillID)
    setState(prevState => (
      {...prevState,
        skillDescription: skill.skillDescription
      }));
    setState(prevState => (
      {...prevState,
        skillID: skill.skillID
      }));
  }
  function handleSkillDelete(event) {
    const skillID = event.target.parentNode.parentNode.parentNode.id;
    deleteStateItem(skillID, 'skill');
  }
  /**
   * 
   * @param {string} itemID 
   * @param {string} itemType 
   */
  function deleteStateItem(itemID, itemType) {
    let stateItems, stateItemIndex;
    switch (itemType) {
      case 'educational':
        stateItems = [...educationalExps];
        stateItemIndex = getStateItemIndex(itemID, itemType);
        stateItems.splice(stateItemIndex, 1);
        setState(prevState => (
          {...prevState,
            educationalExps: stateItems
          }));
        break;
      case 'professional':
        stateItems = [...professionalExps];
        stateItemIndex = getStateItemIndex(itemID, itemType);
        stateItems.splice(stateItemIndex, 1);
        setState(prevState => (
          {...prevState,
            professionalExps: stateItems
          }));
        break;
      case 'skill':
        stateItems = [...skills];
        stateItemIndex = getStateItemIndex(itemID, itemType);
        stateItems.splice(stateItemIndex, 1);
        setState(prevState => (
          {...prevState,
            skills: stateItems
          }));
        break;
      default:
        console.log('Invalid itemType provided')
        break;
    }
  } 
  /**
   * 
   * @param {string} itemID 
   * @param {string} itemType 
   * 1. Create a copy of previous state array
   * 2. Update the item in the copied state array
   * 3. Overwrite old state array with new state array
   */
  function updateStateItem(itemID, itemType) {
    let i, stateItems, stateItem;
    switch (itemType) {
      case 'educational':
        i = getStateItemIndex(itemID, itemType);
        stateItems = [...educationalExps];
        stateItem = stateItems[i];
        stateItem.schoolName = schoolName;
        stateItem.major = major;
        stateItem.degreeType = degreeType;
        stateItem.gpa = gpa;
        stateItem.graduationDate = graduationDate;
        setState(prevState => (
          {...prevState,
            educationalExps: stateItems
          }));
        break;
      case 'professional':
        i = getStateItemIndex(itemID, itemType);
        stateItems = [...professionalExps];
        stateItem = stateItems[i];
        stateItem.companyName = companyName;
        stateItem.positionTitle = positionTitle;
        stateItem.positionTasks = positionTasks;
        stateItem.fromDate = fromDate;
        stateItem.toDate = toDate;
        setState(prevState => (
          {...prevState,
            professionalExps: stateItems
          }));
        break;
      case 'skill':
        i = getStateItemIndex(itemID, itemType);
        stateItems = [...skills];
        stateItem = stateItems[i];
        stateItem.skillDescription = skillDescription;
        setState(prevState => (
          {...prevState,
            skills: stateItems
          }));
        break;
      default:
        console.log('Incorrect item type provided');
    }
  }
  /**
   * Updates a skill in skills to what skill state is currently set to
   * @param {*} skillID
   */
  function updateSkill(skillID) {
    updateStateItem(skillID, 'skill');
  }
  /**
   * Resets all related state properties for the item type back to default
   * @param {string} type 'educational' || 'professional' || 'skill'
   */
  function restoreStateDefault(type) {
    switch (type) {
      case 'educational':
        setState(prevState => (
          {...prevState, 
            schoolName: '',
            major: '',
            degreeType: 'associates',
            gpa: 4.00,
            graduationDate: getHTMLFormattedDate(new Date()),
            educationalExpID: uniqid(),
          }));
        break;
      case 'professional':
        setState(prevState => (
          {...prevState,
            companyName: '',
            positionTitle: '',
            positionTasks: [],
            fromDate: getHTMLFormattedDate(new Date()),
            toDate: getHTMLFormattedDate(new Date()),
            professionalExpID: uniqid(),
          }));
        break;
      case 'skill':
        setState(prevState => (
          {...prevState,
            skillDescription: '',
            skillID: uniqid(),
          }
        ));
        break;
      default:
        console.log('An invalid "type" was provided')
        break;
    }
  }
  function handleSkillSubmit(event) {
    event.preventDefault();
    const skill = {
      skillDescription,
      skillID,
    }
    if (!(skillExists(skillID))) {
      setState(prevState => (
        {...prevState,
          skills: skills.concat(skill),
        }
      ));
    } else {
      updateSkill(skillID);
    }
    restoreStateDefault('skill');
  };

  function printPreview() {
    window.print();
  }

  return (
    <div className='content-container'>
      <div className='content'>
        <HeaderSection />
        <div className='ui'>
          <div className='form-and-preview-container'>
            <div className='form-container'>
              <div id='form' onSubmit={handleSubmit} noValidate>
                <GeneralInfoSectionInput 
                  changeHandler = {handleChange}
                />
                <EducationalExpSectionInput
                  educationalExp = {educationalExp}
                  changeHandler = {handleChange}
                  submitHandler = {handleEducationalExpSubmit}
                />
                <ProfessionalExpSectionInput 
                  professionalExp = {professionalExp}
                  changeHandler = {handleChange}
                  submitHandler = {handleProfessionalExpSubmit}
                />
                <SkillsSectionInput
                  skill = {skill}
                  changeHandler = {handleChange}
                  submitHandler = {handleSkillSubmit}
                />
            </div>
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
                  onEdit = {handleEducationalExpEdit}
                  onDelete = {handleEducationalExpDelete}
                />
                <ProfessionalExpSectionOutput 
                  professionalExps = {professionalExps}
                  onEdit = {handleProfessionalExpEdit}
                  onDelete = {handleProfessionalExpDelete}
                />
                <SkillsSectionOutput 
                  skills = {skills}
                  onEdit = {handleSkillEdit}
                  onDelete = {handleSkillDelete}
                />
              </div>
            </div>
          </div>
          <div className='form-submit-btn-container'>
            <button id='btn-print-preview' className='btn-base' onClick={printPreview}>
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

export default App;
