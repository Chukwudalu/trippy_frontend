import React from 'react'
import {useLocation, Link, useNavigate } from 'react-router-dom';
import {useState, useEffect} from 'react'
import axios from 'axios'
import { EncryptStorage } from 'encrypt-storage';
import AuthErrorBox from '../Components/AuthErrorBox';

axios.defaults.withCredentials = true;

function Auth() {
  const location = useLocation();
  
  const navigate = useNavigate()
  const authType = location.pathname.split('/')[1];

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('')

  const [authError, setAuthError] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    window.scrollTo(0, 0)
  },[])


  const createEncyptStorage = () => {
    const encryptStorage = new EncryptStorage(process.env.REACT_APP_LOCALSTORAGE_ENCRYPTION_SECRET_KEY, {
      prefix: '@base'
    }); 
    
    return encryptStorage
  }


  const encryptAndSaveToLocalStorage = (loggedInState, gat) => {
    createEncyptStorage().setItem('loggedInState', loggedInState)
    createEncyptStorage().setItem('gat', gat)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    let authData;
    if(authType === 'login'){
      authData = {
        email,
        password
      }
      axios.post(`${process.env.REACT_APP_SERVER_URL}/api/v1/users/login`, authData, { withCredentials: true})
        .then(res => {
          // const username = res.data.data.user.name.split(' ')[0]
          console.log(res.data)
          encryptAndSaveToLocalStorage(res.data.isLoggedIn, res.data.token)
          navigate('/')
        })
        .catch(err => {
          setAuthError(true);
          // setErrorMsg()
          // console.log(err.response.data.message)
          setErrorMsg(err.response.data.message)
        })

    }else if(authType === 'signup'){
      authData = {
        name,
        email,
        password,
        passwordConfirm
      }
      axios.post(`${process.env.REACT_APP_SERVER_URL}/api/v1/users/signup`, authData, { withCredentials: true})
        .then(res => { 
          // const username = res.data.data.user.name.split(' ')[0]
          encryptAndSaveToLocalStorage(res.data.isLoggedIn, res.data.token)
          navigate('/')
        })
        .catch(err => {
          setAuthError(true);
          let errorMessage = err.response.data.message.split(':')[0]
          if(errorMessage === 'Duplicate field value'){
            setErrorMsg('Email already exists')
          }else if(errorMessage === 'Invalid input data. Passwords are not the same'){
            setErrorMsg('Passwords are not the same')
          }
        })
    }else return
  }

  return (
    <section className='auth'>
        {
          authError && <AuthErrorBox errorMsg={errorMsg}/>
        }
        <form action="" className='form' onSubmit={handleFormSubmit}>
          {
            authType === 'signup' ? <h2 className='form__heading'>Create an Account</h2> : 
            <h2 className='form__heading'>Log into your account</h2>
          }
          {
            authType === 'signup' && (
              <div className='form__group'>
                <label htmlFor='name' className='form__label'>Name</label>
                <input type="name" placeholder='John Doe' required className='form__input' value={name} onChange={(e) => setName(e.target.value)}/>
              </div>
            )
          }
          <div className='form__group'>
            <label htmlFor='email' className='form__label'>Email address</label>
            <input type="email" placeholder='you@example.com' required className='form__input' value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className='form__group'>
            <label htmlFor='password' className='form__label'>Password</label>
            <input type="password" placeholder='.........' required minLength={8} className='form__input' value={password} onChange={(e) => setPassword(e.target.value)}/>
          </div>
          {
            authType === 'signup' && (
              <div className='form__group'>
                <label htmlFor='password' className='form__label'>Confirm Password</label>
                <input type="password" placeholder='.........' required minLength={8} className='form__input' value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)}/>
              </div>
            )
          }
          {
            authType === 'login' ? (<button className='auth__submit' type={'submit'}>Log In</button>) :
            (<button className='auth__submit' type={'submit'}>Create Account</button>)
          }
          
          {
            authType === 'login' && (
              <div className='auth__essentials'>
                <Link to={'/forgotPassword'} className='forgotPassword'>Forgot your password ?</Link>
                <Link to={'/signup'} className='createAccount'>Create an Account</Link>
              </div>
            )
          }

          {
            authType === 'signup' && (
              <Link to={'/login'} className='signIn'>Sign In to your account</Link>
            )
          }
          
        </form>
    </section>
  )
}

export default Auth

