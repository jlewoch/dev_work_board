const express = require('express')
const app = express()

const bodyParser = require('body-parser')

// view engine setup

app.use(bodyParser.json())

app.use('/api', require('./routes/index'))

app.listen(9000, () => console.log('started'))
