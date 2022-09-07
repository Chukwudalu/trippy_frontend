import {useEffect, useState} from 'react';
import axios from 'axios';
// import { EncryptStorage } from 'encrypt-storage';
// import guide2 from '../../assets/tourGuideImg/guide2.jpg'



function Settings() {
    const [name, setName] = useState('');
    const [ email, setEmail ] = useState('')
    const [password, setPassword] = useState('')
    const [oldPassword, setOldPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [ photo, setPhoto ] = useState()
    const [photoUrl, setPhotoUrl] = useState('')

    useEffect(() => {
        getUserData()
    }, [])
    
    const getUserData = () => {
        axios.get('http://localhost:8800/api/v1/users/me', { withCredentials: true })
            .then(res => {
                setName(res.data.data.data.name)
                setEmail(res.data.data.data.email)
                setPhotoUrl(res.data.data.data.photo)
            })
            .catch(err => console.log(err.message))
    }

    const handleUserPhotoChange = (e) => {
        setPhoto(e.target.files[0])
    }

    // const createEncyptStorage = () => {
    //     const encryptStorage = new EncryptStorage(process.env.REACT_APP_LOCALSTORAGE_ENCRYPTION_SECRET_KEY, {
    //       prefix: '@base'
    //     }); 
    //     return encryptStorage
    // }

    // const encryptAndSaveToLocalStorage = (res) => {
    //     createEncyptStorage().setItem('name', res.data.data.user.name.split(' ')[0])
    //     createEncyptStorage().setItem('photo', res.data.data.user.photo)
    // }
    
    // const decryptFromLocalStorage = () => {
    //     const loggedInState = createEncyptStorage().getItem('loggedInState');
    //     const username = createEncyptStorage().getItem('username');
    //     const role = createEncyptStorage().getItem('role');
    //     const photo = createEncyptStorage().getItem('photo');
    //     return [loggedInState, username, role, photo]
    // }

    const updateUserData = () => {
        const formData = new FormData()
        formData.append('name', name);
        formData.append('email', email);
        formData.append('photo', photo)
        axios.patch('http://localhost:8800/api/v1/users/updateMe', formData , { withCredentials: true })
            .then(res => {
                setName(res.data.data.user.name)
                setEmail(res.data.data.user.email)
                setPhotoUrl(res.data.data.user.photo)
                window.location.reload(true)
            })
            .catch(err => console.log(err.message))
       
    }

    const updateUserPassword = () => {
        axios.patch('http://localhost:8800/api/v1/users/updatePassword', 
        { oldPassword, password, passwordConfirm }, { withCredentials: true })
            .then(res => console.log(res))
            .catch(err => console.log(err.message))
    }


    const handleSaveSettingsClick = (e) => {
        e.preventDefault()
        updateUserData()
    }

    const handleSavePasswordClick = (e) => {
        e.preventDefault()
        updateUserPassword()
        setOldPassword('')
        setPassword('')
        setPasswordConfirm('')
    }

    return (
        <section className='profile__settings'>
            <div className='profile__settings__basicInfo'>
                <form action="" className='profile__form' onSubmit={handleSaveSettingsClick}>
                    <h2>Your Account Settings</h2>
                    <div className='profile__form__group'>
                        <label htmlFor='name' className='profile__form__label'>Name</label>
                        <input type="name" required className='profile__form__input' value={name} onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className='profile__form__group'>
                        <label htmlFor='email' className='profile__form__label'>Email</label>
                        <input type="email" required className='profile__form__input' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className='profile__form__photo-group'>
                        <div className='profile__photo__container'>
                            <img src={photoUrl} alt="user profile photo" className='profile__photo'/>
                        </div>
                        {/* <button className='profile__photo__change__btn'>Choose new photo</button> */}
                        <input type="file" accept='image/*' name="photo" id="photo" className='profile__photo__change__btn' onChange={handleUserPhotoChange} />
                        {/* <label htmlFor="photo">Choose new photo</label> */}
                    </div>
                    <div className='settings__btn__container'>
                        <button className='settings__btn' type='submit'>Save Settings</button> 
                    </div>
                </form>
            </div>

            <div className='profile__settings__basicInfo  profile__settings__basicInfo--password'>
                <form action="" className='profile__form' onSubmit={handleSavePasswordClick}>
                    <h2>Password Change</h2>
                    <div className='profile__form__group'>
                        <label htmlFor='oldPassword' className='profile__form__label'>Current Password</label>
                        <input type="password" required className='profile__form__input' value={oldPassword} onChange={(e) => {
                            setOldPassword(e.target.value)
                            
                            }}/>
                    </div>
                    <div className='profile__form__group'>
                        <label htmlFor='password' className='profile__form__label'>New Password</label>
                        <input type="password" required className='profile__form__input' value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div className='profile__form__group'>
                        <label htmlFor='passwordConfirm' className='profile__form__label'>Confirm Password</label>
                        <input type="password" required className='profile__form__input' value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)}/>
                    </div>
            
                    <div className='settings__btn__container'>
                        <button className='settings__btn'>Save Password</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Settings