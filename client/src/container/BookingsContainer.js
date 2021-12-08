import { useState, useEffect } from "react";
import BookingsForm from "../components/BookingsForm";
import BookingsList from "../components/BookingsList";
import { getBookings } from "../BookingsService"

function BookingsContainer() {

  const [bookingsList, setBookingsList] = useState([]);

  useEffect(()=>{
    getBookings().then((allBookings)=>{
    setBookingsList(allBookings);
    })
  }, []);

  const addBooking = (booking) =>{
    const x = bookingsList.map(b =>b);
    x.push(booking);
    setBookingsList(x);
  }

  const removeBooking = (id) => {
    const x = bookingsList.map(b =>b);
    const indexToDel = x.map(b => b._id).indexOf(id);
    console.log(indexToDel);

    x.splice(indexToDel, 1);
    setBookingsList(x);
  }

 

  return (
    <>
     
      <BookingsForm addBooking={addBooking}/>
      <BookingsList bookings={bookingsList} removeBooking={removeBooking} />
    </>
  );
}

export default BookingsContainer;