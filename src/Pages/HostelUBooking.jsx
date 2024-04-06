import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { bookingHostelAPI } from '../services/allAPI';
import Swal from 'sweetalert2';


const BookingSection = styled.div`
  background-color: #f5f5f5;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const BookingForm = styled.form`
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  max-width: 400px;
  width: 100%;
`;

const Input = styled.input`
  width: calc(100% - 20px);
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
`;

const TextArea = styled.textarea`
  width: calc(100% - 20px);
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #218b7a;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #1e6c63;
  }
`;
const isValidAadhar = (aadhar) => {
  const aadharPattern = /^\d{12}$/;
  return aadharPattern.test(aadhar);
};

const isValidMobile = (mobile) => {
  // Mobile number validation regex
  const mobilePattern = /^[6-9]\d{9}$/;
  return mobilePattern.test(mobile);
};


const HostelUBooking = () => {


  const params = useParams()
  console.log(params.id);
const paramId = params.id

const navigate = useNavigate()
  const [hostelBooking, setHostelBooking] = useState({

 uname:"",
 uemail:"",
 unumber:"",
 uaadhar:"",
 udate:"",
 usharings:"",
 umsg:"",
hostelID:params.id

  })


  const[token,setToken] = useState("")
console.log(hostelBooking);



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

   // Validate Aadhar
   if (!isValidAadhar(hostelBooking.uaadhar)) {
    Swal.fire({
      icon: 'error',
      title: 'Incorrect Form',
      text: 'Aadhar number is not valid.',
    });
    return; // Prevent form submission
  }
  if (!isValidMobile(hostelBooking.unumber)) {
    Swal.fire({
      icon: 'error',
      title: 'Incorrect Form',
      text: 'Mobile number is not valid..',
    });
    return; // Prevent form submission
  }


  const token = sessionStorage.getItem("token")
  console.log(token);
  const reqHeader = {
    "Content-Type":"application/json",
    "Authorization":`Bearer ${token}`
} 

  const{uname,uemail,unumber,uaadhar,udate,usharings,umsg} = hostelBooking
  const hostelID = params.id;
if (!uname || !uemail || !unumber || !uaadhar || !udate || !usharings || !umsg) {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Please fill the form completely!',
  });
} else {
  const result = await bookingHostelAPI(hostelBooking, reqHeader);
  console.log(result);
  if (result.status === 200) {
    console.log(result.data);
    Swal.fire({
      title: 'Success',
      text: 'Hostel Booked Successfully',
      icon: 'success',
      confirmButtonText: 'OK',
     
    });
  navigate('/home')
  }
}


}

  return (
    <BookingSection data-aos="flip-up"
    data-aos-easing="linear" data-aos-duration="800" >
      <BookingForm >
      <center> <h4 style={{color:"#1e1e38"}}> <span style={{fontFamily:"'Kaushan Script', cursive", color:"#218b7a"}}>N</span>est<span style={{fontFamily:" 'Julius Sans One', sans-serif",color:"#218b7a"}}><b>Q</b></span>uest </h4></center>

        <h2  style={{ textAlign: 'center' }}> <b>Book Your Stay</b> </h2>
        <center>      
        <Input style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }} type="text" placeholder=" Your Name"   value={hostelBooking.uname}
                onChange={(e)=>setHostelBooking({...hostelBooking,uname:e.target.value})} />
        <Input style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }} type="email" value={hostelBooking.uemail}
                onChange={(e)=>setHostelBooking({...hostelBooking,uemail:e.target.value})} placeholder=" Your Email Address" />
        <Input style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }} type="number" value={hostelBooking.unumber}
                onChange={(e)=>setHostelBooking({...hostelBooking,unumber:e.target.value})} placeholder=" Your Mobile Number" />
     <Input
          type="number"
          value={hostelBooking.uaadhar}
          onChange={(e) => setHostelBooking({ ...hostelBooking, uaadhar: e.target.value })}
          placeholder="Your Aadhar Number"
        />
        <Input style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }} type="date" value={hostelBooking.udate}
                onChange={(e)=>setHostelBooking({...hostelBooking,udate:e.target.value})} placeholder="Check-In Date" />
        <Input style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }} type="number" value={hostelBooking.usharings}
                onChange={(e)=>setHostelBooking({...hostelBooking,usharings:e.target.value})} placeholder="Number of Sharings" />
        <TextArea style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }} value={hostelBooking.umsg}
                onChange={(e)=>setHostelBooking({...hostelBooking,umsg:e.target.value})} placeholder="Additional Message" rows="4" /></center>
 
       <center> <Button onClick={handleSubmit} >Book Now</Button></center>
      </BookingForm>
    </BookingSection>
  );
};

export default HostelUBooking;
