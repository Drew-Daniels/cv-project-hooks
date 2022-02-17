import React, { Component } from 'react';
import HeaderSection from './components/HeaderSection';
// import form input components
import GeneralInfoSectionInput from './components/GeneralInfo/input/GeneralInfoSectionInput';
import EducationalExpSectionInput from './components/EducationalExp/input/EducationalExpSectionInput';
import ProfessionalExpSectionInput from './components/ProfessionalExp/input/ProfessionalExpSectionInput';
import SkillsSectionInput from './components/Skills/input/SkillsSectionInput';
// import preview components
import GeneralInfoSectionOutput from './components/GeneralInfo/output/GeneralnfoSectionOutput';
import EducationalExpSectionOutput from './components/EducationalExp/output/EducationalExpSectionOutput';
import ProfessionalExpSectionOutput from './components/ProfessionalExp/output/ProfessionalExpSectionOutput';
import SkillsSectionOutput from './components/Skills/output/SkillsSectionOutput';

import FooterSection from './components/FooterSection';


import './styles/App.css';
import './styles/EducationalExp.css';
import './styles/GeneralInfo.css';
import './styles/ProfessionalExp.css';
import './styles/Reset.css';

class App extends Component {
  constructor(props) {
    super();
  };

  render() {
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
                <form className='form'>
                  <GeneralInfoSectionInput />
                  <EducationalExpSectionInput />
                  <ProfessionalExpSectionInput />
                  <SkillsSectionInput />
                </form>
              </div>
              <div className='preview-container'>
                <div className='header-container'>
                  <h2>Preview</h2>
                </div>
                <div className='preview'>
                  <GeneralInfoSectionOutput />
                  <EducationalExpSectionOutput />
                  <ProfessionalExpSectionOutput />
                  <SkillsSectionOutput />
                </div>
              </div>
            </div>
            <div className='form-submit-btn-container'>
              <button className='btn-base'>
                <span>Submit</span>
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
