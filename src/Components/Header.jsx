import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AccountCircleOutlined } from '@mui/icons-material'
import { EncryptStorage } from 'encrypt-storage';
import loggedInState from '../utils/loggedInState';
import axios from 'axios';
import { IKImage } from 'imagekitio-react';
import ProfileOptionsModal from './ProfileComponents/ProfileOptionsModal';
import logOutUser from '../utils/logOutUser';

const urlEndpoint = process.env.REACT_APP_IMAGEKIT_URLENDPOINT;

function Header({profileIconClicked, handleProfileIconClick}) {
  // const [ loggedIn, setIsLoggedIn ] = useState(null)
  const [ userInfo, setUserInfo ] = useState({})
  
  const navigate = useNavigate()

  useEffect(() => {
    getUserData()
  },[])

  // const createEncyptStorage = () => {
  //   const encryptStorage = new EncryptStorage(process.env.REACT_APP_LOCALSTORAGE_ENCRYPTION_SECRET_KEY, {
  //     prefix: '@base'
  //   }); 
  //   return encryptStorage
  // }

  // const decryptFromLocalStorage = () => {
  //   const loggedInState = createEncyptStorage().getItem('loggedInState');
  //   return loggedInState
  // }

  const getUserData = () => {
    if(loggedInState()[0]){
      axios.post(`${process.env.REACT_APP_SERVER_URL}/api/v1/users/me`, { token: loggedInState()[1]},{ withCredentials: true})
        .then((res) => {
          if(res.data.data.data) {
            setUserInfo(res.data.data.data)
          }
        })
        .catch(err => {
          if (err.response.status === 401){
            // setIsLoggedIn(false)
            console.log(err.message)
          }
        })
    }
  }

  return (
    <header className='header'>
      <h1 className='header__title' onClick={() => navigate('/')}>Trippy</h1>
      <nav className='header__nav'>
        {
          loggedInState()[0]? (<button className='header__auth__button' onClick={logOutUser}>Log Out</button>):
          (<button className='header__auth__button' onClick={() => navigate('/login')}>Log In</button>)
        }
        {
          loggedInState()[0] ? (
            <div className='header__nav__profile__dataContainer'>
              {/* <div className='header__nav__profile-icon__container' onClick={handleProfileIconClick} >
                <AccountCircleOutlined className='profile-icon MuiIcon-fontSizeLarge'/>
              </div> */}
              <div className='header__nav__profile-image__container' onClick={handleProfileIconClick} >
                {
                  userInfo.photo ? <img src={userInfo.photo} alt="user picture" className="header__nav__profile-image"/>:
                  <IKImage urlEndpoint={urlEndpoint} path='users_avatars/photolessLoggedInUser_CzFs4sQGE.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661236175551' 
                  alt="user picture" className="header__nav__profile-image"/>
                }
              </div>
              <p className='header__nav__profile__username'>{userInfo.name?.split(' ')[0]}</p>
              { profileIconClicked && <ProfileOptionsModal handleProfileIconClick={handleProfileIconClick} username={userInfo.name}/>}
            </div>
          ):(
            <div className="header__nav__profile__dataContainer">
              <div className='header__nav__profile-icon__container' onClick={handleProfileIconClick} >
                <AccountCircleOutlined className='profile-icon MuiIcon-fontSizeLarge'/>
              </div>
              { profileIconClicked && <ProfileOptionsModal handleProfileIconClick={handleProfileIconClick}/>}
            </div>
            
          )
          
        }
        
      </nav>
    </header>
  )
}

export default Header