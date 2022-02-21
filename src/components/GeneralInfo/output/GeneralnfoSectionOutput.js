import { Component } from 'react';

class GeneralInfoSectionOutput extends Component {
  constructor(props) {
    super();
  }

  render() {
    const {firstName, lastName, phoneNumber, email, linkedInURL} = this.props;
    return (
      <section id='general-preview-section' className='preview-section'>
        <div className='full-name-container-preview'>
          <span id='first-name-preview'>{firstName}</span>
          <span id='last-name-preview'>{lastName}</span>
        </div>
        <div className='phone-number-container-preview'>
          <span id='phone-number-preview'>{phoneNumber}</span>
        </div>
        <div className='email-container-preview'>
          <span id='email-preview'>{email}</span>
        </div>
        <div className='linked-in-container-preview'>
          <span id='linkedin-url-preview'>{linkedInURL}</span>
        </div>
      </section>
    );
  }
}

export default GeneralInfoSectionOutput;