import React from 'react';

function Booking() {
  return (
    <div className="booking">
      <h1>Book a Ride</h1>
      <p>Fill out the form below to schedule your ride. We'll get you moving in no time!</p>
      <form className="booking-form">
        <input type="text" placeholder="Full Name" />
        <input type="text" placeholder="Pickup Location" />
        <input type="text" placeholder="Dropoff Location" />
        <input type="date" />
        <input type="time" />
        <input type="tel" placeholder="Phone Number" />
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
}

export default Booking;
