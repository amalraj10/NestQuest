import { Button, Col, Container, Row } from 'react-bootstrap';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { bookingHostelAPI } from '../services/allAPI';

function BookedHostelDetails() {




  return (
    <div>
<div style={{overflowX: 'hidden' }}>
        <Row >
        <Col md={7}>   
    <div style={{ paddingTop: '30px', textAlign: 'center' }}>
    <Carousel  showArrows={false} showStatus={false} >
        <div>
          <img
            src="https://cityhostel.axiomthemes.com/wp-content/uploads/2016/12/room-2.jpg"
            style={{ height: 'auto', maxWidth: '70%' }}
            alt="Room 1"
          />
        </div>
        <div>
          <img
            src="https://cityhostel.axiomthemes.com/wp-content/uploads/2016/12/post-8-1024x684.jpg"
            style={{ height: 'auto', maxWidth: '70%' }}
            alt="Room 2"
          />
        </div>
        <div>
          <img
            src="https://cityhostel.axiomthemes.com/wp-content/uploads/2016/12/room-3.jpg"
            style={{ height: 'auto', maxWidth: '70%' }}
            alt="Room 3"
          />
        </div>
      </Carousel>

    </div> </Col>
    
    <Col md={5}className='mt-2'>   
    
    <Container> <div>
      
    <div className='d-flex align-items-center justify-content-between me-2'>
    <div><h3 style={{color:"#218b7a"}}><b>Chandrika Hostel</b></h3>
    <h6 >Ernakulam,Kakkanad</h6>

    </div>
    <h4><b>₹20000</b></h4>
    </div>
   
    </div>
    <p className='mt-2' style={{textAlign:"justify"}}>
A hostel room: cozy, communal, and vibrant. It's a compact space filled with bunk beds or singles, where travelers gather to share stories, laughter, and experiences. It's a budget-friendly haven that fosters friendships and connections, offering a shared sanctuary for global adventurers.
     
    </p>
    
    <h4 ><b>ROOM Facilities</b></h4>
    <p className='mt-2'><i style={{color:"#218b7a"}} class="fa-solid fa-circle-check"></i> Free WiFi</p>
    <p><i style={{color:"#218b7a"}} class="fa-solid fa-circle-check"></i> TV</p>
    <p><i style={{color:"#218b7a"}} class="fa-solid fa-circle-check"></i> Key Card</p>
    <p><i style={{color:"#218b7a"}} class="fa-solid fa-circle-check"></i> Washing Machine</p>
    <p><i style={{color:"#218b7a"}} class="fa-solid fa-circle-check"></i> Plug Sockets</p>
    <h4><b>Occupacy</b></h4>
    <p><i style={{color:"#218b7a"}} class="fa-solid fa-users"></i> 4S,5S,10S</p>
    <p>Available Room : 20 </p>
    <Button className='mt-3 ms-3' variant="outline-dark"  style={{ width:"30%"}}><i style={{color:"#218b7a"}} class="fa-solid fa-map-location-dot"></i> Map View</Button>
    </Container>
     </Col>
    </Row>
    

    
    
    
    </div>

    </div>
  )
}

export default BookedHostelDetails