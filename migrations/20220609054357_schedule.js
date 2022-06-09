exports.up = function (knex) {
  return knex.schema.createTable('schedule', (table) => {
    table.increments('id').primary()
    table.integer('bus_id').references('buses.id')
    table.string('day')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('schedule')
}
