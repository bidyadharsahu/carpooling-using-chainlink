const mongoose = require('mongoose');

const rideSchema = new mongoose.Schema({
    destination: String,
    userId: String,
    price: Number,
    isPaid: { type: Boolean, default: false }
});

module.exports = mongoose.model('Ride', rideSchema);