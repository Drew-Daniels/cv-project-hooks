import { Component } from 'react';
import EducationalExpEntry from './EducationalExpEntry';
import addEntryIcon from '../../images/icons/add-entry-icon.svg';

class EducationalExpSection extends Component {
  constructor(props) {
    super()
  }
  render() {

    return (
      <section className='form-section'>
        <EducationalExpEntry />
        <button className='btn-base'>
          <img src={addEntryIcon} alt='Addition sign'></img>
          <span>Add another Education Experience Entry</span>
        </button>
      </section>
    )
  }
}

export default EducationalExpSection;