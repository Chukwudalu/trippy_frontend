
import './Sass/main.scss'

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useState, useEffect } from 'react'
import Header from "./Components/Header";
import Home from './Pages/Home';
import TourDetail from './Pages/TourDetail';
import Auth from './Pages/Auth';
import Account from './Pages/Account';
import ResetPassword from './Pages/ResetPassword';
import EmailEntryForPasswordReset from './Pages/EmailEntryForPasswordReset';
import Backdrop from './Components/Backdrop';
import Settings from './Components/ProfileComponents/Settings';
import CheckoutSuccess from './Components/CheckoutSuccess';
import NotFound from './Components/NotFound';
import BookedTours from './Pages/BookedTours';
import loggedInState from './utils/loggedInState';
import WelcomeModal from './Components/WelcomeModal';
import Footer from './Components/Footer';


function App() {

  const [profileIconClicked, setProfileIconClicked] = useState(false);
  const [ loggedIn, setIsLoggedIn ] = useState(false);
  const [modalState, setModalState] = useState(false)

  const handleProfileIconClick = () => {
    setProfileIconClicked(prev => !prev)
  }

  const handleLoggedInState = () => {
    setIsLoggedIn(prev => !prev)
  }

  const closeModal = () => {
    setModalState(false)
  }


  // useEffect(() => {
  //   if(document.cookie.indexOf('visited=true') == -1 && !loggedInState()){
  //     if(window.location.href.split('/')[3] !== 'login' || window.location.href.split('/')[3] !== 'signup'){
  //       setTimeout(()=>{
  //         setModalState(true)
  //       }, 7000)
        
  //     }
  //     let year = 1000*60*60*24*365;
  //     let expires = new Date((new Date()).valueOf() + year);
  //     document.cookie = "visited=true;expires=" +expires.toUTCString();
  //   }
  // }, [])

  return (
    <>
      <BrowserRouter>
        <Header profileIconClicked={profileIconClicked} handleProfileIconClick={handleProfileIconClick}/>

        <section className='content-body'>
          { profileIconClicked && <Backdrop handleProfileIconClick={handleProfileIconClick}/>}
          {/* {
            modalState && (<WelcomeModal closeModal={closeModal} modalState={modalState}/>)
          } */}
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/tours/:slug' element={<TourDetail/>}/>
            <Route path='/login' element={<Auth handleLoggedInState={handleLoggedInState} loggedIn={loggedIn}/>} />
            <Route path='/signup' element={<Auth handleLoggedInState={handleLoggedInState} loggedIn={loggedIn}/>} />
            <Route path='/profile/me' element={<Account/>}/>
            <Route path='/resetPassword/:resetToken' element={<ResetPassword/>}/>
            <Route path='/forgotPassword' element={<EmailEntryForPasswordReset/>}/>
            <Route path='/account' element={<Settings/>}/>
            <Route path='/checkout-success/*' element={<CheckoutSuccess/>}/>
            <Route path='*' element={<NotFound/>}/>
            <Route path='/booked-tours' element={<BookedTours/>}/>
          </Routes>
        </section>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;

  // const closeModal = () => {
  //   setModalState(false)
  // }

  // useEffect(() => {
  //   window.scrollTo(0, 0)
  // },[])

  // useEffect(() => {
    
  //   setTimeout(()=>{
  //     setModalState(true)
  //   }, 4000)
  //   console.log('hllo')
  // }, [])

