const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const cors = require('cors')
const db = require('./config/db')
const app = express()
const server = require('http').Server(app)
const moment = require('moment')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(cors())
app.get('/', (req, res) => res.send('Api is running!'))

db.push('/log', `Api is running! ${moment().format('DD-MM-YYYY HH[h]mm[m]ss')}`)

app.use(require('./routes'))

server.listen(3333)
console.log(`Listen port:${3333}`)
require('./LatLongRequest')
