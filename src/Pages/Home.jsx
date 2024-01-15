import React, { useContext, useEffect, useState } from 'react'
import HostelsUcards from '../Components/HostelsUcards'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { allHostelAPI } from '../services/allAPI'
import { useNavigate } from 'react-router-dom'
import { isHomeContext } from '../context/ContextShare'


function Home({sethostelid}) {
  const {isHomeToken,setIsHomeToken} = useContext(isHomeContext)

  const navigate = useNavigate()
  const [allHostel,setAllHostel] = useState([])
  const [searchKey,setSearchKey] = useState("")

  
const getAllHostel = async()=>{

if(sessionStorage.getItem("token")){
  const token = sessionStorage.getItem("token")
  const reqHeader = {
 
      "Content-Type":"application/json",
      "Authorization":`Bearer ${token}`
  

  }
  
  const result = await allHostelAPI(searchKey,reqHeader)
  console.log(result);
  if(result.status === 200)
  {
  setAllHostel(result.data)
}
}

}

console.log(searchKey);

useEffect(()=>{
  getAllHostel()
},[searchKey])


const handleLogout = ()=>{

  sessionStorage.removeItem("token")
  sessionStorage.removeItem("existingUser")
  setIsHomeToken(false)
  navigate('/')


}


  return (
    <div>
      <Container>
      <div className='container mt-2'>
      
    <center></center>
    <center> <h1 data-aos="fade-down" data-aos-easing="linear" data-aos-duration="800" style={{color: "#1e1e38",fontFamily: "'Josefin Sans', sans-serif"}}> <span style={{color:"#218b7a"}}>D</span >iscover <span style={{color:"#218b7a"}}>Y</span>our <span style={{color:"#218b7a"}}>P</span>erfect <span style={{color:"#218b7a"}}>H</span>aven</h1> </center> </div>
   
    <Button data-aos="fade-down" data-aos-easing="linear" data-aos-duration="800" onClick={handleLogout} style={{marginLeft:"95%"}} variant="danger"><i class="fa-solid fa-share-from-square"></i> <b>Logout</b> </Button>{' '}

   <center>  <input data-aos="fade-down"  data-aos-easing="linear" data-aos-duration="800" value={searchKey} style={{ boxShadow: '2 5px 4px rgba(0, 0, 0, 0.1)'}} className='form-control w-25 border dark ' placeholder='Search Your District' onChange={(e)=>setSearchKey(e.target.value)} type="text" /></center>
   
    <Row className="container">  {allHostel?.length>0 ? allHostel?.map((item)=> (<Col md={3}>
  <HostelsUcards hostel={item} sethostelid={sethostelid}/>

    </Col>)): <center><p className='mt-5 text-danger' style={{fontSize:"40px",fontWeight:"600"}}>Oops!... No Hostel Found</p><img className='mt-5' style={{width:"40%"}} src="http://www.areaeurotrak.cat/img/error-404.png" alt="" /> </center>}

    </Row></Container>
  </div>
  )
}

export default Home