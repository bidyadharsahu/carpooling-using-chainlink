const express = require('express');
const Ride = require('../models/Ride');

const router = express.Router();

router.post('/', async (req, res) => {
    const { destination, userId, price } = req.body;
    try {
        const newRide = new Ride({ destination, userId, price });
        await newRide.save();
        res.status(200).json(newRide);
    } catch (error) {
        res.status(500).json({ error: 'Failed to book ride' });
    }
});

module.exports = router;