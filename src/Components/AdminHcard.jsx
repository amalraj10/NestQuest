import React, { useContext, useEffect, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { allHostelAPI,allHostelnewAPI, deleteHostelAPI, editAdminConfirmAPI, editHostelAPI } from '../services/allAPI'
import { BASE_URL } from '../services/baseurl'
import { Link, useParams } from 'react-router-dom'
import './cards.css'
import { HdrEnhancedSelect } from '@mui/icons-material'
import Swal from 'sweetalert2'
import { isrefreshContext } from '../context/ContextShare'


function AdminHcard({hostel,sethostelid}) {
    const { isRefreshToken,setisRefreshToken } = useContext(isrefreshContext);
    const [allHostel,setAllHostel] = useState([])
 
    const [ refresh ,setrefresh] = useState({})
    const [confirmch,setConfirmCh] = useState({})
    const [confirmdata,setconfrimdata] = useState({
   
    })
    const getHotelID=(id)=>{
      
      console.log(id);
      sethostelid(id)
    }



    const params = useParams()

    const handleconfirm = async() => {
        setConfirmCh(hostel);
        // Use the updated state value immediately
        const updatedConfirmData = {
          hostelName: hostel.hostelName,
          dLmark: hostel.dLmark,
          license: hostel.license,
          rate: hostel.rate,
          occupancy: hostel.occupancy,
          availableRoom: hostel.availableRoom,
          fc1: hostel.fc1,
          fc2: hostel.fc2,
          fc3: hostel.fc3,
          fc4: hostel.fc4,
          fc5: hostel.fc5,
          description: hostel.description,
          hostelimage1: hostel.hostelimage1,
          hostelimage2: hostel.hostelimage2,
          hostelimage3: hostel.hostelimage3,
          userId:hostel.userId,
          conformation: "confirm",
        };
      
        setconfrimdata(updatedConfirmData);
        console.log(updatedConfirmData);
        const token = sessionStorage.getItem("token")

      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
      const result = await editAdminConfirmAPI(hostel._id, updatedConfirmData, reqHeader);
      console.log(result);

      if (result.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'Confirmed',
          text: 'Confirmed Successfully',
        })
        setisRefreshToken(result)
        } else {
        console.log(result.response.data);
      }
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

    
  },[hostel])


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
    setisRefreshToken(result)

  }
  else{
    console.log(result.response.data);
  }
  
  }
  return (
    <div><div data-aos="flip-down" data-aos-easing="linear" data-aos-duration="800" className='mt-5 container'><Card  className='mt-5 card shadow ' style={{ width: '18rem'}}>
   <Card.Img variant="top" style={{ height: '250px' }} className='p-2'  src={hostel?`${BASE_URL}/uploads/${hostel.hostelimage1}`:"https://cityhostel.axiomthemes.com/wp-content/uploads/2016/12/room-8-529x406.jpg"} />
          <Card.Body>
            <Card.Title> <b>{hostel.hostelName}</b></Card.Title>
            <Card.Text>
              <p><span>{hostel.dLmark}</span></p>
              <p><span>Sharings : {hostel.occupancy}</span></p>
              <h6><span><b>₹{hostel.rate}</b> onwards</span></h6>
            </Card.Text>
      <div className='d-flex align-items-center justify-content-between'>
      <Button onClick={()=>handleDelete(hostel._id)}  variant="dark"><i class="fa-solid fa-trash"></i></Button>
        <Link to={`/admin-hostel-details/${hostel._id}`} >  <Button   variant="dark">More Info</Button></Link>



        {
            hostel?.conformation =="confirm"?
            <Button  onClick={handleconfirm} disabled={hostel?.conformation === "confirm"} style={{ backgroundColor:"#860e1f"}}>Confirmed</Button>:

            <Button  onClick={handleconfirm}  style={{ backgroundColor:"#218b7a"}}>Confirm</Button>


        }
      

      </div>
    </Card.Body>
  </Card>
 
  </div> </div>
  )
}

export default AdminHcard