import { FcBriefcase as CVApplicationIcon} from 'react-icons/fc';
import { IconContext } from 'react-icons';

function HeaderSection(props) {
    return (
      <header className='header'>
        <IconContext.Provider value={{ size: '2em' }}>
          <CVApplicationIcon />
        </IconContext.Provider>
        <h1 className='title'>CV Application</h1>
      </header>
    )
}

export default HeaderSection;
