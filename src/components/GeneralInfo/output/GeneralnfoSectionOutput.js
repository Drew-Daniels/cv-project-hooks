import { Component } from 'react';

class GeneralInfoSectionOutput extends Component {
  constructor(prop) {
    super();
  }

  render() {

    return (
      <section className='preview-section'>
        <div className='full-name-container-preview'>
          <span className='first-name-preview'>Drew</span>
          <span className='last-name-preview'>Daniels</span>
        </div>
        <div className='phone-number-container-preview'>
          <span class='phone-number-preview'>+1-xxx-xxx-xxxx</span>
        </div>
        <div className='email-container-preview'>
          <span className='email-preview'>fakeemail@fakedomain.com</span>
        </div>
      </section>
    );
  }
}

export default GeneralInfoSectionOutput;