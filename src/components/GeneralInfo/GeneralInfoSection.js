import { Component } from 'react';

class GeneralInfoSection extends Component {
  constructor(prop) {
    super();
  }

  render() {

    return (
      <section className='form-section'>
        <label htmlFor="first-name">First Name:</label>
        <input id="first-name" type="text"></input>
        <label htmlFor="last-name">Last Name:</label>
        <input id="last-name" type="text"></input>
        <label htmlFor="email">Email:</label>
        <input id="email" type="text"></input>
        <label htmlFor="last-name">Phone Number:</label>
        <input id="last-name" type="text"></input>
        <label htmlFor="linkedin-url">LinkedIn URL:</label>
        <input id="linkedin-url" type="text"></input>
      </section>
    );
  }
}

export default GeneralInfoSection;