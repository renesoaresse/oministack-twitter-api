const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

const server = require('http').Server(app)
const io = require('socket.io')(server)

mongoose.connect('mongodb://localhost:8081/twitter', {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.use((req, res, next) => {
  req.io = io

  return next()
})

app.disable('x-powered-by')

app.use(cors())
app.use(express.json())
app.use(require('./routes'))

app.listen(3000, () => {
  console.log('Server port 3000')
})
