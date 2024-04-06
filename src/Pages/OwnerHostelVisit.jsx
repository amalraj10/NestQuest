import React, { useContext, useEffect, useState } from 'react'
import OwnerAddedCardsVisit from '../Components/OwnerAddedCardsVisit'
import { deleteHostelAPI, ownerHostelAPI } from '../services/allAPI'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { addHostelResponseContext, editHostelResoponseContext } from '../context/ContextShare'
import HostelChanges from '../Components/HostelChanges'
import { BASE_URL } from '../services/baseurl'
import { Link, useParams } from 'react-router-dom'
import './card.css'

function OwnerHostelVisit() {
  const [ownerHostel,setOwnerHostel] = useState([])
 const {editHostelResponse,seteditHostelResponse} = useContext(editHostelResoponseContext)
  const {addHostelResponse , setAddHostelResponse} = useContext(addHostelResponseContext)
  const params = useParams()

const getOwnerHostel = async()=>{


  const token = sessionStorage.getItem("token")
  const reqHeader = {
 
      "Content-Type":"application/json",
      "Authorization":`Bearer ${token}`
  

  }
  
  const result = await ownerHostelAPI(reqHeader)
  console.log(result.data)
  setOwnerHostel(result.data)



}


useEffect(()=>{
  getOwnerHostel()
},[addHostelResponse,editHostelResponse])



const handleDelete = async(id)=>{
  const token = sessionStorage.getItem("token")
  console.log(token);
  const reqHeader = {
    "Content-Type":"application/json",
    "Authorization":`Bearer ${token}`
} 

const result = await deleteHostelAPI(id,reqHeader)
console.log(result);
if(result.status === 200){
  getOwnerHostel()
}
else{
  console.log(result.response.data);
}

}

  return (
    <div>
    <center> <h1 data-aos="fade-down" data-aos-easing="linear" data-aos-duration="800" style={{color: "#1e1e38",fontFamily: "'Josefin Sans', sans-serif"}}> <span style={{color:"#218b7a"}}>E</span >xplore <span style={{color:"#218b7a"}}>Y</span>our <span style={{color:"#218b7a"}}>A</span>dded <span style={{color:"#218b7a"}}>H</span>ostels</h1> </center>
  <Container>
  <Row className="container">
    { ownerHostel?.length>0?
  ownerHostel?.map((item)=>(
  
    <Col md={3} data-aos="flip-down" data-aos-easing="linear" data-aos-duration="800" > 
<Card  className='mt-5 card shadow ' style={{ width: '18rem'}}>
          <Card.Img variant="top" style={{ height: '250px' }} className='p-2' src={item?`${BASE_URL}/uploads/${item.hostelimage1}`:"https cityhostel.axiomthemes.com/wp-content/uploads/2016/12/room-8-529x406.jpg" } />
          <Card.Body>
            <Card.Title> <b>{item.hostelName}</b></Card.Title>
            <Card.Text>
              <p><span>{item.dLmark}</span></p>
              <p><span>Sharings : {item.occupancy}</span></p>
              <h6><span><b>₹{item.rate}</b> onwards</span></h6>
            </Card.Text>
            <div className='d-flex align-items-center justify-content-between'>
            <Link to={`/owner-Booked-User-Visit/${item?._id}`} className='text-decoration-none' > <Button style={{backgroundColor:"#218b7a"}} className='d-block mx-auto' variant="primary"><i class="fa-solid fa-bookmark"></i> Booked Users</Button></Link>

        <Button onClick={()=>handleDelete(item._id)} variant="dark"><i class="fa-solid fa-trash"></i></Button>
        
        </div>
        <div className='d-flex align-items-center justify-content-between mt-3'>
             <HostelChanges Hostel = {item}/>

        </div>

          </Card.Body>
        </Card>
</Col>



))  :
<center><p className='mt-5 text-danger' style={{fontSize:"40px",fontWeight:"600"}}>Oops!... No Hostel Found</p><img className='mt-5' style={{width:"40%"}} src="http://www.areaeurotrak.cat/img/error-404.png" alt="" /> </center>}</Row></Container>
    </div>
  )
}

export default OwnerHostelVisit