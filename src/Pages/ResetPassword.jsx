import {useState} from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

function ResetPassword() {
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('')

  const location = useLocation()
  const resetToken = location.pathname.split('/')[2]


  const handleResetButtonClick = (e) => {
    e.preventDefault()
    axios.patch(`http://localhost:8800/api/v1/users/resetPassword/${resetToken}`, { password, passwordConfirm })
      .then(res => {
        console.log(res)
        window.location.assign('/login')
      })
      .catch(err => console.log(err))
  }

  return (
    <section className='password-reset'>
        <form action="" className='password-reset__form' onSubmit={handleResetButtonClick}>
            <h2>Reset Password</h2>
            <div className='password-reset__form__group'>
              <label htmlFor='password' className='form__label'>Password</label>
              <input type="password" placeholder='.........' required minLength={8} className='form__input' value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>

            <div className='password-reset__form__group'>
                <label htmlFor='password' className='form__label'>Confirm Password</label>
                <input type="password" placeholder='.........' required minLength={8} className='form__input' value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)}/>
            </div>

            <button className='password-reset__submit' type={'submit'}>Go to login</button>
        </form>
    </section>
  )
}

export default ResetPassword