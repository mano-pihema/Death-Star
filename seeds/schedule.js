exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('schedule').del()
  await knex('schedule').insert([
    { id: 1, bus_id: 1, day: 'friday' },
    { id: 2, bus_id: 2, day: 'saturday' },
    { id: 3, bus_id: 3, day: 'sunday' },
    { id: 4, bus_id: 4, day: 'sunday' },
    { id: 5, bus_id: 5, day: 'sunday' },
  ])
}
