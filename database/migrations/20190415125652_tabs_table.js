
exports.up = function(knex, Promise) {
    return knex.schema.createTable('tabs', function(tbl) {
        tbl.increments();
        tbl.string('tab')
          .notNullable()
        tbl.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
    }) 
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('tabs');
};
