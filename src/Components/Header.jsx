import React from 'react'

import Navbar from 'react-bootstrap/Navbar';

function Header({ownerDashboard}) {
  return (
    <div>
   <Navbar className="bg- justify-content-center" style={{backgroundColor:"white",overflow:"hidden"}}>
      <Navbar.Brand href="./" className="text-center" >
        <h4 href='./' style={{ color: 'black' }}>
         <span style={{fontFamily:"'Kaushan Script', cursive",color:"#218b7a"}}>N</span>est<span style={{fontFamily:" 'Julius Sans One', sans-serif",color:"#218b7a"}}><b>Q</b></span>uest
        </h4>
        
      </Navbar.Brand>
    </Navbar>

    </div>
  )
}

export default Header