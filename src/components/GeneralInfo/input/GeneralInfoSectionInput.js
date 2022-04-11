import { Card, Form, InputGroup, FormControl, FloatingLabel, Row, Col } from 'react-bootstrap';

function GeneralInfoSectionInput(props) {

  const {changeHandler} = props;

  function submitHandler(event) {
    event.preventDefault();
  }
  
  return (
      <Card>
        <Card.Header as='h2'>General</Card.Header>
        <Card.Body>
          <Form className='form'>
            <Row>
              <Col>
                <FloatingLabel
                  controlId='first-name'
                  label='First name'
                  className='mb-3'
                >
                  <FormControl 
                    name='firstName'
                    type='text'
                    placeholder='Type first name'
                    onChange={changeHandler} 
                  />
                </FloatingLabel>
              </Col>
              <Col>
                <FloatingLabel
                  controlId='last-name'
                  label='Last name'
                  className='mb-3'
                >
                  <FormControl 
                    name='lastName'
                    type='text'
                    placeholder='Type last name'
                    onChange={changeHandler}
                  />
                </FloatingLabel>
              </Col>
            </Row>
            <Row>
              <Col>
                <FloatingLabel
                  controlId='phone-number'
                  label='Phone #'
                  className='mb-3'
                >
                  <FormControl
                    name='phoneNumber'
                    type='tel'
                    placeholder='Type phone number'
                    onChange={changeHandler}
                  />
                </FloatingLabel>
              </Col>
              <Col xs={7}>
                <FloatingLabel
                  controlId='email'
                  label='Email'
                  className='mb-3'
                >
                  <FormControl
                    name='email'
                    type='email'
                    placeholder='Type email'
                    onChange={changeHandler} 
                  />
                </FloatingLabel>
              </Col>
            </Row>
            <Form.Label htmlFor='linkedin-url'>LinkedIn URL</Form.Label>
            <InputGroup size='sm' className='mb-3'>
              <InputGroup.Text id='linkedin-url-prefix'>https://www.linkedin.com/in/</InputGroup.Text>
              <FormControl 
                id="linkedin-url"
                name='linkedInURL'
                aria-describedby="linkedin-url-prefix"
                onChange={changeHandler}
              />
            </InputGroup>
          </Form>
        </Card.Body>
      </Card>

  );
}


export default GeneralInfoSectionInput;