import { Component } from 'react';

class GeneralInfoSectionInput extends Component {
  constructor(prop) {
    super();

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      linkedInURL: '',
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })
  }

  render() {

    return (
      <section className='form-section'>
        <label htmlFor='first-name'>First Name:</label>
        <input id='first-name' name='firstName' type='text' onChange={this.handleChange}/>

        <label htmlFor='last-name'>Last Name:</label>
        <input id='last-name' name='lastName' type='text' onChange={this.handleChange}/>

        <label htmlFor='email'>Email:</label>
        <input id='email' name='email' type='text' onChange={this.handleChange}/>

        <label htmlFor='phone-number'>Phone Number:</label>
        <input id='phone-number' name='phoneNumber' type='tel' onChange={this.handleChange}/>

        <label htmlFor='linkedin-url'>LinkedIn URL:</label>
        <input id='linkedin-url' name='linkedInURL' type='text' onChange={this.handleChange}/>
      </section>
    );
  }
}

export default GeneralInfoSectionInput;