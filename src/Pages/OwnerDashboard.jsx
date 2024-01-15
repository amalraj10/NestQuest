import React, { useContext } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { isDashoBoardContext } from '../context/ContextShare'

function OwnerDashboard() {
  const {isdashboardToken,setIsdashboardToken} = useContext(isDashoBoardContext)


  const navigate = useNavigate()

const handleLogout = ()=>{

  sessionStorage.removeItem("token")
  sessionStorage.removeItem("existingOwner")
  setIsdashboardToken(false)
  navigate('/')


}

  return (
    <div>
      
      <Button onClick={handleLogout} style={{marginLeft:"90%"}} variant="danger"><i class="fa-solid fa-share-from-square"></i> <b>Logout</b> </Button>{' '}
      
         <div className='container'>
<Row className="container mt-5  "  >
<Col  md={2}> </Col>
    <Col data-aos="zoom-in-right"   data-aos-duration="1000"   md={4}> <Card className='ms-4  card shadow ' style={{ width: '20rem' }}>
      <Card.Img variant="top" src="https://payload.cargocollective.com/1/21/676782/13721367/SEA_02.gif" />
      <Card.Body>
      
        <Card.Text>
        Effortlessly manage and update your hostel's profile. 
        </Card.Text>
        <Link to={'/owner-hostel-visit'} className='text-decoration-none' > <Button className='d-block mx-auto' variant="primary" style={{backgroundColor:"#218b7a"}}>Visit My Hostels</Button></Link>
        
      </Card.Body>
    </Card> </Col>
    <Col data-aos="zoom-in-left"   data-aos-duration="1000"   md={4}> <Card className='ms-5 card shadow ' style={{ width: '20rem' }}>
      <Card.Img variant="top" src="https://www.eerosunpavers.com/images/giphy.gif" />
      <Card.Body>
      
        <Card.Text>
        Expand your hostel offerings seamlessly by including new properties with Us.
        </Card.Text>
        <div>
        <Link to={'/Owner-hostel-add'} className='text-decoration-none' > <Button style={{backgroundColor:"#218b7a"}} className='d-block mx-auto' variant="primary">Add New Hostel</Button></Link>

      </div>
       
      </Card.Body>
    </Card> </Col>
    
   


    <Col  md={3}> </Col>

</Row>
<br /><br />
</div>
    </div>
  )
}

export default OwnerDashboard