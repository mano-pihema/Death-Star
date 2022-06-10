exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('schedule').del()
  await knex('schedule').insert([
    { id: 1, bus_id: 1, day: 'Friday' },
    { id: 2, bus_id: 2, day: 'Saturday' },
    { id: 3, bus_id: 3, day: 'Sunday' },
    { id: 4, bus_id: 4, day: 'Sunday' },
    { id: 5, bus_id: 5, day: 'Sunday' },
  ])
}
