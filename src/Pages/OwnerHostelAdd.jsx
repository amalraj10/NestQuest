import React, { useContext, useEffect, useState } from 'react';
import { Container, Button, Col, Form, Row, InputGroup } from 'react-bootstrap';
import { addHostelAPI } from '../services/allAPI';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { addHostelResponseContext } from '../context/ContextShare';

function OwnerHostelAdd() {

const {addHostelResponse , setAddHostelResponse} = useContext(addHostelResponseContext)

  const navigate = useNavigate()
  const [preview,setPreview] = useState("")
  const [hostelDetails, setHostelDetails] = useState({
    hostelName: "",
    dLmark: "",
    license: "",
    rate: "",
    occupancy: "",
    availableRoom: "",
    fc1: "",
    fc2: "",
    fc3: "",
    fc4: "",
    fc5: "",
    description:"",
    hostelimage1:"",
    hostelimage2:"",
    hostelimage3:"",
    conformation:"pending"
  
  });
  //state to hold token
  const[token,setToken] = useState("")
console.log(hostelDetails);

useEffect(()=>{
  if(hostelDetails.hostelimage1)
{(setPreview(URL.createObjectURL(hostelDetails.hostelimage1)))}
},[hostelDetails.hostelimage1])

useEffect(()=>{
if(sessionStorage.getItem("token")){
  setToken(sessionStorage.getItem("token"))
}
else{
  setToken("")
}
},[])

const isValidLicense = (license) => {
  // Allow any two letters (one uppercase, one lowercase) after the initial characters
  const licensePattern = /^[A-Z][a-z]-\d{2}\/20\d{2}$/;
  return licensePattern.test(license);
};



//add project
const handleSubmit = async(e)=>{
e.preventDefault()

const{hostelName,dLmark,license,rate,occupancy,availableRoom, fc1,fc2,fc3,fc4,fc5,description,hostelimage1,hostelimage2,hostelimage3,conformation} = hostelDetails


 // Validate license
 if (!isValidLicense(license)) {
  Swal.fire({
    icon: 'error',
    title: 'Incorrect Form',
    text: 'License number is not correct.',
  });

 if (!hostelName || !dLmark || !rate || !occupancy || !availableRoom ||
  !fc1 || !fc2 || !fc3 || !fc4 || !fc5  || !description || !hostelimage1 || !hostelimage2 || !hostelimage3) {
  Swal.fire({
    icon: 'error',
    title: 'Incorrect Form',
    text: 'Please fill out the form correctly.',
  });
}

 
  return; // Prevent form submission
}

// Check other form fields and perform submission logic

else{
  //reqBody
  //create object for FormData - since we have uploading content
  const reqBody = new FormData()

  //add data to form data - append()
  reqBody.append("hostelName",hostelName)
  reqBody.append("dLmark",dLmark)
  reqBody.append("license",license)
  reqBody.append("rate",rate)
  reqBody.append("occupancy",occupancy)
  reqBody.append("availableRoom",availableRoom)
  reqBody.append("fc1",fc1)
  reqBody.append("fc2",fc2)
  reqBody.append("fc3",fc3)
  reqBody.append("fc4",fc4)
  reqBody.append("fc5",fc5)
  reqBody.append("description",description)
  
  reqBody.append("hostelimage1",hostelimage1)
  reqBody.append("hostelimage12",hostelimage2)
  reqBody.append("hostelimage3",hostelimage3)
  reqBody.append("conformation",conformation)

if(token){  const reqHeader = {
    "Content-Type":"multipart/form-data",
    "Authorization": `Bearer ${token}`
} 

  const result = await addHostelAPI(reqBody,reqHeader)
  console.log(result);

  if (result.status === 200) {
    console.log(result.data);
    Swal.fire({
        title: 'Success',
        text: 'Successfully Submitted',
        icon: 'success',
        confirmButtonText: 'OK'        

        
    }
    );
  setAddHostelResponse(result.data)

    setHostelDetails({
      hostelName: "",
      dLmark: "",
      license: "",
      rate: "",
      occupancy: "",
      availableRoom: "",
      fc1: "",
      fc2: "",
      fc3: "",
      fc4: "",
      fc5: "",
      description:"",
      hostelimage1:"",
      hostelimage2:"",
      hostelimage3:""
  
    })
  
  
    navigate('/owner-dashboard');
   
  
} 
else {
    console.log(result.response.data);
}


}

}
}




  

  return (
    <div data-aos="flip-up"
    data-aos-easing="linear" data-aos-duration="800" style={{ marginTop: '30px', display: 'flex', justifyContent: 'center' }}>
      <Container>
        
        <Form style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '20px',backgroundColor: '#f5f5f5' }} >
          <center><h2><b>Create Your Hostel Listing - Start Hosting Today!</b></h2></center>

          <Row className="mb-3 mt-4">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label style={{ fontWeight: 'bold', color: "#218b7a" }}>Hostel Name</Form.Label>
              <Form.Control
              style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'}}
                required
                type="text"
                placeholder="Enter Hostel Name"
                value={hostelDetails.hostelName}
              onChange={(e)=>setHostelDetails({...hostelDetails,hostelName:e.target.value})}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label style={{ fontWeight: 'bold', color: "#218b7a" }}>District, Landmark</Form.Label>
              <Form.Control
               style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'}}
                required
                type="text"
                placeholder="Enter District, Landmark"
                value={hostelDetails.dLmark}
                onChange={(e)=>setHostelDetails({...hostelDetails,dLmark:e.target.value})}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label style={{ fontWeight: 'bold', color: "#218b7a" }}>License No.</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                 style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'}}
                  type="text"
                  placeholder="Enter License Number"
                  aria-describedby="inputGroupPrepend"
                  required
                  value={hostelDetails.license}
                  onChange={(e)=>setHostelDetails({...hostelDetails,license:e.target.value})}
                />
                <Form.Control.Feedback type="invalid">
                  Please choose a username.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label style={{ fontWeight: 'bold', color: "#218b7a" }}>Rate</Form.Label>
              <Form.Control
               style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'}}
                type="number"
                placeholder="Enter Rate"
                required
                value={hostelDetails.rate}
                onChange={(e)=>setHostelDetails({...hostelDetails,rate:e.target.value})}
              
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label style={{ fontWeight: 'bold', color: "#218b7a" }}>Occupancy</Form.Label>
              <Form.Control
               style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'}}
                defaultValue="4S, 6S, 10S"
                type="text"
                placeholder="Enter Occupancy"
                required
                value={hostelDetails.occupancy}
                onChange={(e)=>setHostelDetails({...hostelDetails,occupancy:e.target.value})}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom06">
              <Form.Label style={{ fontWeight: 'bold', color: "#218b7a" }}>Available Room</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Room Count"
                required
                value={hostelDetails.availableRoom}
                onChange={(e)=>setHostelDetails({...hostelDetails,availableRoom:e.target.value})}
           
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom07">
              <Form.Label style={{ fontWeight: 'bold', color: "#218b7a" }}>Facilities 1</Form.Label>
              <Form.Control
               style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'}}
                type="text"
                placeholder="Enter Facilities 1"
                required
                value={hostelDetails.fc1}
                onChange={(e)=>setHostelDetails({...hostelDetails,fc1:e.target.value})}
        
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom08">
              <Form.Label style={{ fontWeight: 'bold', color: "#218b7a" }}>Facilities 2</Form.Label>
              <Form.Control
               style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'}}
                type="text"
                placeholder="Enter Facilities 2"
                required
                value={hostelDetails.fc2}
                onChange={(e)=>setHostelDetails({...hostelDetails,fc2:e.target.value})}
               
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom09">
              <Form.Label style={{ fontWeight: 'bold', color: "#218b7a" }}>Facilities 3</Form.Label>
              <Form.Control
               style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'}}
                type="text"
                placeholder="Enter Facilities 3"
                required
                value={hostelDetails.fc3}
                onChange={(e)=>setHostelDetails({...hostelDetails,fc3:e.target.value})}
                
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom10">
              <Form.Label style={{ fontWeight: 'bold', color: "#218b7a" }}>Facilities 4</Form.Label>
              <Form.Control
               style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'}}
                type="text"
                placeholder="Enter Facilities 4"
                required
                value={hostelDetails.fc4}
                onChange={(e)=>setHostelDetails({...hostelDetails,fc4:e.target.value})}
              
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom11">
              <Form.Label style={{ fontWeight: 'bold', color: "#218b7a" }}>Facilities 5</Form.Label>
              <Form.Control
               style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'}}
                type="text"
                placeholder="Enter Facilities 5"
                required
                value={hostelDetails.fc5}
                onChange={(e)=>setHostelDetails({...hostelDetails,fc5:e.target.value})}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" className="position-relative mb-3">
              <Form.Label style={{ fontWeight: 'bold', color: "#218b7a" }}>Upload Hostel Images 1</Form.Label>
              <Form.Control
               style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'}}
                type="file"
                required
                name="file1"
                
                onChange={(e)=>setHostelDetails({...hostelDetails,hostelimage1:e.target.files[0]})}
             
              />
              <Form.Control.Feedback type="invalid" tooltip></Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" className="position-relative mb-3">
              <Form.Label style={{ fontWeight: 'bold', color: "#218b7a" }}>Upload Hostel Images 2</Form.Label>
              <Form.Control
               style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'}}
                type="file"
                required
                name="file2"
             
                onChange={(e)=>setHostelDetails({...hostelDetails,hostelimage2:e.target.files[0]})}
              
              />
              <Form.Control.Feedback type="invalid" tooltip></Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" className="position-relative mb-3">
              <Form.Label style={{ fontWeight: 'bold', color: "#218b7a" }}>Upload Hostel Images 3</Form.Label>
              <Form.Control
               style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'}}
                type="file"
                required
                name="file3"
             
                onChange={(e)=>setHostelDetails({...hostelDetails,hostelimage3:e.target.files[0]})}
              
              />
              <Form.Control.Feedback type="invalid" tooltip></Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Form.Group as={Col} md="12" controlId="validationCustom13">
  <Form.Label style={{ fontWeight: 'bold', color: "#218b7a" }}>Description</Form.Label>
  <Form.Control
   style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'}}
    as="textarea"
    rows={5} // Adjust the number of rows for the desired height
    placeholder="Enter Description"
    required
    value={hostelDetails.description}
    onChange={(e) => setHostelDetails({ ...hostelDetails, description: e.target.value })}
  />
  <Form.Control.Feedback type="invalid">
    Please provide a description.
  </Form.Control.Feedback>
</Form.Group>


          <Row className="mt-3">
            <center><Button onClick={handleSubmit} style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', backgroundColor: "#218b7a" }} type="submit">Submit</Button></center>
          </Row>
          
        </Form>
      </Container>
    </div>
  );
}

export default OwnerHostelAdd;
