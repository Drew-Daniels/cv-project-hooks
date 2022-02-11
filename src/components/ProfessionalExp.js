import { Component } from 'react';
import '../styles/Reset.css';

class ProfessionalExp extends Component {
  constructor(props) {
    super();
    
    this.state = {
      companyName: '',
      positionTitle: '',
      positionTasks: '',
      fromDate: '',
      toDate: '',
    };
  };

  render() {
    const { companyName, positionTitle, positionTasks, fromDate, toDate } = this.state;
    return (
      <div>

      </div>
    )
  }
};

export default ProfessionalExp;
