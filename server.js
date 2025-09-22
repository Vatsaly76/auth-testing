const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();


const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Import routes
app.use('/auth', require('./src/routes/auth'));
app.use('/protected', require('./src/routes/protected'));

app.get('/', (req, res) => {
    res.send('Welcome to the Auth API');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});