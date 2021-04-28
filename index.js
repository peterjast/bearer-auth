'use strict';

// Start up DB Server
const dotenv = require('dotenv');
const mongoose = require('mongoose')
const server = require('./src/server.js');

dotenv.config();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};

mongoose.connect(MONGODB_URI, options)
  .then(() => {
    server.start(PORT);
  })
  .catch(e => console.error('Could not start server', e.message));