const express = require('express');
const router = express.Router();

const db = require('../database/dbConfig')

const { authenticate } = require('../auth/authenticate');

// Tab Routes
router.post('/', authenticate,  (req, res) => { 
    db('tabs')
    .insert(req.body)
    .then(id => {
        res.status(201).json(id)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.get('/', authenticate, (req, res) => {
    db('tabs').then(action => {
        res.status(200).json(action)
    }).catch(err => {
        res.status(500).json(err)
    })
})

router.get('/:id', authenticate, (req, res) => {
    const { id } = req.params;
    db('tabs')
    .where({ id })
    .first()
    .then(tab => {
        if (tab) {
          res.status(200).json(tab)
        } else {
          res.status(404).json({ message: 'Tab Not Found'})
        }
      })
    .catch(err => {
      res.status(500).json(err)
    })
  })

router.delete('/:id', authenticate,  (req, res) => {
    db('tabs')
    .where({ id: req.params.id })
    .del()
    .then(count => {
      if (count > 0) {
        res.status(204).end()
      } else {
        res.status(404).json({ message: 'Not Found'})
      }
    })
    .catch(err => {
      res.status(500).json({ error: 'Request Failed' })
    })
})

router.put('/:id', authenticate, (req, res) => {
    db('tabs')
    .where({ id: req.params.id })
    .update(req.body)
    .then(count => {
      if (count > 0) {
        res.status(200).json(count)
      } else {
        res.status(404).json({ message: 'Tab Not Found'})
      }
    })
    .catch(err => {
      res.status(500).json({ error: 'Request Failed'})
    })
  })




module.exports = router;