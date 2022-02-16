import React, { Component } from 'react';
import HeaderSection from './components/HeaderSection';
import GeneralInfoSection from './components/GeneralInfo/GeneralInfoSection';
import EducationalExpSection from './components/EducationalExp/EducationalExpSection';
import ProfessionalExpSection from './components/ProfessionalExp/ProfessionalExpSection';
import FooterSection from './components/FooterSection';

class App extends Component {
  constructor(props) {
    super();
  };

  render() {
    return (
      <section>
        <HeaderSection />
        <form>
          <GeneralInfoSection />
          <EducationalExpSection />
          <ProfessionalExpSection />
          {/* Submit button section here */}
        </form>
        <FooterSection />
      </section>
    )
  }
}

export default App;
