exports.up = function (knex) {
  return knex.schema.table('schedule', (table) => {
    table.boolean('complete')
  })
}

exports.down = function (knex) {
  return knex.schema.table('schedule', (table) => {
    table.dropColumn('complete')
  })
}
