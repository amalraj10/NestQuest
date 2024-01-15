import React, { useContext, useEffect, useState } from 'react'
import { Button, Modal, Container, Form, Row, Col, InputGroup } from 'react-bootstrap';
import { BASE_URL } from '../services/baseurl';
import { editHostelAPI } from '../services/allAPI';
import { editHostelResoponseContext } from '../context/ContextShare';
import Swal from 'sweetalert2';

function HostelChanges({Hostel}) {


    const {editHostelResponse,seteditHostelResponse} = useContext(editHostelResoponseContext)
    const [showModal, setShowModal] = useState(false);

    const [preview1,setPreview1] = useState("")
    const [preview2, setPreview2] = useState(null);
const [preview3, setPreview3] = useState(null);

    const [hostelDetails, setHostelDetails] = useState({
        id: Hostel._id,   
        hostelName: Hostel.hostelName,
        dLmark: Hostel.dLmark,
        license: Hostel.license,
        rate: Hostel.rate,
        occupancy: Hostel.occupancy,
        availableRoom: Hostel.availableRoom,
        fc1: Hostel.fc1,
        fc2: Hostel.fc2,
        fc3: Hostel.fc3,
        fc4: Hostel.fc4,
        fc5: Hostel.fc5,
        description:Hostel.description,
        
        hostelimage1:"",
        hostelimage2:"",
        hostelimage3:""
      
      });

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  useEffect(() => {
    if (hostelDetails.hostelimage1) {
      setPreview1(URL.createObjectURL(hostelDetails.hostelimage1));
    }
  }, [hostelDetails.hostelimage1]);
  
  useEffect(() => {
    if (hostelDetails.hostelimage2) {
      setPreview2(URL.createObjectURL(hostelDetails.hostelimage2));
    }
  }, [hostelDetails.hostelimage2]);
  
  useEffect(() => {
    if (hostelDetails.hostelimage3) {
      setPreview3(URL.createObjectURL(hostelDetails.hostelimage3));
    }
  }, [hostelDetails.hostelimage3]);

const handleClose1 = ()=>{
    setHostelDetails({
        id: Hostel._id,   
        hostelName: Hostel.hostelName,
        dLmark: Hostel.dLmark,
        license: Hostel.license,
        rate: Hostel.rate,
        occupancy: Hostel.occupancy,
        availableRoom: Hostel.availableRoom,
        fc1: Hostel.fc1,
        fc2: Hostel.fc2,
        fc3: Hostel.fc3,
        fc4: Hostel.fc4,
        fc5: Hostel.fc5,
        description:Hostel.description,
        hostelimage1:"",
        hostelimage2:"",
        hostelimage3:""
    })
    setPreview1("")
    setPreview2("")
    setPreview3("")
}
const handleUpdate = async()=>{

const {id,hostelName,dLmark,license,rate,occupancy,availableRoom, fc1,fc2,fc3,fc4,fc5,description,hostelimage1,hostelimage2,hostelimage3} = hostelDetails

if(!hostelName||!dLmark||!license||!rate||!occupancy||!availableRoom||!fc1||!fc2||!fc3||!fc4||!fc5||!description){
    alert('please fill the form compltely')
  }
  else{
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
 
  preview1?reqBody.append("hostelimage1",hostelimage1):reqBody.append("hostelimage1",Hostel.hostelimage1)
  preview2?reqBody.append("hostelimage2",hostelimage2):reqBody.append("hostelimage2",Hostel.hostelimage2)
  preview3?reqBody.append("hostelimage3",hostelimage3):reqBody.append("hostelimage3",Hostel.hostelimage3)
 



const token = sessionStorage.getItem("token")
if (preview1 || preview2 || preview3) {
  const reqHeader = {
    "Content-Type": "multipart/form-data",
    "Authorization": `Bearer ${token}`
  }
  const result = await editHostelAPI(id, reqBody, reqHeader);
  console.log(result);
  if (result.status === 200) {
    Swal.fire({
      icon: 'success',
      title: 'Success',
      text: 'Updated Successfully',
    }).then((result) => {
      if (result.isConfirmed || result.isDismissed) {
        handleClose();
        seteditHostelResponse(result.data);
      }
    });
  } else {
    console.log(result.response.data);
  }
} else {
  const reqHeader = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`
  }
  const result = await editHostelAPI(id, reqBody, reqHeader);
  console.log(result);
  if (result.status === 200) {
    Swal.fire({
      icon: 'success',
      title: 'Success',
      text: 'Updated Successfully',
    }).then((result) => {
      if (result.isConfirmed || result.isDismissed) {
        handleClose();
        seteditHostelResponse(result.data);
      }
    });
  } else {
    console.log(result.response.data);
  }
}

  }

}

  return (
    <div>
<Button onClick={handleShow} variant="dark"><i class="fa-solid fa-pen-to-square"></i> Make Changes</Button>

<Modal show={showModal} onHide={handleClose} size="lg">
      
        <Modal.Body>
          <Container>
            <Form style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
              <center>
                <h2>
                  <b>Edit Your Hostel Listing </b>
                </h2>
              </center>
              <Row className="mb-3 mt-4">
                <Form.Group as={Col} md="4" controlId="validationCustom01">
                  <Form.Label style={{ fontWeight: 'bold', color: '#218b7a' }}>Hostel Name</Form.Label>
                  <Form.Control style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }} required type="text" placeholder="Enter Hostel Name"  value={hostelDetails.hostelName}  onChange={e=>setHostelDetails({...hostelDetails,hostelName:e.target.value})}/>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom02">
                  <Form.Label style={{ fontWeight: 'bold', color: '#218b7a' }}>District, Landmark</Form.Label>
                  <Form.Control style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }} required type="text" placeholder="Enter District, Landmark"  value={hostelDetails.dLmark}  onChange={e=>setHostelDetails({...hostelDetails,dLmark:e.target.value})}/>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom03">
                  <Form.Label style={{ fontWeight: 'bold', color: '#218b7a' }}>License No.</Form.Label>
                  <InputGroup hasValidation>
                    <Form.Control style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }} type="text" placeholder="Enter License Number" aria-describedby="inputGroupPrepend" required value={hostelDetails.license}  onChange={e=>setHostelDetails({...hostelDetails,license:e.target.value})} />
                    <Form.Control.Feedback type="invalid">
                      Please choose a username.
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="validationCustom04">
                  <Form.Label style={{ fontWeight: 'bold', color: '#218b7a' }}>Rate</Form.Label>
                  <Form.Control style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }} type="number" placeholder="Enter Rate" required value={hostelDetails.rate}  onChange={e=>setHostelDetails({...hostelDetails,rate:e.target.value})} />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid city.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom05">
                  <Form.Label style={{ fontWeight: 'bold', color: '#218b7a' }}>Occupancy</Form.Label>
                  <Form.Control style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }} defaultValue="4S, 6S, 10S" type="text" placeholder="Enter Occupancy" required  value={hostelDetails.occupancy}  onChange={e=>setHostelDetails({...hostelDetails,occupancy:e.target.value})}/>
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid state.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom06">
                  <Form.Label style={{ fontWeight: 'bold', color: '#218b7a' }}>Available Room</Form.Label>
                  <Form.Control style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }} type="number" placeholder="Enter Room Count" required  value={hostelDetails.availableRoom}  onChange={e=>setHostelDetails({...hostelDetails,availableRoom:e.target.value})}/>
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid state.
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="validationCustom07">
                  <Form.Label style={{ fontWeight: 'bold', color: '#218b7a' }}>Facilities 1</Form.Label>
                  <Form.Control style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }} type="text" placeholder="Enter Facilities 1" required value={hostelDetails.fc1}  onChange={e=>setHostelDetails({...hostelDetails,fc1:e.target.value})} />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid city.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom08">
                  <Form.Label style={{ fontWeight: 'bold', color: '#218b7a' }}>Facilities 2</Form.Label>
                  <Form.Control style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }} type="text" placeholder="Enter Facilities 2" required value={hostelDetails.fc2}  onChange={e=>setHostelDetails({...hostelDetails,fc2:e.target.value})} />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid state.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom09">
                  <Form.Label style={{ fontWeight: 'bold', color: '#218b7a' }}>Facilities 3</Form.Label>
                  <Form.Control style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }} type="text" placeholder="Enter Facilities 3" required value={hostelDetails.fc3}  onChange={e=>setHostelDetails({...hostelDetails,fc3:e.target.value})} />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid state.
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="validationCustom10">
                  <Form.Label style={{ fontWeight: 'bold', color: '#218b7a' }}>Facilities 4</Form.Label>
                  <Form.Control style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }} type="text" placeholder="Enter Facilities 4" required value={hostelDetails.fc4}  onChange={e=>setHostelDetails({...hostelDetails,fc4:e.target.value})} />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid state.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom11">
                  <Form.Label style={{ fontWeight: 'bold', color: '#218b7a' }}>Facilities 5</Form.Label>
                  <Form.Control style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }} type="text" placeholder="Enter Facilities 5" required value={hostelDetails.fc5}  onChange={e=>setHostelDetails({...hostelDetails,fc5:e.target.value})} />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid state.
                  </Form.Control.Feedback>
                </Form.Group>
                
              </Row>
              <Row className="mb-3">
              <Form.Group as={Col} md="4" className="position-relative mb-3">
  <label htmlFor="image1" className='text-center'>
    <input id='image1' type='file' style={{ display: 'none' }} onChange={e => setHostelDetails({ ...hostelDetails, hostelimage1: e.target.files[0] })} />
    <img style={{ width: "100%" }} src={preview1 ? preview1 : `${BASE_URL}/uploads/${Hostel.hostelimage1}`} alt="" />
  </label>
</Form.Group>

<Form.Group as={Col} md="4" className="position-relative mb-3">
  <label htmlFor="image2" className='text-center'>
    <input id='image2' type='file' style={{ display: 'none' }} onChange={e => setHostelDetails({ ...hostelDetails, hostelimage2: e.target.files[0] })} />
    <img style={{ width: "100%" }} src={preview2 ? preview2 : `${BASE_URL}/uploads/${Hostel.hostelimage2}`} alt="" />
  </label>
</Form.Group>

<Form.Group as={Col} md="4" className="position-relative mb-3">
  <label htmlFor="image3" className='text-center'>
    <input id='image3' type='file' style={{ display: 'none' }} onChange={e => setHostelDetails({ ...hostelDetails, hostelimage3: e.target.files[0] })} />
    <img style={{ width: "100%" }} src={preview3 ? preview3 : `${BASE_URL}/uploads/${Hostel.hostelimage3}`} alt="" />
  </label>
</Form.Group>

              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="12" controlId="validationCustom13">
                  <Form.Label style={{ fontWeight: 'bold', color: '#218b7a' }}>Description</Form.Label>
                  <Form.Control as="textarea" rows={5} placeholder="Enter Description"  style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'}} required  value={hostelDetails.description}  onChange={e=>setHostelDetails({...hostelDetails,description:e.target.value})}/>
                  <Form.Control.Feedback type="invalid">
                    Please provide a description.
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
            </Form>
          </Container>
        </Modal.Body>
        <Modal.Footer>
        <Button className='btn btn-danger' onClick={handleClose}>
            Close
          </Button>
          <Button className='btn btn-dark' onClick={handleClose1}>
            Cancel
          </Button>
          <Button
  onClick={handleUpdate}
  variant="dark"
  style={{ backgroundColor: '#218b7a' }}
>
  <i className="fa-solid fa-pen-to-square"></i> Save Changes
</Button>
        </Modal.Footer>
      </Modal>



    </div>
  )
}

export default HostelChanges