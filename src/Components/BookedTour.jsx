
import { LocationOnOutlined, CalendarMonthOutlined, OutlinedFlag, PeopleAltOutlined } from '@mui/icons-material'

function BookedTour({ name, price, summary, ratingsAverage, ratingsQuantity, 
    startDate, startLocation, image, maxGroupSize, numLocations, slug }) {
    
    const handleCardClick = () => {
        window.location.assign(`/tours/${slug}`)
    }
            
    return (
        <div className="card">
            <div className="card__header">
                <div className="card__header-overlay"></div>
                <img
                    src={image}
                    alt="Tour 1"
                    className="card__picture"
                />
            </div>

            <div className="card__details" onClick={handleCardClick}>
                <h3>{name}</h3>
                <p className="card__text">
                    {summary}
                </p>
                <div className='card__data__container'>
                <div className="card__data">
                    <LocationOnOutlined className='card__details__icon'/>
                    <span className='card__details__text'>{startLocation}</span>
                </div>
                <div className="card__data">
                    <CalendarMonthOutlined className='card__details__icon'/>
                    <span className='card__details__text'>{new Date(startDate).toLocaleString('en-us', {month: 'long', year: 'numeric'})}</span>
                </div>
                <div className="card__data">
                    <OutlinedFlag className='card__details__icon'/>
                    <span className='card__details__text'>{numLocations}</span>
                </div>
                <div className="card__data">
                    <PeopleAltOutlined className='card__details__icon'/>
                    <span className='card__details__text'>{maxGroupSize}</span>
                </div>
                </div>
                
            </div>

            <div className="card__footer">
                <p>
                    <span className="card__footer-value">${price}</span>
                    <span> per person</span>
                </p>
                <p className="card__ratings">
                    <span className="card__footer-value">{ratingsAverage}</span>
                    <span> rating ({ratingsQuantity})</span>
                </p>
                
            </div>
        </div>
    )
}

export default BookedTour