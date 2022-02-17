import { Component } from 'react';
import githubIcon from '../images/icons/github-icon.png';

class FooterSection extends Component {
  constructor(props) {
    super();

  };
  
  render() {
    return (
      <footer className='footer'>
        <a href='https://github.com/Drew-Daniels/cv-project'>
          <img src={githubIcon} alt='Github Icon' className='github-icon'></img>
        </a>
        <div className='github-profile-container'>
          <span>Created by</span>
          <a href='https://github.com/Drew-Daniels'>Drew Daniels</a>
        </div>
      </footer>
    )
  };
};

export default FooterSection;
