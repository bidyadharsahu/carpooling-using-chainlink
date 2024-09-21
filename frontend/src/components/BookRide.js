import React, { useState } from 'react';
import axios from 'axios';

function BookRide() {
    const [destination, setDestination] = useState('');
    const [price, setPrice] = useState(0);

    const handleBooking = async () => {
        const token = localStorage.getItem('token');
        try {
            const res = await axios.post('http://localhost:5000/api/rides', { destination, price }, {
                headers: { Authorization: `Bearer ${token}` }
            });
            alert('Ride booked successfully!');
        } catch (error) {
            alert('Booking failed');
        }
    };

    return (
        <div>
            <h1>Book a Ride</h1>
            <input type="text" value={destination} onChange={(e) => setDestination(e.target.value)} placeholder="Enter destination" />
            <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Enter price" />
            <button onClick={handleBooking}>Book Ride</button>
        </div>
    );
}

export default BookRide;