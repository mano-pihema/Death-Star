exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('buses').del()
  await knex('buses').insert([
    {
      id: 1,
      name: 'Death Star',
      description: 'This is a Death Star description',
    },
    {
      id: 2,
      name: 'Halloween',
      description: 'This is a Halloween description',
    },
    {
      id: 3,
      name: 'Princess Party',
      description: 'This is a Princess Party description',
    },
    {
      id: 4,
      name: 'Harry Potter',
      description: 'This is a Harry Potter description',
    },
    {
      id: 5,
      name: 'Stripper Pole',
      description: 'This is a Stripper Pole description',
    },
  ])
}
