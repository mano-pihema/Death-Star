const res = require('express/lib/response')

const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getAllBuses,
}

//write functions below

function getAllBuses(db = connection) {
  return db('buses').select()
}
