exports.up = function (knex) {
  return knex.schema.createTable('buses', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('description')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('buses')
}
