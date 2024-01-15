import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img1 from '../images/36699953.jpg';


function LandingPage() {
  return (
    <div style={{overflow:"hidden"}}>
    
      <div   className='mt-4 pt-5'>
      <div className="container mt-4">
        <Row className="container mt-5">
          <Col data-aos="fade-right" data-aos-easing="linear"    data-aos-duration="1000"  md={6}>
            <h1 style={{color: "#1e1e38",fontFamily: "'Josefin Sans', sans-serif",fontSize: 60,fontWeight:"600" }} className='mt-5' > <span style={{color:"#218b7a"}}>F</span>ind <br /> A <span style={{color:"#218b7a"}}>B</span>est <span style={{color:"#218b7a"}}>P</span>lace <span style={{color:"#218b7a"}}>T</span>o <br /> <span style={{color:"#218b7a"}}>S</span>tay</h1>
            <p>NestQuest simplifies hostel hunting. Find, compare, and book hostels easily. Owners can effortlessly showcase spaces and connect with travelers—all in one place.</p>
            <Link to={'/user-owner'} className='btn rounded' style={{ backgroundColor: "#218b7a", color: "white" }}>
            Get Started
          </Link>          </Col>
          <Col data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1000" md={6}>
            <img style={{ width: '100%' }} src="https://cdn.dribbble.com/users/544218/screenshots/3701078/ico-residentialcommercial.gif" alt="no img" />
          </Col>
        </Row>
      </div> </div>

      <Row className='mt-5'>
        <Col data-aos="flip-left" data-aos-easing="linear" data-aos-duration="1000" md={7}>
          <h2 className='ms-md-5 mt-5' style={{ fontFamily: "'Philosopher', sans-serif", color: "#1e1e38" }}>
            Welcome to <span style={{ color: "#1e1e38" }}> <span style={{ fontFamily: "'Kaushan Script', cursive", color: "#218b7a" }}>N</span>est<span style={{ fontFamily: " 'Julius Sans One', sans-serif", color: "#218b7a" }}><b>Q</b></span>uest </span>:
            <br /><span className='mt-4'> Simplifying <span style={{ color: "#218b7a" }}>Hostel</span> Hunting </span>
          </h2>
          <Container>
            <p className='ms-md-5 mt-4' style={{ listStyle: "none", fontSize: "1.2em", fontWeight: "500", fontFamily: "'Josefin Sans', sans-serif", color: "#1e1e38", textAlign: "justify" }}>
              At NestQuest, we're passionate about making hostel hunting a hassle-free experience. Our platform is meticulously crafted to streamline your search for the perfect hostel across diverse districts.
            </p>
          </Container>

          <h2 className='ms-md-5 mt-5' style={{ fontFamily: "'Philosopher', sans-serif", color: "#1e1e38" }}>
            <span style={{ color: "#1e1e38" }}> Our <span style={{ color: "#218b7a" }}>M</span>ission</span>
          </h2>
          <Container>
            <p className='ms-md-5 mt-4' style={{ listStyle: "none", fontSize: "1.2em", fontWeight: "500", fontFamily: "'Josefin Sans', sans-serif", color: "#1e1e38", textAlign: "justify" }}>
              We believe in connecting travelers with their ideal hostel accommodations effortlessly. NestQuest aims to revolutionize how travelers discover, compare, and book hostels, all through a user-friendly interface designed to simplify the process.
            </p>
          </Container>

          <h2 className='ms-md-5 mt-5' style={{ fontFamily: "'Philosopher', sans-serif", color: "#1e1e38" }}>
            <span style={{ color: "#1e1e38" }}> What We  <span style={{ color: "#218b7a" }}>O</span>ffer</span>
          </h2>
          <Container>
            <p className='ms-md-5 mt-4' style={{ listStyle: "none", fontSize: "1.2em", fontWeight: "500", fontFamily: "'Josefin Sans', sans-serif", color: "#1e1e38", textAlign: "justify" }}>
              For travelers, NestQuest is your gateway to exploring an array of hostels. Our platform allows you to effortlessly find, compare, and book accommodations that suit your preferences, ensuring a seamless experience as you traverse new destinations. Exclusive to hostel owners, NestQuest provides a powerful tool to showcase your space and connect with enthusiastic travelers. We empower hostel owners to effortlessly add their properties, enabling them to reach a broader audience and create memorable stays for guests.
            </p>
          </Container>
        </Col>
        <Col data-aos="flip-right"  data-aos-easing="linear" data-aos-duration="1000" md={4} className='mt-5 md-5' >
          <div className='mt-5' >
          <div  style={{backgroundColor: "#218b7a",padding:"20px",borderRadius:"20px",boxShadow: ' 2px 10px 8px black'}} className='ms-md-5 mt-5 '>
            <h3 style={{ color:"white",fontSize: '2em' }}  className='mt-5'>Stay Longer</h3>
            <h3 style={{color:"white",fontSize: '2em'}}>Save More !</h3>
            
            <p style={{color: "#1e1e38",fontFamily: "'Josefin Sans', sans-serif"}} className='ms-3'>It's simple: the longer you stay, <br />the more you save!</p>
            <div
              style={{
                borderLeft: '2px solid black',
                height: '120px',
              }}
            >
              <p style={{color: "#1e1e38",fontFamily: "'Josefin Sans', sans-serif"}} className='ms-2'>Save up to 30% on daily rate for <br /> stays longer than 14 nights</p>
             
              <p style={{color: "#1e1e38",fontFamily: "'Josefin Sans', sans-serif"}} className='ms-2'>Save up to 20% off the nightly  rate <br /> on stays between 7-14 nights</p>
            </div>
            <Link  to={'/user-owner'} className='btn rounded ms-3 mt-3' style={{ backgroundColor: "black", color: "white" }}>
            Get Started
          </Link>
          </div>
          
          </div>
        </Col>
      </Row>

      <Row className='mt-5'>
        <Col data-aos="zoom-out-up" data-aos-easing="linear" data-aos-duration="1000" md={6} className='ms-md-5'>
          <h2 className='ms-md-5' style={{ fontFamily: "'Philosopher', sans-serif", color: "#1e1e38" }}>
            Why to Join   <span style={{ color: "#1e1e38" }}> <span style={{ fontFamily: "'Kaushan Script', cursive", color: "#218b7a" }}>N</span>est<span style={{ fontFamily: " 'Julius Sans One', sans-serif", color: "#218b7a" }}><b>Q</b></span>uest ?</span>
          </h2>
          <ul className='ms-md-5 mt-4' style={{ listStyle: "none", fontSize: "1.2em", fontWeight: "500", fontFamily: "'Josefin Sans', sans-serif", color: "#1e1e38" }}>
            <li><i className="fas fa-hand-holding-dollar" style={{ color: "#218b7a" }}></i>   Flexible stays @ affordable prices with end-to-end digital experience</li>
            <li className='mt-3'><i className="fas fa-couch" style={{ color: "#218b7a" }}></i>    Well maintained, beautiful fully furnished homes</li>
            <li className='mt-3'><i className="fas fa-utensils" style={{ color: "#218b7a" }}></i>    Delicious food, high-speed internet, trained house-keeping</li>
            <li className='mt-3'><i className="far fa-handshake" style={{ color: "#218b7a" }}></i>   Simple interface for easy bookings</li>
          </ul>
          <img className='mt-5 w-100' src="https://www.colive.com/assets/images/home/section2/joincolive.png" alt="" />
        </Col>
        <Col data-aos="zoom-out-up" data-aos-easing="linear" data-aos-duration="1000" md={5}>
          <img style={{ width: '100%' }} src={img1} alt="" />
        </Col>
      </Row>
  
    </div>
  )
}

export default LandingPage;
