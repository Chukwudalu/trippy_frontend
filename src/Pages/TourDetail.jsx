import { useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import ClipLoader from "react-spinners/ClipLoader";
import TourPageHero from '../Components/TourPageHero'
import TourPageMainData from '../Components/TourPageMainData'
import Map from '../Components/Map';




function TourDetail() {
    const location = useLocation()
    const tourSlug = location.pathname.split('/')[2]

    const [ tourData, setTourData ] = useState({})
    const [ loading, setLoading ] = useState(true)
    const color = "#39607a"
    
    // tour related processes
    useEffect(() => {
        getTourData()
    }, [])

    useEffect(() => {
        window.scrollTo(0, 0)
    },[])
    

    const getTourData = () => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/api/v1/tourFromSlug/${tourSlug}`)
            .then(res => {
                setTourData(res.data.tour)
                setLoading(false)
            })
            .catch(err => console.log(err.message))
    }

    
    
    // Array of objects containing the slides data for the TourPageHeroSlider

    return (
        <>
            {
                loading ? (
                    <section className='loader'><ClipLoader color={color} loading={loading} size={100} /></section>
                ) :
                (
                    <section className='tourDetail'>
                        {/* <ClipLoader color={color} loading={loading} size={150} /> */}
                        <TourPageHero image={tourData.imageCover}/> 
                        <TourPageMainData tourDetail={tourData}/>
                        <Map tourDetail={tourData}/>
                    </section>
                )
            }
        </>
        // <section className='tourDetail'>
            
        //     {/* <ClipLoader color={color} loading={loading} size={150} /> */}
        //     <TourPageHero image={tourData.imageCover}/> 
        //     <TourPageMainData tourDetail={tourData}/>
        //     <Map tourDetail={tourData}/>
        // </section>
    )
}

export default TourDetail