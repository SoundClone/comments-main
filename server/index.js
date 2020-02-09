// Setup
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');

const routesGET = require('./routes/routesGET.js');

const app = express();

// Middleware
app.use(cors());
app.use(express.static(path.join(__dirname, '../client/public')));
app.use(morgan('dev'));

// GET requests (routes/routesGET.js)
app.use('/api', [routesGET]);

// Initialisation
const port = 3001;
app.listen(port, () => { console.log(`listening on ${port}`); });