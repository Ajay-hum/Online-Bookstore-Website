// src/Components/Booking/Booking.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';

const Booking = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const title = query.get('title');
  const image = query.get('image');
  const description = query.get('description');

  return (
    <section className="booking">
      <h2>Booking Confirmation</h2>
      {title ? (
        <div className="booking-details">
          <h3>{title}</h3>
          <img src={image} alt={title} />
          <p>{description}</p>
          <p>Your booking is confirmed!</p>
        </div>
      ) : (
        <p>No booking details available.</p>
      )}
    </section>
  );
};

export default Booking;
