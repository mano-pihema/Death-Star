const express = require('express')

const db = require('../db')

const router = express.Router()
module.exports = router

// define routes below

router.get('/', async (req, res) => {
  try {
    const bus = await db.getAllBuses()
    res.render('home', { bus })
  } catch (error) {
    res.status(500).send(error.message)
  }
})

// GET schedules
router.get('/schedule', async (req, res) => {
  try {
    const schedule = await db.getAllSchedules()

    res.render('schedule', { schedule })
  } catch (error) {
    res.status(500).send(error.message)
  }
})
//add schedule

router.get('/booking', async (req, res) => {
  try {
    const bus = await db.getAllBuses()
    const schedules = await db.getAllSchedules()

    // const schedule = schedules.map((item) => ({
    //   id: item.id,
    //   day: item.day,
    //   selected: item.bus_id === bus.id ? 'selected' : '',
    // }))

    const viewData = { schedules, bus }

    res.render('booking', viewData)
  } catch (error) {
    res.status(500).send(error.message)
  }
})

//post route

router.post('/booking', async (req, res) => {
  const obj = req.body
  const num = req.body.name[0]
  try {
    const idNum = await db.getAllScheduleId(num)

    const [id] = Object.values(idNum)
    const numberid = id.bus_id
    console.log(numberid)
    await db.updateBooking(obj, id)
    await db.deleteBus(numberid)
    res.redirect(303, '/')
  } catch (error) {
    console.error(error.message)
  }
})
