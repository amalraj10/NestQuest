import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { allHostelAPI,allHostelnewAPI } from '../services/allAPI'
import { BASE_URL } from '../services/baseurl'
import { Link } from 'react-router-dom'


function HostelsUcards({hostel,sethostelid}) {

  const [allHostel,setAllHostel] = useState([])
  // const token = sessionStorage.getItem("token")
  // console.log(token);

  const getHotelID=(id)=>{
    
    console.log(id);
    sethostelid(id)
  }

const getAllHostel = async()=>{

if(sessionStorage.getItem("token")){
  const token = sessionStorage.getItem("token")
  console.log(token);
  const reqHeader = {
 
      "Content-Type":"application/json",
      "Authorization":`Bearer ${token}`
  

  }
  
  const result = await allHostelnewAPI(reqHeader)
  console.log(result);
  setAllHostel(result.data)
}

}
useEffect(()=>{
  getAllHostel()
},[])
  return (
    <div><div data-aos="flip-down" data-aos-easing="linear" data-aos-duration="800" className='mt-5 container'>
   
   
        <Card  className='mt-5 card shadow' style={{ width: '18rem'}}>
          <Card.Img variant="top" style={{ height: '250px' }} className='p-2' src={hostel?`${BASE_URL}/uploads/${hostel.hostelimage1}`:"https://cityhostel.axiomthemes.com/wp-content/uploads/2016/12/room-8-529x406.jpg"} />
          <Card.Body>
            <Card.Title> <b>{hostel.hostelName}</b></Card.Title>
            <Card.Text>
              <p><span>{hostel.dLmark}</span></p>
              <p><span>Sharings : {hostel.occupancy}</span></p>
              <h6><span><b>₹{hostel.rate}</b> onwards</span></h6>
            </Card.Text>
            <div className='d-flex align-items-center justify-content-between'>
              <Link to={`/hostel-detailss/${hostel._id}`} >  <Button   variant="dark">More Info</Button></Link>
              <Link to={`/hostel-booking/${hostel._id}`} >      <Button   style={{ backgroundColor:"#218b7a"}}>Book Now</Button></Link>
              

            </div>
            
          </Card.Body>
        </Card>
     
   
  </div></div>
  )
}

export default HostelsUcards