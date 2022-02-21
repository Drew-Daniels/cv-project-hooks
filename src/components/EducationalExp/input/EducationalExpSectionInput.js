import { Component } from 'react';
import addEntryIcon from '../../../images/icons/add-entry-icon.svg';
import EducationalExpEntryInput from './EducationalExpEntryInput';

class EducationalExpSectionInput extends Component {
  constructor(props) {
    super()
    this.state = {
      schoolName: '',
      major: '',
      degreeType: '',
      gpa: 4.00,
      graduationDate: new Date(),
    }
    
    // rebind
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
    console.log('here');
  }

  handleSubmit(event) {
    event.preventDefault();
    // get all values from form and send to output
    
  }

  render() {
    return (
      <section className='form-section'>
        <EducationalExpEntryInput changeHandler={this.handleChange}/>
        <div className='form-submit-btn-container'>
          <button className='btn-base btn-form' onClick ={this.handleSubmit}>
            <img src={addEntryIcon} alt='Addition sign'></img>
            <span>Add another Education Experience Entry</span>
          </button>
        </div>
      </section>
    )
  }
}

export default EducationalExpSectionInput;


