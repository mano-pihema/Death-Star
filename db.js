const res = require('express/lib/response')

const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getAllBuses,
  getAllSchedules,
  updateBooking,
  getAllScheduleId,
  deleteBus,
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

function updateBooking(obj, idNum, db = connection) {
  return db('booking').insert({
    name: obj.name[1],
    id: obj.id,
    guestNum: obj.guest,
    schedule_id: idNum.bus_id,
  })
}

function getAllScheduleId(num, db = connection) {
  return db('booking')
    .join('schedule', 'schedule.bus_id', 'booking.schedule_id')
    .where('schedule.bus_id', num)
    .select('bus_id')
}

function deleteBus(num, db = connection) {
  return db('schedule').where('schedule.bus_id', num).del()
}
