import BookingsItem from "./BookingsItem"

const BookingsList = ({bookings, removeBooking}) => {

    const bookingsList = bookings.map((booking) =>{
     return <BookingsItem booking={booking} key={booking._id} removeBooking={removeBooking} />
    });
    
    return (
        <>
            {bookingsList}
        </>
    );

}

export default BookingsList;