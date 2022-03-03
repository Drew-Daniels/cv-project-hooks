import githubIcon from '../images/icons/github-icon.svg';

function FooterSection(props) {

  return (
    <footer className='footer'>
      <a id='github-link-project' href='https://github.com/Drew-Daniels/cv-project'>
        <img src={githubIcon} alt='Github Icon' className='github-icon'></img>
      </a>
      <div className='github-profile-container'>
        <span>Created by</span>
        <a id='github-link-profile' href='https://github.com/Drew-Daniels'>Drew Daniels</a>
      </div>
    </footer>
  );
};

export default FooterSection;
