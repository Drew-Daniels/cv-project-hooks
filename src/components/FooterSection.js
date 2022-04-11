import { AiFillGithub as GitHubIcon } from 'react-icons/ai';
import { Container } from 'react-bootstrap';

function FooterSection(props) {

  return (
    <Container fluid as='footer' className='footer d-flex flex-column p-5'>
      <a id='github-link-project' href='https://github.com/Drew-Daniels/cv-project'>
        <GitHubIcon />
      </a>
      <div className='github-profile-container'>
        <span>Created by</span>
        <a id='github-link-profile' href='https://github.com/Drew-Daniels'>Drew Daniels</a>
      </div>
    </Container>
  );
};

export default FooterSection;
