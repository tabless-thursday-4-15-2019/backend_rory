const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const server = express();
const Users = require('../models/users-model')
const Tabs = require('../models/tabs-model')

const bcrypt = require('bcryptjs');

const { generateToken } = require('../auth/authenticate');

const tabsRouter = require('../routes/tabs-routes');
const usersRouter = require('../routes/users-routes');

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/tabs', tabsRouter);
server.use('/users', usersRouter);

server.get('/', (req, res) => {
     res.status(200).json({ message: 'Welcome'})
});


server.post('/register', (req, res) => {
    console.log(req.body)
    let user = req.body
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;

    !user.username || !user.password
    ? res.status(400).json({ error: 'Please Provide a Username & Password'})
    : 
    Users
        .addUser(req.body)
        .then(user => {
            const token = generateToken(user);
            res.status(201).json({user, token})
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

server.post('/login', (req, res) => {

    let { username, password } = req.body;
  
  Users.findBy({ username })
      .first()
      .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);
  
          res.status(200).json({
            message: `Welcome ${user.username}!`,
            token, user_id: user.id
          });
        } else {
          res.status(401).json({ message: 'Invalid Credentials' });
        }
      })
      .catch(error => {
        res.status(500).json(error);
      });
  
});


module.exports = server;

