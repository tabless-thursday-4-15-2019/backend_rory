const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const server = express();
const Users = require('../models/users-model')
const Tabs = require('../models/tabs-model')

const tabsRouter = require('../routes/tabs-routes');
const usersRouter = require('../routes/users-routes');

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/tabs', tabsRouter);
server.use('/api/users', usersRouter);

server.get('/', (req, res) => {
  res.send('Welcome to the Jungle 🌴');
});


module.exports = server;