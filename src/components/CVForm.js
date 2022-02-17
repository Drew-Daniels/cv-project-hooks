import { Component } from 'react';
import EducationalExpEntryInput from './EducationalExp/input/EducationalExpEntryInput';
import ProfessionalExpEntryInput from './ProfessionalExp/input/ProfessionalExpEntryInput';
import addEntryIcon from '../images/icons/add-entry-icon.svg';

class CVForm extends Component {
  constructor(props) {
    super();

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      linkedInURL: '',
      educationalExperiences: [],
      professionalExperiences: [],
      skills: [],
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    // set state
    this.setState({
      [name]: value
    })

    // update previews
    document.querySelector('#' + target.id + '-preview').textContent = value;
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form className='form' onSubmit={this.handleSubmit}>
        <section className='form-section'>
          <h3>General</h3>
          <label htmlFor='first-name'>First Name:</label>
          <input id='first-name' name='firstName' type='text' onChange={this.handleChange}/>

          <label htmlFor='last-name'>Last Name:</label>
          <input id='last-name' name='lastName' type='text' onChange={this.handleChange}/>

          <label htmlFor='phone-number'>Phone Number:</label>
          <input id='phone-number' name='phoneNumber' type='tel' onChange={this.handleChange}/>

          <label htmlFor='email'>Email:</label>
          <input id='email' name='email' type='text' onChange={this.handleChange}/>

          <label htmlFor='linkedin-url'>LinkedIn URL:</label>
          <input id='linkedin-url' name='linkedInURL' type='text' onChange={this.handleChange}/>
        </section>
        <section className='form-section'>
        <h3>Educational Experience</h3>
          <EducationalExpEntryInput />
          <button className='btn-base'>
            <img src={addEntryIcon} alt='Addition sign'></img>
            <span>Add another Education Experience Entry</span>
          </button>
        </section>        
        <section className='form-section'>
          <h3>Professional Experience</h3>
          <ProfessionalExpEntryInput />
          <button className="btn-base">
            <img src={addEntryIcon} alt="Addition Sign"></img>
            <span>Add another Professional Experience Entry</span>
          </button>
        </section>
      </form>
    )
  };
};

export default CVForm;
