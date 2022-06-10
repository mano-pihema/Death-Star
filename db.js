const res = require('express/lib/response')

const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getAllBuses,
  getAllSchedules,
  updateBooking,
}

//write functions below

function getAllBuses(db = connection) {
  return db('buses').select()
}

function getAllSchedules(db = connection) {
  return db('schedule')
    .join('buses', 'buses.id', 'schedule.bus_id')
    .select(
      'schedule.bus_id as id',
      'buses.name as name',
      'schedule.day as day'
    )
}

function updateBooking(obj, db = connection) {
  const newBook = {
    name: obj.name,
    guestNum: obj.guest,
  }
  return db('booking').insert(newBook)
}
