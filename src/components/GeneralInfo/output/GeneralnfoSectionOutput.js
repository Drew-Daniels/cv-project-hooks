import { Component } from 'react';

class GeneralInfoSectionOutput extends Component {
  constructor(prop) {
    super();
  }

  render() {

    return (
      <section className='preview-section'>
        <div className='full-name-container-preview'>
          <span id='first-name-preview'>FirstName</span>
          <span id='last-name-preview'>LastName</span>
        </div>
        <div className='phone-number-container-preview'>
          <span id='phone-number-preview'>+1-xxx-xxx-xxxx</span>
        </div>
        <div className='email-container-preview'>
          <span id='email-preview'>email@emailprovider.com</span>
        </div>
        <div className='linked-in-container-preview'>
          <span id='linkedin-url-preview'>https://www.linkedin.com/in/firstname-lastname</span>
        </div>
      </section>
    );
  }
}

export default GeneralInfoSectionOutput;