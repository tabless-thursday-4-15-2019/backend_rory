
const db = require('../database/dbConfig');

module.exports = {
  get,
  getById,
  addTab,
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

function addTab(tab) {
  return db('tabs')
    .insert(tab)
    .returning("id")
    // .then(ids => {
    //   return getById(ids[0]);
    // });
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