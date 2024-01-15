import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { allHostelAPI, allHostelnewAPI } from '../services/allAPI';
import { Link, useParams } from 'react-router-dom';
import { BASE_URL } from '../services/baseurl';

function HostelDetails({hostelid}) {
  const [allHostel,setAllHostel] = useState([])
  const [Hostel,setHostel] = useState({})
  const token = sessionStorage.getItem("token")
  const params = useParams()
  console.log(params.id);
  const newhostel = allHostel.find(item=>item._id===params.id)
  console.log(newhostel);


  
const getAllHostel = async()=>{


if(sessionStorage.getItem("token")){
  const token = sessionStorage.getItem("token")
  const reqHeader = {
 
      "Content-Type":"application/json",
      "Authorization":`Bearer ${token}`
  

  }
  
  const result = await allHostelnewAPI(reqHeader)
  setAllHostel(result.data)
}
// const param =useParams()
// console.log(params.id);

 console.log(allHostel.hostelid);


}
useEffect(()=>{
  getAllHostel()
},[])


  

  return (
    <div style={{overflowX: 'hidden' }}>
        <Row >
        <Col  md={7}>   
    <div style={{ paddingTop: '30px', textAlign: 'center' }}>
    <Carousel  showArrows={false} showStatus={false} >
        <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"
     data-aos-duration="1000">
          <img
            src={newhostel?`${BASE_URL}/uploads/${newhostel.hostelimage1}`:"https://cityhostel.axiomthemes.com/wp-content/uploads/2016/12/room-8-529x406.jpg"}
            style={{ height: 'auto', maxWidth: '70%' }}
            alt="Room 1"
          />
        </div>
        <div >
          <img
            src={newhostel?`${BASE_URL}/uploads/${newhostel.hostelimage2}`:"https://cityhostel.axiomthemes.com/wp-content/uploads/2016/12/room-8-529x406.jpg"}
            style={{ height: 'auto', maxWidth: '70%' }}
            alt="Room 2"
          />
        </div>
        <div>
          <img
            src={newhostel?`${BASE_URL}/uploads/${newhostel.hostelimage3}`:"https://cityhostel.axiomthemes.com/wp-content/uploads/2016/12/room-8-529x406.jpg"}
            style={{ height: 'auto', maxWidth: '70%' }}
            alt="Room 3"
          />
        </div>
      </Carousel>

    </div> </Col>
    
    <Col data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1000" md={5}className='mt-2'>   
   
    <Container>
      
  
      
   
    <div className='d-flex align-items-center justify-content-between me-2'>
    <div><h3 style={{color:"#218b7a"}}><b>{newhostel?newhostel.hostelName:"hostelname"}</b></h3>
    <h6 >{newhostel?newhostel.dLmark:"District"}</h6>

   
    <h4><b>₹ {newhostel?newhostel.rate:"rate"}</b></h4>
    </div>
   
    </div>
    <p className='mt-2' style={{textAlign:"justify"}}>
    {newhostel?newhostel.description:"description"}
    </p>
    
    <h4 ><b>ROOM Facilities</b></h4>
    <p className='mt-2'><i style={{color:"#218b7a"}} class="fa-solid fa-circle-check"></i> Free WiFi  {newhostel?newhostel.fc1:"facility1"}</p>
    <p><i style={{color:"#218b7a"}} class="fa-solid fa-circle-check"></i>  {newhostel?newhostel.fc2:"facility2"}</p>
    <p><i style={{color:"#218b7a"}} class="fa-solid fa-circle-check"></i> {newhostel?newhostel.fc3:"facility3"}</p>
    <p><i style={{color:"#218b7a"}} class="fa-solid fa-circle-check"></i> {newhostel?newhostel.fc4:"facility4"}</p>
    <p><i style={{color:"#218b7a"}} class="fa-solid fa-circle-check"></i>  {newhostel?newhostel.fc5:"facility5"}</p>
    <h4><b>Occupacy</b></h4>
    <p><i style={{color:"#218b7a"}} class="fa-solid fa-users"></i> {newhostel?newhostel.occupancy:"occupancy"}</p>
    <p>Available Room : {newhostel?newhostel.availableRoom:"availableRoom"} </p>
    <Link to={`/hostel-booking/${newhostel?._id}`} >   <Button href='/hostel-booking' className=' '   style={{ backgroundColor:"#218b7a",width:"30%"}}>Book Now</Button></Link>
    
    </Container>

     </Col>
    </Row>
    

    
    
    
    </div>
  );
}

export default HostelDetails;
