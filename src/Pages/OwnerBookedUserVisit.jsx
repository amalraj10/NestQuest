import React, { useEffect, useState } from 'react';
import { bookedUserDtAPI, delteUserDtAPI } from '../services/allAPI';
import { Table } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

function OwnerBookedUserVisit() {
  const [bookedUdetail, setBookedUdetail] = useState([]);
  const params = useParams()
  console.log(params.id);
  const id = params.id
  const getBookedHostelDT = async () => {
    const token = sessionStorage.getItem("token");
    const reqHeader = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    };

    try {
      const result = await bookedUserDtAPI(id,reqHeader); // Replace this with your API call
      console.log(result.data);
      setBookedUdetail(result.data);
      console.log(bookedUdetail);
    } catch (error) {
      console.error(error);
    }
    
  }



  useEffect(() => {
    getBookedHostelDT();
  }, []);

  const handleDelete = async(id) =>{
    const token = sessionStorage.getItem("token")
    const reqHeader = {
   
        "Content-Type":"application/json",
        "Authorization":`Bearer ${token}`
    
  
    }
    const result = await delteUserDtAPI(id,reqHeader)
    console.log(result);
    if(result.status === 200){
      getBookedHostelDT()
    }
    else{
      console.log(result.response.data);
    }

  }

  
  return (
    <div   style={{ textAlign: 'center',height:"100vh" }}>
      <center>
        <h1 data-aos="fade-down" data-aos-easing="linear" data-aos-duration="800" style={{ color: '#1e1e38', fontFamily: "'Josefin Sans', sans-serif" }}>
          <span style={{ color: '#218b7a' }}>U</span><span>sers</span> <span style={{ color: '#218b7a' }}>W</span>ho <span style={{ color: '#218b7a' }}>B</span><span>ooked</span> <span style={{ color: '#218b7a' }}>Y</span>our
         <span style={{ color: '#218b7a' }}> H</span>ostels
        </h1>
      </center>

      <div style={{ textAlign: 'center' }} className='mb-5 mt-5'>
      <Table data-aos="flip-up"
    data-aos-easing="linear" data-aos-duration="800" striped bordered hover style={{ maxWidth: '70%', fontSize: '0.8em', margin: 'auto' }}>
        <thead>
          <tr>
            <th style={{ backgroundColor: "#218b7a" }}>Name</th>
            <th style={{ backgroundColor: "#218b7a" }}>Email</th>
            <th style={{ backgroundColor: "#218b7a" }}>Mobile No.</th>
            <th style={{ backgroundColor: "#218b7a" }}>Aadhar No.</th>
            <th style={{ backgroundColor: "#218b7a" }}>Date</th>
            <th style={{ backgroundColor: "#218b7a" }}>No. of Sharings</th>
            <th style={{ backgroundColor: "#218b7a" }}>Additional Message</th>
            <th style={{ backgroundColor: "#218b7a" }}>Delete</th>
          </tr>
        </thead>
        {bookedUdetail?.length > 0 ? 
            bookedUdetail?.map((item) => (  <tbody>
         
              <tr key={item._id}>
                <td>{item.uname}</td>
                <td>{item.uemail}</td>
                <td>{item.unumber}</td>
                <td>{item.uaadhar}</td>
                <td>{item.udate}</td>
                <td>{item.usharings}</td>
                <td>{item.umsg}</td>
                <td><button onClick={()=>handleDelete(item._id)}> <i style={{color:"red"}} class="fa-solid fa-trash"></i></button></td>
              </tr></tbody>
            )): 
            <tr>
              <td colSpan="7" style={{ textAlign: 'center' }}>
                Nothing to display
              </td>
            </tr>
        
          }
      </Table>
    </div>
    </div>
  );
}

export default OwnerBookedUserVisit;
