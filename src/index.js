const express = require('express')
const mongoose = require('mongoose')

const app = express()

mongoose.connect('mongodb://twitter:root@localhost:8081/twitter', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.use(require('./routes'))

app.listen(3000, () => {
  console.log('Server port 3000')
})
