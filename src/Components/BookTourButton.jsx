import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import loggedInState from '../utils/loggedInState'

function BookTourButton({tourId}) {

  const navigate = useNavigate()

  const handleBookTourClick = () => {
    if (!loggedInState()) return navigate('/login');

    axios.get(`http://localhost:8800/api/v1/bookings/checkout-session/${tourId}`, { withCredentials: true })
      .then(res => {
        // console.log(res.data.session.url)
        if(res.data.session.url) window.location.href = res.data.session.url;

      })
      .catch(err => null)
  }

  return (
    <button onClick={handleBookTourClick} className='bookTourButton'>Book Tour</button>
  )
}


export default BookTourButton