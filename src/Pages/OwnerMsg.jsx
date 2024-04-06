import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import {  useParams } from 'react-router-dom';
import { OwnerMsgAPI, getOwnerSndAPI } from '../services/allAPI';
import Swal from 'sweetalert2';

function OwnerMsg() {


    const params = useParams()
    console.log(params.id);
  const paramId = params.id
  
 
    const [ownerHmsg, setOwnerHmsg] = useState({
      adminmessage:"",
      ownermessage:"",
  hostelID:params.id
  
    })
  
  
    const[token,setToken] = useState("")
  console.log(ownerHmsg);
  
  
  
  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      setToken(sessionStorage.getItem("token"))
      console.log(token);
    }
    else{
      setToken("")
    }
    },[])
  
  const handleSubmit = async(e)=>{
    e.preventDefault()
  
    
  
  
    const token = sessionStorage.getItem("token")
    console.log(token);
    const reqHeader = {
      "Content-Type":"application/json",
      "Authorization":`Bearer ${token}`
  } 
  
    const{ownermessage} = ownerHmsg
    const hostelID = params.id;
  if (!ownermessage) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Please fill the form completely!',
    });
  } else {
    const result = await OwnerMsgAPI(ownerHmsg, reqHeader);
    console.log(result);
    if (result.status === 200) {
      console.log(result.data);
      Swal.fire({
        title: 'Success',
        text: 'Message send Successfully',
        icon: 'success',
        confirmButtonText: 'OK',
       
      });
  
    }
  }
  

  
}
const [sndmsg, setSndMsg] = useState([]);

console.log(params.id);
const id = params.id
const getSndMsg = async () => {
  const token = sessionStorage.getItem("token");
  const reqHeader = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`
  };

  try {
    const result = await getOwnerSndAPI(id,reqHeader); // Replace this with your API call
    console.log("ggfg",result.data);
    setSndMsg(result.data);
    console.log(sndmsg);
  } catch (error) {
    console.error(error);
  }
  
}



useEffect(() => {
  getSndMsg();
}, []);



  return (
    <div>
<div className='mt-5' >
<Row>
<Col style={{backgroundColor:"azure"}} md={6}>
<Container>
<div className='mt-5'  style={{width:"100%",height:"80%",padding:"20px",width:"100%",height:"50%",boxShadow: '2px 10px 8px black',}} >
<p className='ms-5'  style={{fontSize:"20px",backgroundColor:"white"}}><img style={{width:"25%"}} src="https://purwosari.magetan.go.id/image/admin.png" alt="" /> <b>hi</b></p>
{sndmsg?.length > 0 ? 
            sndmsg?.map((item) => ( <p className='ms-5'  style={{fontSize:"20px",backgroundColor:"green",color:"black"}}><img style={{width:"25%"}} src="https://www.iconninja.com/files/864/851/698/admin-icon.png" alt="" /> <b>{item.ownermessage}</b></p>
            )): 
        
               <p>Nothing to display</p> 
}
          
<input value={ownerHmsg.ownermessage}
                onChange={(e)=>setOwnerHmsg({...ownerHmsg,ownermessage:e.target.value})} className='ms-5' style={{ width: "80%", height: "100%",padding: "8px" }} type="text" />

<button onClick={handleSubmit} className='ms-3'><i class="fa-solid fa-2x fa-paper-plane"></i></button>
</div>
</Container>

</Col>
<Col md={6}>

<img style={{width:"100%"}} src="https://www.pixelstalk.net/wp-content/uploads/2016/07/Wallpapers-pexels-photo.jpg" alt="" />

</Col>

</Row>



</div>


    </div>
  )
}

export default OwnerMsg

//boxShadow: ' 2px 10px 8px black'