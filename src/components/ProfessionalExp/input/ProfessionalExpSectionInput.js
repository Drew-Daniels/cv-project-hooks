import { Component } from 'react';
import addEntryIcon from '../../../images/icons/add-entry-icon.svg';
import ProfessionalExpEntryInput from './ProfessionalExpEntryInput';

class ProfessionalExpSectionInput extends Component {
  constructor(props) {
    super();
    this.state = {
      companyName: '',
      positionTitle: '',
      positionTasks: [],
      fromDate: new Date(),
      toDate: new Date(),
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
    // get all values from form
    
  }

  render() {
    return (
      <section className='form-section'>
        <ProfessionalExpEntryInput changeHandler={this.handleChange}/>
        <div className='form-submit-btn-container'>
          <button className="btn-base btn-form" onClick={this.handleSubmit}>
            <img src={addEntryIcon} alt="Addition Sign"></img>
            <span>Add another Professional Experience Entry</span>
          </button>
        </div>
      </section>
    )
  }
};

export default ProfessionalExpSectionInput;
