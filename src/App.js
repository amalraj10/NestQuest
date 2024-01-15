import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import LandingPage from './Pages/LandingPage';
import Footer from './Components/Footer';
import OwnerUser from './Pages/OwnerUser';
import LogReg from './Pages/LogReg';
import UserLogin from './Pages/UserLogin';
import Home from './Pages/Home';
import HostelDetails from './Pages/HostelDetails';
import HostelUBooking from './Pages/HostelUBooking';
import OwnerHostelAdd from './Pages/OwnerHostelAdd';
import UserBooked from './Pages/UserBooked';
import BookedHostelDetails from './Pages/BookedHostelDetails';
import OwnerDashboard from './Pages/OwnerDashboard';
import OwnerHostelVisit from './Pages/OwnerHostelVisit';
import OwnerChanges from './Pages/OwnerChanges';
import OwnerBookedUserVisit from './Pages/OwnerBookedUserVisit';
import { useContext, useState } from 'react';
import { isDashoBoardContext, isHomeContext } from './context/ContextShare';



function App() {
  const {isdashboardToken,setIsdashboardToken} = useContext(isDashoBoardContext)
  const {isHomeToken,setIsHomeToken} = useContext(isHomeContext)
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/user-owner' element={<OwnerUser/>}/>
        <Route path='/owner-login' element={<LogReg register/>} />
       <Route path='/owner-register' element={<LogReg />} />
       <Route path='/user-login' element={<UserLogin register/>} />
       <Route path='/user-register' element={<UserLogin />} />
       <Route path='/home' element={isHomeToken?<Home />:<LandingPage/>}/>
       <Route path='/hostel-detailss/:id' element={<HostelDetails />}/>
       <Route path='/hostel-booking/:id' element={<HostelUBooking />}/>
       <Route path='/Owner-hostel-add' element={<OwnerHostelAdd/>}/>
       <Route path='/user-booked' element={<UserBooked/>}/>
       <Route path='/booked-hostel-details' element={<BookedHostelDetails />}/>
       <Route path='/owner-dashboard' element={isdashboardToken?<OwnerDashboard/>:<LandingPage/>}/>
       <Route path='/owner-hostel-visit' element={<OwnerHostelVisit/>}/>
       <Route path='/owner-changes' element={<OwnerChanges/>}/>
       <Route path='/owner-Booked-User-Visit/:id' element={<OwnerBookedUserVisit/>}/>
      

      </Routes>
<Footer/>
    </>
  );
}

export default App;
