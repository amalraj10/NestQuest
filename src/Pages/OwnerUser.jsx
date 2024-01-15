import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function OwnerUser() {
  
  return (
    <div>
        <div className='container'>
<Row className="container mt-5  "  >
<Col > </Col>
    <Col  data-aos="zoom-in-right"   data-aos-duration="1000"  md={3}> <Card className='me-5 card shadow ' style={{ width: '20rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/1200x/64/81/22/6481225432795d8cdf48f0f85800cf66.jpg" />
      <Card.Body>
      
        <Card.Text>
        Begin Your Hostel Journey : Explore, and Reserve Your Stay with a Click! Login for Boundless Hostel Experiences. 
        </Card.Text>
        <Link to={'/user-login'} className='text-decoration-none' > <Button className='d-block mx-auto' variant="primary" style={{backgroundColor:"#218b7a"}}>User Login</Button></Link>
        
      </Card.Body>
    </Card> </Col>
    <Col data-aos="zoom-in-left" data-aos-duration="1000"  md={3}> <Card className='ms-5 card shadow ' style={{ width: '20rem' }}>
      <Card.Img variant="top" src="https://cdn3.iconfinder.com/data/icons/user-icon-3-1/100/user_3_Artboard_1-512.png" />
      <Card.Body>
      
        <Card.Text>
        Hostel Owners, Take Control of Your Listing!    Login to Update and Manage Your Hostel's Presence on our Platform.
        </Card.Text>
        <div>
        <Link to={'/owner-login'} className='text-decoration-none' > <Button style={{backgroundColor:"#218b7a"}} className='d-block mx-auto' variant="primary">Owner Login</Button></Link>

      </div>
       
      </Card.Body>
    </Card> </Col>
    <Col  md={3}>  </Col>




</Row>
<br /><br />
</div>


    </div>
  )
}

export default OwnerUser