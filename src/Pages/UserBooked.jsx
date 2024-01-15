import React from 'react'
import UserBookedCards from '../Components/UserBookedCards'

function UserBooked() {
  return (
    <div>
    <center> <h1 style={{color: "#1e1e38",fontFamily: "'Josefin Sans', sans-serif"}}> <span style={{color:"#218b7a"}}>D</span >iscover <span style={{color:"#218b7a"}}>Y</span>our <span style={{color:"#218b7a"}}>B</span>ooked <span style={{color:"#218b7a"}}>H</span>ostels</h1> </center>


        <UserBookedCards/>
    </div>
  )
}

export default UserBooked