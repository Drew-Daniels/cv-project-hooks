import { Component } from 'react';
import cvApplicationIcon from '../images/icons/cv-application-icon.svg';

class HeaderSection extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <header className='header'>
        <img src={cvApplicationIcon} alt='Briefcase'></img>
        <h1>CV Application</h1>
      </header>
    )
  };
};

export default HeaderSection;
