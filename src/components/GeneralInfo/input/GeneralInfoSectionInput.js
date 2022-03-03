function GeneralInfoSectionInput(props) {

  function submitHandler(event) {
    event.preventDefault();
  }
  
  return (
    <form id='general-section' className='form' onSubmit={submitHandler}>
      <h3 className='form-header'>General</h3>
      <div className='form-control'>
        <label htmlFor='first-name'>First Name:</label>
        <input id='first-name' name='firstName' type='text' onChange={props.changeHandler}/>
      </div>
      <div className='form-control'>
        <label htmlFor='last-name'>Last Name:</label>
        <input id='last-name' name='lastName' type='text' onChange={props.changeHandler}/>
      </div>
      <div className='form-control'>
      <label htmlFor='phone-number'>Phone Number:</label>
      <input id='phone-number' name='phoneNumber' type='tel' onChange={props.changeHandler}/>
      </div>
      <div className='form-control'>
        <label htmlFor='email'>Email:</label>
        <input id='email' name='email' type='text' onChange={props.changeHandler}/>
      </div>
      <div className='form-control'>
        <label htmlFor='linkedin-url'>LinkedIn URL:</label>
        <input id='linkedin-url' name='linkedInURL' type='text' onChange={props.changeHandler}/>
      </div>
    </form>
  );
}


export default GeneralInfoSectionInput;