import '../styles/Reset.css';
import { Component } from 'react';

class GeneralInfo extends Component {
  constructor(prop) {
    super();

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    };
  }

  render() {
    const {firstName, lastName, email, phone} = this.state;

    return (
      <div>

      </div>
    );
  }
}

export default GeneralInfo;