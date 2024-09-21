import React, { useState, useEffect } from 'react';
import axios from 'axios';

function RideHistory() {
    const [rides, setRides] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('token');
        axios.get('http://localhost:5000/api/rides/history', {
            headers: { Authorization: `Bearer ${token}` }
        })
        .then(res => setRides(res.data))
        .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <h1>Ride History</h1>
            {rides.map(ride => (
                <div key={ride._id}>
                    <h2>Destination: {ride.destination}</h2>
                    <p>Price: ${ride.price}</p>
                    <p>Status: {ride.isPaid ? 'Paid' : 'Pending'}</p>
                </div>
            ))}
        </div>
    );
}

export default RideHistory;