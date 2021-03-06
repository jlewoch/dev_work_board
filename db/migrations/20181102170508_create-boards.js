const knex = require('../knex/knex')
exports.up = async () => {
  await knex.schema.createTable('boards', table => {
    table.increments('id').unsigned().primary()
    table.string('title').notNull()
    table.timestamp('created_at').notNull().defaultTo(new Date().toUTCString())
  })
}

exports.down = async () => {
  await knex.schema.dropTableIfExists('boards')
}
