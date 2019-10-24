const express = require('express')
const mongoose = require('mongoose')

const app = express()

mongoose.connect('mongodb://twitter:root@localhost:8081/twitter', {
  useNewUrlParser: true
})

app.get('/', (req, res) => {
  return res.send('Init application')
})

app.listen(3000, () => {
  console.log('Server port 3000')
})
