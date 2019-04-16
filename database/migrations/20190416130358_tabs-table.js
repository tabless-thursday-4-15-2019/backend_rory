exports.up = function(knex, Promise) {
    return knex.schema
    .createTable('tabs', tabs => {
        tabs
            .increments();

        tabs
            .string('tab')
            .notNullable()

        tabs
            .string('description', 200)
            .notNullable()

        tabs
            .integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
    }) 
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('tabs');
};
