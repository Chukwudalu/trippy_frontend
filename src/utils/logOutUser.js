import axios from 'axios';
import loggedInState from './loggedInState';
import { EncryptStorage } from 'encrypt-storage';

const createEncyptStorage = () => {
    const encryptStorage = new EncryptStorage(process.env.REACT_APP_LOCALSTORAGE_ENCRYPTION_SECRET_KEY, {
      prefix: '@base'
    }); 
    return encryptStorage
}

const logOutUser = () => {
    axios.post(`${process.env.REACT_APP_SERVER_URL}/api/v1/users/logout`, { token: loggedInState()[1]} ,{ withCredentials: true})
      .then(res => {
        if(res.data.status === 'success'){
          createEncyptStorage().removeItem('loggedInState')
          createEncyptStorage().removeItem('gat')
          window.location.reload(true)
        }
      })
      .catch(err => {
        alert(err.message)
      })
}

export default logOutUser