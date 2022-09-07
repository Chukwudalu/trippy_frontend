import React from 'react'
// import heroBg from '../assets/heroBg1.jpg'
// import { IKImage } from 'imagekitio-react';

// const urlEndpoint = 'https://ik.imagekit.io/s6fxsq8kw/';

function Hero() {
  return (
    <section className='hero'>
        {/* <div className='hero__imageContainer'>
            
            <IKImage urlEndpoint={urlEndpoint} path='users_avatars/trippyBannerImg2_HzP3MIu69.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661324244086' 
                 alt="background visual on the hero" className='hero__image'/>
        </div> */}
        <div className='hero__darkener'></div>
        <h2 className='hero__text'>Explore the world</h2>
        
        
    </section>
  )
}

export default Hero
