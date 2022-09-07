import {useState} from 'react'
import axios from 'axios'
import ResHandler from '../utils/resHandler';


function EmailEntryForPasswordReset() {
    const [ email, setEmail ] = useState('');
    const [ isSuccess, setIsSuccess] = useState(null);
    const [ successMsg, setSuccessMsg] = useState('')
    const [ isError, setIsError ] = useState(null);
    const [ errorMsg, setErrorMsg ] = useState('')

    
    const handleEmailEntryButtonClick = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8800/api/v1/users/forgotPassword', { email })
            .then(res => {
                if(res.status === 200){
                    setIsSuccess(true)
                    setSuccessMsg(res.data.message)
                }
                setEmail('')
                
            })
            .catch(err => {
                setIsError(true)
                setErrorMsg(err.response.data.message)
            })
    }


    return (
        <section className='password-reset'>
            { isSuccess ? new ResHandler(successMsg, null).displaySuccessMsg() : isError ? new ResHandler(null, errorMsg).displayErrorMsg() : ''}

            <form action="" className='password-reset__form' onSubmit={handleEmailEntryButtonClick}>
                <h2>Enter your email</h2>
                <div className='password-reset__form__group'>
                    <label htmlFor='email' className='form__label'>Email</label>
                    <input type="email" placeholder='johndoe@trippy.com' required className='form__input' value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <button className='password-reset__submit' type={'submit'} >Get Reset Link</button>
            </form>
        </section>
    )
}

export default EmailEntryForPasswordReset