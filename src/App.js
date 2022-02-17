import React, { Component } from 'react';
import HeaderSection from './components/HeaderSection';
import GeneralInfoSection from './components/GeneralInfo/GeneralInfoSection';
import EducationalExpSection from './components/EducationalExp/EducationalExpSection';
import ProfessionalExpSection from './components/ProfessionalExp/ProfessionalExpSection';
import FooterSection from './components/FooterSection';
import SkillsSection from './components/Skills/SkillsSection';

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
          <form>
            <GeneralInfoSection />
            <EducationalExpSection />
            <ProfessionalExpSection />
            <SkillsSection />
            <div className='form-submit-btn-container'>
            <button className='btn-base'>
              <span>Submit</span>
            </button>
            </div>
          </form>
        </div>
        <FooterSection />
      </div>
    )
  }
}

export default App;
