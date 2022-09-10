import { useEffect } from 'react'
import axios from 'axios'

function CheckoutSuccess() {
  // This is only temporary
  useEffect(() => {
    handleCreateBooking()
  })

  // This is only temporary
  const handleCreateBooking = () => {
    const searchParams = new URLSearchParams(window.location.search)
    axios.post(`${process.env.REACT_APP_SERVER_URL}/api/v1/bookings/create-booking-checkout`, {
      tour: searchParams.get('tour'),
      user: searchParams.get('user'),
      price: searchParams.get('price')
    },
    { withCredentials: true }
    ).then((res) => {
      if(res.data.booked) console.log(res.data.booked)
      
    })
      .catch(err => null)
  }

  return (
    <div className='checkout-success'>
      <div> 
        <h2>Your Tour Purchase was Successfull</h2>
        <button onClick={ window.location.assign('/')}>Go to home</button>
      </div>
        
    </div>
  )
}

export default CheckoutSuccess