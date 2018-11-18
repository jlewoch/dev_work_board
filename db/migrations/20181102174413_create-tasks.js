const knex = require('../knex/knex')
exports.up = async () => {
  await knex.schema.createTable('tasks', table => {
    table.increments('id').unsigned().primary()
    table.string('title').notNull()
    table.string('priority')
    table.string('category')
    table.string('assigned').defaultTo('')

    table.integer('sectionId').notNull()
    table.datetime('due')
    table.timestamp('created_at').notNull().defaultTo(new Date().toUTCString())
  })
}

exports.down = async () => {
  await knex.schema.dropTableIfExists('tasks')
}
