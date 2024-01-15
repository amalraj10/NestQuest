import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginAPI, registerAPI } from '../services/allAPI';
import Swal from 'sweetalert2';
import { isHomeContext } from '../context/ContextShare';

function UserLogin({ register }) {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const navigate = useNavigate()
  const {isHomeToken,setIsHomeToken} = useContext(isHomeContext)

  const UserLoginForm = register ? true : false;

  console.log(userData);
  //function to register
  const handleRegister = async(e)=>{
    e.preventDefault()

    const{username,email,password} = userData
    if (!username || !email || !password) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fill the form completely!',
      });
    } else {
      const result = await registerAPI(userData);
      if (result.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: `${result.data.username} is successfully registered`,
        }).then(() => {
          setUserData({
            username: '',
            email: '',
            password: '',
          });
          navigate('/user-login');
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
  console.log(userData);
  //function to login
  const handleLogin = async(e)=>{
    e.preventDefault()
    const {email,password} = userData
    if (!email || !password) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fill the form completely!',
      });
    } else {
      const result = await loginAPI(userData);
      console.log(result);
      if (result.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Login Successful',
        }).then(() => {
          setIsHomeToken(true)
          sessionStorage.setItem("existingUser", JSON.stringify(result.data.existingUser));
          sessionStorage.setItem("token", result.data.token);
    
          setUserData({
            username: '',
            email: '',
            password: '',
          });
    
          navigate('/home');
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
    <div data-aos="flip-up" data-aos-easing="linear" data-aos-duration="800">
      <div  style={{ backgroundColor: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', fontFamily: 'Arial, sans-serif' }}>
        <div style={{ backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)', overflow: 'hidden', width: '400px', maxWidth: '80%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <form style={{ display: 'flex', flexDirection: 'column', padding: '40px', width: '100%' }}>
            {UserLoginForm ? (
              <>
                <center>
                  <h4 style={{ color: '#1e1e38' }}>
                    {' '}
                    <span style={{ fontFamily: "'Kaushan Script', cursive", color: '#218b7a' }}>N</span>est
                    <span style={{ fontFamily: " 'Julius Sans One', sans-serif", color: '#218b7a' }}>
                      <b>Q</b>
                    </span>uest{' '}
                  </h4>
                </center>
                <center>
                  <h2 className="mt-4">
                    <b>Login</b>
                  </h2>
                </center>
                <input className="mt-4" type="text" placeholder="Email"  onChange={(e) => setUserData({ ...userData, email: e.target.value })} style={{ padding: '10px', marginBottom: '20px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '16px', width: 'calc(100% - 22px)',boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }} />
                <input type="password"  onChange={(e) => setUserData({ ...userData, password: e.target.value })} placeholder="Password" style={{ padding: '10px', marginBottom: '30px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '16px', width: 'calc(100% - 22px)',boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }} />
                <button onClick={handleLogin} style={{ backgroundColor: '#218b7a', color: '#fff', border: 'none', borderRadius: '4px', padding: '12px', fontSize: '16px', cursor: 'pointer', transition: 'background-color 0.3s', width: 'calc(100% - 22px)' }}>
                  Login
                </button>
                <p className="mt-2">
                  New User? Click Here To <Link to={'/user-register'}>Register</Link>
                </p>
              </>
            ) : (
              <>
                <center>
                  <h4 style={{ color: '#1e1e38' }}>
                    {' '}
                    <span style={{ fontFamily: "'Kaushan Script', cursive", color: '#218b7a' }}>N</span>est
                    <span style={{ fontFamily: " 'Julius Sans One', sans-serif", color: '#218b7a' }}>
                      <b>Q</b>
                    </span>uest{' '}
                  </h4>
                </center>
                <center>
                  <h2 className="mt-4">
                    <b>Register</b>
                  </h2>
                </center>
                <input className="mt-4" type="text" placeholder="Name" value={userData.username} onChange={(e) => setUserData({ ...userData, username: e.target.value })} style={{ padding: '10px', marginBottom: '20px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '16px', width: 'calc(100% - 22px)',boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }} />
                <input type="email" placeholder="Email" value={userData.email} onChange={(e) => setUserData({ ...userData, email: e.target.value })} style={{ padding: '10px', marginBottom: '20px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '16px', width: 'calc(100% - 22px)',boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }} />
                <input type="password" placeholder="Password" value={userData.password} onChange={(e) => setUserData({ ...userData, password: e.target.value })} style={{ padding: '10px', marginBottom: '30px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '16px', width: 'calc(100% - 22px)',boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }} />
                <button onClick={handleRegister} style={{ backgroundColor: '#218b7a', color: '#fff', border: 'none', borderRadius: '4px', padding: '12px', fontSize: '16px', cursor: 'pointer', transition: 'background-color 0.3s', width: 'calc(100% - 22px)',boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                  Register
                </button>
                <p className="mt-2">
                  Already A User? Click Here To <Link to={'/user-login'}>Login</Link>
                </p>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserLogin;
