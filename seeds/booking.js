exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('booking').del()
  await knex('booking').insert([
    { id: 1, schedule_id: 1, name: 'tim', guestNum: 9 },
    { id: 2, schedule_id: 2, name: 'jimothy', guestNum: 2 },
    { id: 3, schedule_id: 3, name: 'simone', guestNum: 1 },
  ])
}
