import React, { Component } from 'react';

import HeaderSection from './components/HeaderSection';
import FooterSection from './components/FooterSection';
// import form components
import CVForm from './components/CVForm';

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

    this.printPreview = this.printPreview.bind(this);
  };

  printPreview() {

    // let myWindow = window.open('', 'PRINT', 'height=650,width=900,top=100,left=150');
    // myWindow.document.write(`<html><head>`);

    // // add in styling
    // const baseCSSPath = './styles/';

    // const resetCSSPath = baseCSSPath + 'Reset.css';
    // const appcSSPath = baseCSSPath + 'App.css';
    // const generalInfoCSSPath = baseCSSPath + 'GeneralInfo.css';
    // const educationalExpCSSPath = baseCSSPath + 'EducationalExp.css';
    // const professionalExpCSSPath = baseCSSPath + 'ProfessionalExp.css';

    // myWindow.document.write(`<link rel='stylesheet' href='${resetCSSPath}'/>`);
    // myWindow.document.write(`<link rel='stylesheet' href='${appcSSPath}'/>`);
    // myWindow.document.write(`<link rel='stylesheet' href='${generalInfoCSSPath}'/>`);
    // myWindow.document.write(`<link rel='stylesheet' href='${educationalExpCSSPath}'/>`);
    // myWindow.document.write(`<link rel='stylesheet' href='${professionalExpCSSPath}'/>`);
    
    // myWindow.document.write('</head>');
    // // add title
    // myWindow.document.title = 'CV';
    // // write content
    // myWindow.document.write('<body >')
    // myWindow.document.write(document.getElementById('preview').innerHTML);
    // myWindow.document.write('</body></html>');

    // myWindow.document.close();
    // myWindow.focus();

    // myWindow.print();
    // myWindow.close();

    // return true;

    window.print();
  }
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
                <CVForm/>
              </div>
              <div className='preview-container'>
                <div className='header-container'>
                  <h2>Preview</h2>
                </div>
                <div id='preview'>
                  <GeneralInfoSectionOutput />
                  <EducationalExpSectionOutput />
                  <ProfessionalExpSectionOutput />
                  <SkillsSectionOutput />
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
