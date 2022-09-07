import { useEffect, useState } from 'react'
import axios from 'axios'
import TourCard from '../Components/TourCard'
import loggedInState from '../utils/loggedInState';


function Tours() {

  const [ tours, setTours ] = useState([]);
  const [ userLikedTours, setUserLikedTours ] = useState([])

  

  const getAllTours = (setTours) => {
    axios.get('http://localhost:8800/api/v1/tours', { withCredentials: true })
      .then(res => {
        setTours(res.data.data.data)
      })
      .catch(err => {
        if(err) return null
      })
  }

  const getLikedTours = () => {
    if(!loggedInState()) return 

    axios.get('http://localhost:8800/api/v1/tours/liked-tours', { withCredentials: true})
      .then(res => {
        setUserLikedTours(res.data.data.likedToursId)
        // console.log(res.data.data)
      })
      .catch(err => null)
  }

  useEffect(() => {
    getAllTours(setTours)

  }, [])

  useEffect(() => {
    getLikedTours()
    
  }, [])

  

  return (
    <section className='tours'>
      <h2 className='tours__heading'>All Tours</h2>
      <section className='tours__list'>
        {
          // Array.apply(null, {length: 5}).map((card, i) => <TourCard key={i}/>)
          tours && tours.map((tour) => <TourCard 
            key={tour.id} 
            tourId={tour.id}
            tourName={tour.name}
            tourImgCover={tour.imageCover}
            tourSummary={tour.summary}
            tourStartLocation={tour.startLocation.description}
            tourStartDate={tour.startDates[0]}
            tourNumLocations={tour.locations.length}
            tourMaxGroupSize={tour.maxGroupSize}
            tourPrice={tour.price}
            tourRating={tour.ratingsAverage}
            tourRatingsQty={tour.ratingsQuantity}
            tourSlug={tour.slug}
            tourLiked={userLikedTours.includes(tour.id)}
            likeCount = {tour.tourLikers.length}
          />)
        }
      </section>
    </section>
  )
}

export default Tours