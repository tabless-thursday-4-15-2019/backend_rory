const express = require('express');
const router = express.Router();

const bcrypt = require('bcryptjs');

const { authenticate, generateToken } = require('../auth/authenticate');

const Users = require('../models/users-model')

const db = require('../database/dbConfig')


router.get('/:id', (req, res) => {
    const { id } = req.params
    Users
    .getUser(id)
    .then(user => {
        res.status(200).json(user);
    })
    .catch(error => {
        res.status(500).json(error);
    })
})

router.get('/:id/tabs', authenticate, (req, res) => {
    const id = req.params.id
    db('users')
      .where({id})
      .then(user => {
        db('tabs')
          .where({user_id: id})
          .then(tabs => res.status(200).json({...user[0], tabs}))
      })
      .catch(err  => res.status(500).json(err))
  })

module.exports = router;