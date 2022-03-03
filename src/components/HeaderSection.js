import cvApplicationIcon from '../images/icons/cv-application-icon.svg';

function HeaderSection(props) {
    return (
      <header className='header'>
        <img src={cvApplicationIcon} alt='Briefcase' className='header-image'></img>
        <h1>CV Application</h1>
      </header>
    )
}

export default HeaderSection;
