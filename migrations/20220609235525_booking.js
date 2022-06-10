exports.up = function (knex) {
  return knex.schema.createTable('booking', (table) => {
    table.increments('id').primary()
    table.integer('schedule_id').references('schedule.id')
    table.string('name')
    table.integer('guestNum')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('booking')
}
