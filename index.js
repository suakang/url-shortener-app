const express = require('express');
const connectDB = require('./config/db');

const app = express();

// connect to db
connectDB();

// allow json value into data
app.use(express.json({ extended: false }));

// define routes
app.use('/', require('./routes/index'));
app.use('/api/url', require('./routes/url'));

const PORT = 5000;

app.listen(PORT, ()=> console.log(`Server is running on port ${PORT}`));