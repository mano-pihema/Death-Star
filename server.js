const path = require('path')
const express = require('express')
const hbs = require('express-handlebars')

const routes = require('./routes/routes.js')

/*
 * create the server
 *************************/

const server = express()
module.exports = server

/*
 * configure the server
 *************************/

const publicFolder = path.join(__dirname, 'public')
server.use(express.static(publicFolder))
server.use(express.urlencoded({ extended: false }))

server.engine('hbs', hbs.engine({ extname: 'hbs' }))
server.set('view engine', 'hbs')

/*
 * define the routes
 *************************/
//get route for '/'
//put in a server.use for where our other routes are stored and define it above

server.use('/', routes)
