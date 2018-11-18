const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 9000

// view engine setup

app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'client/build')))
app.use('/api', require('./routes/index'))
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'))
})
app.listen(PORT, () => console.log('started'))
