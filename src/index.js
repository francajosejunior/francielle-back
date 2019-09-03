const express = require('express')
const mongoose = require('mongoose')
// const path = require('path')
// const cors = require('cors')

// const app = express()
// const server = require('http').Server(app)

mongoose.connect(
  'mongodb+srv://omnistack:omnistack@cluster0-2wjof.mongodb.net/test?retryWrites=true&w=majority',
  {
    useNewUrlParser: true
  }
)

// app.use(cors())

//app.use(require('./routes'))

// server.listen(3333)
