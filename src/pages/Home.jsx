import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <h1>Welcome to Book_A_Taxi</h1>
      <p>Your ride, just a tap away.</p>
      <Link to="/booking">
        <button className="booking-form button">Book Now</button>
      </Link>
    </div>
  );
}

export default Home;
