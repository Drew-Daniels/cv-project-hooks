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
          <div className='form-control'>
            <label htmlFor='first-name'>First Name:</label>
            <input id='first-name' name='firstName' type='text' onChange={this.handleChange}/>
          </div>
          <div className='form-control'>
            <label htmlFor='last-name'>Last Name:</label>
            <input id='last-name' name='lastName' type='text' onChange={this.handleChange}/>
          </div>
          <div className='form-control'>
          <label htmlFor='phone-number'>Phone Number:</label>
          <input id='phone-number' name='phoneNumber' type='tel' onChange={this.handleChange}/>
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email:</label>
            <input id='email' name='email' type='text' onChange={this.handleChange}/>
          </div>
          <div className='form-control'>
            <label htmlFor='linkedin-url'>LinkedIn URL:</label>
            <input id='linkedin-url' name='linkedInURL' type='text' onChange={this.handleChange}/>
          </div>
        </section>
        <section className='form-section'>
        <h3>Educational Experience</h3>
          <EducationalExpEntryInput />
          <div className='form-submit-btn-container'>
            <button className='btn-base btn-form'>
              <img src={addEntryIcon} alt='Addition sign'></img>
              <span>Add another Education Experience Entry</span>
            </button>
          </div>
        </section>        
        <section className='form-section'>
          <h3>Professional Experience</h3>
          <ProfessionalExpEntryInput />
          <div className='form-submit-btn-container'>
            <button className="btn-base btn-form">
              <img src={addEntryIcon} alt="Addition Sign"></img>
              <span>Add another Professional Experience Entry</span>
            </button>
          </div>
        </section>
      </form>
    )
  };
};

export default CVForm;
