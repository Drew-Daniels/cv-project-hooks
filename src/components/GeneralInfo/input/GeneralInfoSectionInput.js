import { Component } from 'react';

class GeneralInfoSectionInput extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <section id='general-section' className='form-section'>
        <h3 className='form-section-header'>General</h3>
        <div className='form-control'>
          <label htmlFor='first-name'>First Name:</label>
          <input id='first-name' name='firstName' type='text' onChange={this.props.changeHandler}/>
        </div>
        <div className='form-control'>
          <label htmlFor='last-name'>Last Name:</label>
          <input id='last-name' name='lastName' type='text' onChange={this.props.changeHandler}/>
        </div>
        <div className='form-control'>
        <label htmlFor='phone-number'>Phone Number:</label>
        <input id='phone-number' name='phoneNumber' type='tel' onChange={this.props.changeHandler}/>
        </div>
        <div className='form-control'>
          <label htmlFor='email'>Email:</label>
          <input id='email' name='email' type='text' onChange={this.props.changeHandler}/>
        </div>
        <div className='form-control'>
          <label htmlFor='linkedin-url'>LinkedIn URL:</label>
          <input id='linkedin-url' name='linkedInURL' type='text' onChange={this.props.changeHandler}/>
        </div>
      </section>
    );
  }
}

export default GeneralInfoSectionInput;