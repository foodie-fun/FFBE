const express = require('express');
const server = express();
const helmet = require('helmet');
const cors = require('cors');
const newUserRoutes = require('../data/routes/newUserRoutes');
const authRoutes = require('../data/routes/authRoutes');

server.use(express.json());
server.use(helmet());
server.use(cors());

server.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

server.get('/', (req, res) => {
  res.send(`<h2>Welcome to the FoodieFun Server!</h2>`)
});

server.use('/api/newuser', logger, newUserRoutes);
server.use('/api/auth', logger, authRoutes);


function logger(req, res, next) {
  console.log(`${req.method} method made from ${req.url} at ${new Date().toISOString()}`)
  next();
};

module.exports = server;
