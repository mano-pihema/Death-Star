exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('buses').del()
  await knex('buses').insert([
    {
      id: 1,
      name: 'Death Star',
      description:
        "You've always wanted a go on one of these things. Don't even try deny it. ",
    },
    {
      id: 2,
      name: 'Halloween',
      description: 'Only the spookiest bus you ever did see.',
    },
    {
      id: 3,
      name: 'Princess Party',
      description:
        "Who doesn't love princesses? This bus comes fully loaded with half a dozen girls in frilly dresses. ",
    },
    {
      id: 4,
      name: 'Harry Potter',
      description:
        'All aboard the hogbus express! Includes butterbeer on tap and house elves(paid living wage) to serve canapes.',
    },
    {
      id: 5,
      name: 'Stripper Pole',
      description:
        'Would it even be a party bus without a stripper pole? Show off your flexibilty and abandon your dignity all at the same time.',
    },
  ])
}
