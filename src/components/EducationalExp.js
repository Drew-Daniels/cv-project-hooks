import { Component } from 'react';
import '../styles/Reset.css';
import '../styles/EducationalExp.css';

class EducationalExp extends Component {
  constructor(props) {
    super()
    this.state = {
      schoolName: '',
      major: '',
      fromYear: '',
      toYear: '',
    }
  }
  render() {
    const { schoolName, major, fromYear, toYear } = this.state;
    
    return (
      <div>

      </div>
    )
  }
}

export default EducationalExp;