import axios from 'axios'
import { EncryptStorage } from 'encrypt-storage';

const createEncyptStorage = () => {
    const encryptStorage = new EncryptStorage(process.env.REACT_APP_LOCALSTORAGE_ENCRYPTION_SECRET_KEY, {
      prefix: '@base'
    }); 
    return encryptStorage
}

const logOutUser = () => {
    axios.get('http://localhost:8800/api/v1/users/logout', { withCredentials: true})
      .then(res => {
        if(res.data.status === 'success'){
          createEncyptStorage().removeItem('loggedInState')
          window.location.reload(true)
        }
      })
      .catch(err => {
        alert(err.message)
      })
}

export default logOutUser