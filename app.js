const express = require('express');
const cors = require('cors');
const bookRoutes = require('./routes/bookRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/v1/books', bookRoutes);
app.use('/api/v1/users', userRoutes);

module.exports = app;
