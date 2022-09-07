import { useEffect } from 'react'
import { Close} from '@mui/icons-material'


function WelcomeModal({closeModal}) {

  useEffect(() => {
    const app = document.querySelector('.content-body')
    const welcomeModalBg = document.querySelector('.welcome-modal-bg')
    const welcomeModal = document.querySelector('.welcome-modal')
    if(!app) return;
    const { top: t, left: l} =  app.getBoundingClientRect()
    const { scrollX, scrollY } = window

    welcomeModalBg.style.top = `${t + scrollY}px`
    welcomeModalBg.style.left = `${l + scrollX}px`

    welcomeModal.style.top = `${-40}px`
    
  }, [])


  

  return (
    <section className='welcome-modal-bg' onClick={closeModal}>
      <div className='welcome-modal'>
        <h1>Welcome To Trippy</h1>
        <p>Create an account to become a member</p>
        <button onClick={() => window.location.assign('/signup')}>Create an Account</button>
        <span onClick={closeModal}><Close/></span>
      </div>
    </section>
  )
}

export default WelcomeModal