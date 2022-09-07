// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import {memo, useRef, useEffect, useState} from 'react';
// import { ChevronLeft, ChevronRight, CircleOutlined} from '@mui/icons-material'


const TourPageHero = function({image}){

  return (
    <section className='tourPageHero'>
      <img src={image} alt="" className='tourPageHeroImage'/>
    </section>
  )
}

export default TourPageHero






/* <div className="slide slide--1">
  <img src={tourPageImg3} alt="visual representation 1"/>
</div>
<div className="slide slide--2">
  <img src={tourPageImg1} alt="visual representation 2" />
</div>
<div className="slide slide--3">
  <img src={tourPageImg2} alt="visual representation 3" />
</div>
<div className="slide slide--4">
  <img src={tourPageImg4} alt="visual representation 4" />
</div>
<button className="slider__btn slider__btn--left">&larr;</button>
<button className="slider__btn slider__btn--right">&rarr;</button>
<div className="dots"></div> */