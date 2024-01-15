import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'

function UserBookedCards() {
  return (
    <div><div className='mt-5 container'>
    <Row className="container">
      <Col md={3}> 
        <Card  className='mt-5 card shadow' style={{ width: '18rem'}}>
          <Card.Img variant="top" style={{ height: '250px' }} className='p-2' src="https://cityhostel.axiomthemes.com/wp-content/uploads/2016/12/room-8-529x406.jpg" />
          <Card.Body>
            <Card.Title>Title</Card.Title>
            <Card.Text>
              <p><span>Place,City</span></p>
              <p><span>Sharings</span></p>
              <p><span>Price-₹</span></p>
            </Card.Text>
           
          <center>  <Button href='./booked-hostel-details' variant="dark">More Info</Button></center>
            
          </Card.Body>
        </Card>
      </Col>
      <Col  md={3}> </Col>
  <Col  md={3}> </Col>
  <Col  md={3}> </Col>
    </Row>
  </div></div>
  )
}

export default UserBookedCards