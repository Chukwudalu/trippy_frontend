import { EncryptStorage } from 'encrypt-storage';

const loggedInState = () => {
    const encryptStorage = new EncryptStorage(process.env.REACT_APP_LOCALSTORAGE_ENCRYPTION_SECRET_KEY, {
        prefix: '@base'
    });
    const loggedInState = encryptStorage.getItem('loggedInState');
    const gat = encryptStorage.getItem('gat')

    return [loggedInState, gat]
}

export default loggedInState