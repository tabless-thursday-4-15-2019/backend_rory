
exports.up = function(knex, Promise) {
    return knex.schema

    // Users Table
    .createTable('users', users => {
        users // user_id
          .increments();

        users // username
          .string('username', 128)
          .notNullable()
          .unique();

        users // password
          .string('password', 128)
          .notNullable();
      })
      
};

exports.down = function(knex, Promise) {
    return knex.schema
    .dropTableIfExists('users');
};


      // Habits Table
    //   .createTable('habits', habits => {
    //     habits // habit_id
    //       .increments();

    //     habits // habit_name
    //       .string('habit')
    //       .notNullable()
    //   })
      
      // Users_habits Table
    //   .createTable('users_habits', tbl => {
    //     tbl.increments(); // primary key
  
    //     tbl // Users Foreign Key
    //       .integer('user_id')
    //       .unsigned()
    //       .notNullable()
    //       .references('id')
    //       .inTable('users')
    //       .onDelete('CASCADE')
    //       .onUpdate('CASCADE');
  
        // tbl // Habits Foreign Key
    //       .integer('habit_id')
    //       .unsigned()
    //       .notNullable()
    //       .references('id')
    //       .inTable('habits')
    //       .onDelete('CASCADE')
    //       .onUpdate('CASCADE');
    //   });

    //   exports.down = function(knex, Promise) {
    //     return knex.schema
    //     .dropTableIfExists('users_habits') //  <-- change this 
    //     .dropTableIfExists('habits'); // <-- change this
    // };