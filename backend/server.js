const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const rideRoutes = require('./routes/rideRoutes');
const userRoutes = require('./routes/userRoutes');

dotenv.config();
const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api/rides', rideRoutes);
app.use('/api/users', userRoutes);

app.listen(5000, () => {
    console.log('Server running on port 5000');
});
