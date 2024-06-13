const mongoose = require('mongoose');
const express = require('express');
const app = express();
require('dotenv').config(); // Load environment variables from .env file

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log('MongoDB connection error:', err));

// Middleware and routes here...

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

