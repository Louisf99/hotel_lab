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
            <p>Guest Name: {booking.name}</p>
            <p>Email: {booking.email}</p>
            <p>Checked in: {booking.checkedin}</p>
            <button onClick={handleDelete}> 🗑 </button>
            <hr></hr>
        </>
    )
}

export default BookingsItem;