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
    axios.post('http://localhost:8800/api/v1/bookings/create-booking-checkout', {
      tour: searchParams.get('tour'),
      user: searchParams.get('user'),
      price: searchParams.get('price')
    },
    { withCredentials: true }
    ).then((res) => {
      if(res.data.booked) console.log(res.data.booked)
      
    })
      .catch(err => console.log(err.message))
  }

  return (
    <div>
        <h2>Your Tour Purchase was Successfull</h2>
        
    </div>
  )
}

export default CheckoutSuccess