
const db = require('../database/dbConfig');

module.exports = {
  get,
  getById,
  insert,
  update,
  remove,
};

function get() {
  return db('tabs');
}

function getById(id) {
  return db('tabs')
    .where({ id })
    .first();
}

function insert(habit) {
  return db('tabs')
    .insert(habit)
    .then(ids => {
      return getById(ids[0]);
    });
}

function update(id, changes) {
  return db('tabs')
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db('tabs')
    .where('id', id)
    .del();
}