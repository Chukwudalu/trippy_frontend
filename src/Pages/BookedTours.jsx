import { useState, useEffect } from 'react'
import axios from 'axios'
import BookedTour from '../Components/BookedTour';
import Error from './Error';
import ClipLoader from "react-spinners/ClipLoader";
import loggedInState from '../utils/loggedInState';

function BookedTours() {
    const [ bookedTours, setBookedTours ] = useState([]);
    const [ isError, setIsError ] = useState(false)
    const [ loading, setLoading ] = useState(true)
    const color = "#39607a";

    useEffect(() => {
        getBookedTours()
    }, [])

    useEffect(() => {
        window.scrollTo(0, 0)
    },[])
    

    const getBookedTours = () => {
        axios.post(`${process.env.REACT_APP_SERVER_URL}/api/v1/bookings/my-tours`, { token: loggedInState()[1]} ,{ withCredentials: true })
            .then(res => {
                setBookedTours(res.data.tours)
                setLoading(false)
            })
            .catch(err => {
                setIsError(true)
            })
    }

    return (
        <>
            {
                isError ? (<Error/>) : (
                    <>
                        {
                            loading ? (
                                <section className='loader'><ClipLoader color={color} loading={loading} size={100} /></section>
                            ): (
                                <section className='bookedTours'>
                                    <div>
                                        <h1>Your Booked Tours</h1>
                                    </div>
                        
                                    <section className='bookedTours__container'>
                                        {
                                            bookedTours.map((tour) => <BookedTour
                                                key={tour.id}
                                                name={tour.name}
                                                price={tour.price}
                                                summary={tour.summary}
                                                ratingsAverage={tour.ratingsAverage}
                                                ratingsQuantity={tour.ratingsQuantity}
                                                startDate={tour.startDates[0]}
                                                startLocation={tour.startLocation.description}
                                                image={tour.imageCover}
                                                maxGroupSize={tour.maxGroupSize}
                                                numLocations={tour.locations.length}
                                                slug={tour.slug}
                                            />)
                                        }
                                    </section> 
                                </section>
                            )
                        }
                    </>
                    
                    
                )
            }
        </>
        
    )
}

export default BookedTours