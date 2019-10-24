const express = require('express')
const mongoose = require('mongoose')

const app = express()

const server = require('http').Server(app)

mongoose.connect('mongodb://localhost:8081/twitter', {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.use(express.json())
app.use(require('./routes'))

app.listen(3000, () => {
  console.log('Server port 3000')
})
