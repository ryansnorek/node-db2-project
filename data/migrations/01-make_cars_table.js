exports.up = function(knex) {
  return knex.schema.createTable("cars", table => {
    // creates a column for primary id. default label is "id"
    table.increments()
    
    table.string("vin", 20).notNullable().unique()

    table.string("make", 100).notNullable()

    table.string("model", 100).notNullable()

    table.integer("milage").unsigned().notNullable()

    table.string("title", 100)
    // .defaultTo("clean")

    table.string("transmission", 100)
  })
};
// To make changes you either delete the DB and re run migrations
// Or migrate the DB down and then back up (may need to do go down many times)
// scripts: 
// "rollback": knex migrate:rollback
// "up": knex migrate:up
// "down": knex migrate:down

// If there is more than 1 table you must drop them in the order they were created
// The last thing done by the up function is the first thing done by the down function
exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars")
};
