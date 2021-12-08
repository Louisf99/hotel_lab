import React from "react";
import { deleteBooking } from "../BookingsService";





const BookingsItem = ({booking, removeBooking}) => {

    console.log(booking);

    const handleDelete = () => {
        deleteBooking(booking._id).then(()=>{
            removeBooking(booking._id);
        })
    }
    return (
        <>
            <h1>Guest Name: {booking.name}</h1>
            <p>Email: {booking.email}</p>
            <p>Status {booking.checkedin}</p>
   
            <button onClick={handleDelete}> 🗑 </button>
            <hr></hr>
        </>
    )
}

export default BookingsItem;