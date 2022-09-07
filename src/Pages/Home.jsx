import { useEffect} from 'react'
import Hero from '../Components/Hero';
import Tours from '../Components/Tours';

function Home() {

  useEffect(() => {
    window.scrollTo(0, 0)
  },[])

  return (

    <section className='home'>
      <Hero/>
      <Tours />
    </section>
    
  )
}

export default Home

/* {
        modalState && (<WelcomeModal closeModal={closeModal} modalState={modalState}/>)
} */