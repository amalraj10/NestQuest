import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { OwnerloginAPI, OwnerregisterAPI } from '../services/allAPI';
import { isDashoBoardContext } from '../context/ContextShare';

function LogReg({ register }) {

  const {isdashboardToken,setIsdashboardToken} = useContext(isDashoBoardContext)

  const [ownerData, setownerData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const navigate = useNavigate()

  const LoginForm = register ? true : false;

  console.log(ownerData);
  //function to register
  const handleRegister = async(e)=>{
    e.preventDefault()

    const{username,email,password} = ownerData
    if (!username || !email || !password) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fill the form completely!',
      });
    } else {
      const result = await OwnerregisterAPI(ownerData);
      if (result.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: `${result.data.username} is successfully registered`,
          
        })
        .then(() => {
         
          setownerData({
            
            username: '',
            email: '',
            password: '',
          });
          navigate('/owner-login');
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: result.response.data,
        });
      }
    }
    
  }
  console.log(ownerData);
  //function to login
  const handleLogin = async(e)=>{
    e.preventDefault()
    const {email,password} = ownerData
    if (!email || !password) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fill the form completely!',
      });
    } else {
      const result = await OwnerloginAPI(ownerData);
      console.log(result);
      if (result.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Login Successful',
        }).then(() => {
          setIsdashboardToken(true)
          sessionStorage.setItem("existingOwner", JSON.stringify(result.data.existingOwner));
          sessionStorage.setItem("token", result.data.token);
    
          setownerData({
            username: '',
            email: '',
            password: '',
          });
    if(result.data.existingOwner.username=="Admin" && result.data.existingOwner.email == "admin@gmail.com" && result.data.existingOwner.password == "admin123"){
      navigate('/admin-dash')
    }
    else{
      
      navigate('/owner-dashboard');
    }
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: result.response.data,
        });
      }
    }
    
  }
  

  return (
    <div  data-aos="flip-up" data-aos-easing="linear" data-aos-duration="800"  style={{ backgroundColor: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)', overflow: 'hidden', width: '400px', maxWidth: '80%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <form style={{ display: 'flex', flexDirection: 'column', padding: '40px', width: '100%' }}>
          {LoginForm ? (
            <>
              <center><h4 style={{ color: '#1e1e38' }}><span style={{ fontFamily: "'Kaushan Script', cursive", color: '#218b7a' }}>N</span>est<span style={{ fontFamily: " 'Julius Sans One', sans-serif", color: '#218b7a' }}><b>Q</b></span>uest </h4></center>
              <center><h2 className='mt-4'><b>Login</b> </h2></center>
              <center>
                <input  value={ownerData.email} onChange={(e) => setownerData({ ...ownerData, email: e.target.value })} style={{ padding: '10px', marginBottom: '20px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '16px', width: 'calc(100% - 22px)', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }} className='mt-4' type="text" placeholder="Email" />
                <input value={ownerData.password} onChange={(e) => setownerData({ ...ownerData, password: e.target.value })} style={{ padding: '10px', marginBottom: '20px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '16px', width: 'calc(100% - 22px)', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }} type="password" placeholder="Password" />
                <button onClick={handleLogin} style={{ backgroundColor: '#218b7a', color: '#fff', border: 'none', borderRadius: '4px', padding: '12px', fontSize: '16px', cursor: 'pointer', transition: 'background-color 0.3s', width: 'calc(100% - 22px)' }} >Login</button>
                <p className='mt-2'>New User? Click Here To <Link to={'/owner-register'}>Register</Link></p>
              </center>
            </>
          ) : (
            <>
              <center><h4 style={{ color: '#1e1e38' }}><span style={{ fontFamily: "'Kaushan Script', cursive", color: '#218b7a' }}>N</span>est<span style={{ fontFamily: " 'Julius Sans One', sans-serif", color: '#218b7a' }}><b>Q</b></span>uest </h4></center>
              <center><h2 className='mt-4'><b>Register</b></h2></center>
              <center>
                <input value={ownerData.username} onChange={(e) => setownerData({ ...ownerData, username: e.target.value })} style={{ padding: '10px', marginBottom: '20px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '16px', width: 'calc(100% - 22px)', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }} className='mt-4' type="text" placeholder="Name" />
                <input value={ownerData.email} onChange={(e) => setownerData({ ...ownerData, email: e.target.value })} style={{ padding: '10px', marginBottom: '20px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '16px', width: 'calc(100% - 22px)', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }} type="email" placeholder="Email" />
                <input value={ownerData.password} onChange={(e) => setownerData({ ...ownerData, password: e.target.value })} style={{ padding: '10px', marginBottom: '30px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '16px', width: 'calc(100% - 22px)', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }} type="password" placeholder="Password" />
                <button onClick={handleRegister} style={{ backgroundColor: '#218b7a', color: '#fff', border: 'none', borderRadius: '4px', padding: '12px', fontSize: '16px', cursor: 'pointer', transition: 'background-color 0.3s', width: 'calc(100% - 22px)' }}>Register</button>
                <p className='mt-2'>Already A User? Click Here To <Link to={'/owner-login'}>Login</Link></p>
              </center>
            </>
          )}
        </form>
      </div>
    </div>
  )
}

export default LogReg;
