import React from 'react'
import { Container, Button, Col, Form, Row, InputGroup } from 'react-bootstrap';

function OwnerChanges() {
  return (
    <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'center' }}>
    <Container>
    
      <Form style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
       <center> <h2><b>Create Your Hostel Listing - Start Hosting Today !</b></h2></center>

        <Row className="mb-3 mt-4">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label style={{ fontWeight: 'bold',color:"#218b7a" }}>Hostel Name</Form.Label>
            <Form.Control style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }} required type="text" placeholder="Enter Hostel Name" />
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label style={{ fontWeight: 'bold',color:"#218b7a" }}>District, Landmark</Form.Label>
            <Form.Control style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }} required type="text" placeholder="Enter District, Landmark" />
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom03">
            <Form.Label style={{ fontWeight: 'bold',color:"#218b7a" }}>License No.</Form.Label>
            <InputGroup hasValidation>
              <Form.Control style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }} type="text" placeholder="Enter License Number" aria-describedby="inputGroupPrepend" required />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom04">
            <Form.Label style={{ fontWeight: 'bold',color:"#218b7a" }}>Rate</Form.Label>
            <Form.Control style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }} type="number" placeholder="Enter Rate" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom05">
            <Form.Label style={{ fontWeight: 'bold',color:"#218b7a" }}>Occupancy</Form.Label>
            <Form.Control style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }} defaultValue="4S, 6S, 10S" type="text" placeholder="Enter Occupancy" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom06">
            <Form.Label style={{ fontWeight: 'bold',color:"#218b7a" }}>Available Room</Form.Label>
            <Form.Control style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }} type="number" placeholder="Enter Room Count" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom07">
            <Form.Label style={{ fontWeight: 'bold',color:"#218b7a" }}>Facilities 1</Form.Label>
            <Form.Control style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }} type="text" placeholder="Enter Facilities 1" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom08">
            <Form.Label style={{ fontWeight: 'bold',color:"#218b7a" }}>Facilities 2</Form.Label>
            <Form.Control style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }} type="text" placeholder="Enter Facilities 2" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom09">
            <Form.Label style={{ fontWeight: 'bold',color:"#218b7a" }}>Facilities 3</Form.Label>
            <Form.Control style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }} type="text" placeholder="Enter Facilities 3" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom10">
            <Form.Label style={{ fontWeight: 'bold',color:"#218b7a" }}>Facilities 4</Form.Label>
            <Form.Control style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}  type="text" placeholder="Enter Facilities 4" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom11">
            <Form.Label style={{ fontWeight: 'bold',color:"#218b7a" }}>Facilities 5</Form.Label>
            <Form.Control style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }} type="text" placeholder="Enter Facilities 5" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>
          
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" className="position-relative mb-3">
            <Form.Label style={{ fontWeight: 'bold',color:"#218b7a" }}>Upload Hostel Images 1</Form.Label>
            <Form.Control style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}  type="file" required name="file1" />
            <Form.Control.Feedback type="invalid" tooltip></Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" className="position-relative mb-3">
            <Form.Label style={{ fontWeight: 'bold',color:"#218b7a" }}>Upload Hostel Images 2</Form.Label>
            <Form.Control style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }} type="file" required name="file2" />
            <Form.Control.Feedback type="invalid" tooltip></Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" className="position-relative mb-3">
            <Form.Label style={{ fontWeight: 'bold',color:"#218b7a" }}>Upload Hostel Images 3</Form.Label>
            <Form.Control style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }} type="file" required name="file3" />
            <Form.Control.Feedback type="invalid" tooltip></Form.Control.Feedback>
          </Form.Group>
          
          <Form.Group as={Col} md="12" controlId="validationCustom13">
  <Form.Label style={{ fontWeight: 'bold', color: "#218b7a" }}>Description</Form.Label>
  <Form.Control
    as="textarea"
    rows={5} // Adjust the number of rows for the desired height
    placeholder="Enter Description"
    required
    
    
  />
  <Form.Control.Feedback type="invalid">
    Please provide a description.
  </Form.Control.Feedback>
</Form.Group>
        </Row>
        
        <Row className="">
        <center>  <Button  type="submit" style={{ backgroundColor: '#218b7a', color: '#fff',  borderRadius: '5px', border: 'none', width:"20%" }}>Submit
          </Button></center>
        </Row>
      </Form>
    </Container>
  </div>
  )
}

export default OwnerChanges