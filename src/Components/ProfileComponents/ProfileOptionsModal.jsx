import { useEffect } from 'react';
import useResizer from '../../utils/customHooks/useResizer'
import { EncryptStorage } from 'encrypt-storage';
import logOutUser from '../../utils/logOutUser';

function handleMouseOver() {
  const listItems = document.querySelectorAll('.profileOptionsModal__list__item');
  listItems.forEach((item) => {
    item.addEventListener('mouseover', (e) => {
      if(document.querySelector('.profileOptionsModal__list__item.list-item-hovered')){
        document.querySelector('.profileOptionsModal__list__item.list-item-hovered').classList.remove('list-item-hovered');
      }
      e.currentTarget.classList.add('list-item-hovered');
    })

    item.addEventListener('mouseleave', (e) => {
      if(document.querySelector('.profileOptionsModal__list__item.list-item-hovered')){
        document.querySelector('.profileOptionsModal__list__item.list-item-hovered').classList.remove('list-item-hovered');
      }
    })
  })
}


function ProfileOptionsModal({handleProfileIconClick, username}) {
  const [ screenWidth, mobileWidthBreakPoint ] = useResizer()

  const createEncyptStorage = () => {
    const encryptStorage = new EncryptStorage(process.env.REACT_APP_LOCALSTORAGE_ENCRYPTION_SECRET_KEY, {
      prefix: '@base'
    }); 
    return encryptStorage
  }

  const decryptFromLocalStorage = () => {
    const loggedInState = createEncyptStorage().getItem('loggedInState');
    return [loggedInState]
  }

  useEffect(() => {
    handleMouseOver()
  }, [])

  return (
      <div className='profileOptionsModal'>
        { 
          !decryptFromLocalStorage()[0] && screenWidth < 768 ? (
            <ul className='profileOptionsModal__list'>
              <li className='profileOptionsModal__list__item' onClick={() => window.location.assign('/login')}>Log In</li>
            </ul>
          ): decryptFromLocalStorage()[0] ? (
            <ul className='profileOptionsModal__list'>
              { decryptFromLocalStorage()[0] && screenWidth < 768 && (<li className='profileOptionsModal__list__item profileOptionsModal__list__item--username'>{username?.split(' ')[0]}</li>)}

              <li className='profileOptionsModal__list__item' onClick={() => {
                window.location.assign('/profile/me')
                handleProfileIconClick()
                }}>Your account</li>

              <li className='profileOptionsModal__list__item' onClick={() => window.location.assign('/booked-tours')}>Booked Tours</li>

              {screenWidth < 768 && (<li className='profileOptionsModal__list__item' onClick={logOutUser}>Log Out</li>)}

              {/* <li className='profileOptionsModal__list__item'>Billing Info</li> */}
            </ul>
          ): null
        }
        
      </div>
  )
}

export default ProfileOptionsModal