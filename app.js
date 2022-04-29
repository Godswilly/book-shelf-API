
const express = require('express');
const cors = require('cors');
const bookRoutes = require('./routes/bookRoutes');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/v1/books', bookRoutes);

module.exports = app;
