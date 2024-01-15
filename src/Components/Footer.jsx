import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='mt-5' style={{backgroundColor:"white",marginTop:"-1%"}}>    <div className='container '>
    <hr />
      <div className="row">
        <div className="col-lg-3 d-flex flex-column mt-5">
          <h4 style={{color:"#1e1e38"}}> <span style={{fontFamily:"'Kaushan Script', cursive", color:"#218b7a"}}>N</span>est<span style={{fontFamily:" 'Julius Sans One', sans-serif",color:"#218b7a"}}><b>Q</b></span>uest </h4>
          <p style={{textAlign:'justify',color:"#1e1e38"}}> Discover Your Ideal Nest : <br /> NestQuest - Your Trusted Platform for <br /> Effortless Hostel Exploration and Booking.</p>

        </div>
        <div className="col-lg-3 d-flex flex-column mt-5">
          <h4 style={{color:"#218b7a"}}> <b>Links</b></h4>
          <Link style={{textDecoration:'none',color:'#1e1e38'}} to={'./'}>  Landing Page</Link>
          <Link style={{textDecoration:'none',color:'#1e1e38'}} to={'./user-owner'}>Owner User</Link>
          <Link style={{textDecoration:'none',color:'#1e1e38'}} to={'./home'}>Home</Link>
         

        </div>
        <div className="col-lg-3 d-flex flex-column mt-5">
        <h3 style={{color:"#218b7a"}}> <b>Services</b></h3>
        <Link to={'https://react-bootstrap.github.io/'} style={{color:'#1e1e38' ,textDecoration:'none'}}>Free WiFi</Link>
        <Link to={'https://bootswatch.com/'} style={{color:'#1e1e38' ,textDecoration:'none'}}>Parking</Link>
      <Link to={'https://react.dev/'} style={{color:'#1e1e38' ,textDecoration:'none'}}>Food</Link>

    
      <Link to={'https://bootswatch.com/'} style={{color:'#1e1e38' ,textDecoration:'none'}}>Water</Link>

        </div>
        <div className="col-lg-3 d-flex flex-column mt-5">
        <h3 style={{color:"#218b7a"}}> <b>Contact Us</b></h3>
       <div>
       <Link style={{textDecoration:'none',color:'#1e1e38'}} to={''}> <i class="fa-solid fa-phone me-3"></i>123-456-7890
</Link>
       <br />
       <Link style={{textDecoration:'none',color:'#1e1e38'}} to={''}> <i class="fa-solid fa-envelope me-3"></i>info@NestQuest.com</Link>

       </div>
       <div className='col-lg-3 col-sm-12 icons d-flex justify-content-evenly ms-5 mt-3'>
          <Link to={'https://www.instagram.com/'} style={{ textDecoration:'none',color:"#1e1e38"}}><i class="fa-brands fa-instagram fa-2x me-4"></i></Link>
        <Link to={'https://www.facebook.com/'} style={{textDecoration:'none',color:"#1e1e38"}}><i class="fa-brands fa-facebook fa-2x me-4 "></i></Link>
        <Link to={'https://www.linkedin.com/'} style={{textDecoration:'none',color:"#1e1e38"}}><i class="fa-brands fa-linkedin-in fa-2x me-4"></i></Link>
        <Link to={'https://twitter.com/'} style={{textDecoration:'none',color:"#1e1e38"}}><i class="fa-brands fa-twitter fa-2x "></i></Link>

       </div>
      
        </div>
        <div style={{color:'#1e1e38'}} className='mt-5'><center><p>Copyright © 2023 <span style={{color:"#218b7a"}}>NestQuest</span>.Build With React.</p></center></div>
      </div></div></div>
  )
}

export default Footer