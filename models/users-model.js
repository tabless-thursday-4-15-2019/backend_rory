const db = require('../database/dbConfig');

module.exports = {
    addUser,
    getUser,
    findBy
}

function addUser(user) {
    return db('users')
    .insert(user)
    .then(ids => {
        return getUser(ids[0]);
    })
}

function getUser(id) {
    return db('users')
        .where({ id })
        .first();
}

function findBy(filter) {
    return db('users').where(filter);
  }