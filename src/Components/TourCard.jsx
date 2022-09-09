import {memo, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { FavoriteBorderOutlined, Favorite,
  LocationOnOutlined, CalendarMonthOutlined, OutlinedFlag, PeopleAltOutlined } from '@mui/icons-material'
import { pink } from '@mui/material/colors';
import axios from 'axios'
import { useEffect } from 'react';
import loggedInState from '../utils/loggedInState';
// import { EncryptStorage } from 'encrypt-storage';


const TourCard = memo(function({tourId, tourName, tourImgCover, tourRating, tourRatingsQty,  
  tourSummary, tourStartLocation, tourStartDate, tourNumLocations, tourMaxGroupSize, tourSlug, 
  tourPrice, tourLiked, likeCount}) {

  
  const [ isLiked, setIsLiked ] = useState(false)
  
  const navigate = useNavigate()

  const handleCardClick = () =>{
    navigate(`/tours/${tourSlug}`)
  }

  

  useEffect(() => {
    if(tourLiked) setIsLiked(true)
  },[]) // eslint-disable-line react-hooks/exhaustive-deps

  const handleTourFavoriteIconClick = async () => {
    try {
        const tourLike = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/v1/tours/${tourId}/toggle-like`, { token : loggedInState()[1]} , { withCredentials: true});

        if(tourLike.status === 201) setIsLiked(true) 
        else setIsLiked(false)
    } catch (error) {
      // Address the logic here
      // This is because, a wrong tour Id can as well return a status code of 404
      if(error.response.status.toString() === '401') return navigate('/login')
    }
  }

  return (
    <div className="card">
        <div className="card__header">
            <div className="card__header-overlay"></div>
            <img
                src={tourImgCover}
                alt="Tour 1"
                className="card__picture"
            />
           
            <span className='card__favorite__container' onClick={handleTourFavoriteIconClick}>
              {
                !isLiked ? <FavoriteBorderOutlined className='MuiSvgIcon-fontSizeMedium'/>:
                <Favorite className={'MuiSvgIcon-fontSizeMedium'} style={{color: pink[500]}}/>
              }
              
            </span>
            
        </div>

        <div className="card__details" onClick={handleCardClick}>
            <h3>{tourName}</h3>
            <p className="card__text">
              {tourSummary}
            </p>
            <div className='card__data__container'>
              <div className="card__data">
                <LocationOnOutlined className='card__details__icon'/>
                <span className='card__details__text'>{tourStartLocation}</span>
              </div>
              <div className="card__data">
                <CalendarMonthOutlined className='card__details__icon'/>
                <span className='card__details__text'>{new Date(tourStartDate).toLocaleString('en-us', {month: 'long', year: 'numeric'})}</span>
              </div>
              <div className="card__data">
                <OutlinedFlag className='card__details__icon'/>
                <span className='card__details__text'>{tourNumLocations}</span>
              </div>
              <div className="card__data">
                <PeopleAltOutlined className='card__details__icon'/>
                <span className='card__details__text'>{tourMaxGroupSize}</span>
              </div>
            </div>
              
        </div>

        <div className="card__footer">
            <p>
                <span className="card__footer-value">${tourPrice}</span>
                <span> per person</span>
            </p>
            <p className="card__ratings">
                <span className="card__footer-value">{tourRating}</span>
                <span> rating ({tourRatingsQty})</span>
            </p>
            {
              likeCount >= 1 && <p className='card__footer__likes'>{likeCount } like{ likeCount === 1 ? '' : 's'}</p>
            }
            
        </div>
    </div>
  )
})

export default TourCard