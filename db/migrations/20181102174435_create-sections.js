const knex = require('../knex/knex')
exports.up = async () => {
  await knex.schema.createTable('sections', table => {
    table.increments('id').unsigned().primary()
    table.string('title').notNull()
    table.integer('boardId').notNull()
    table.timestamp('created_at').notNull()
  })
}

exports.down = async () => {
  await knex.schema.dropTableIfExists('sections')
}
