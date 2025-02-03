const express = require('express')
const app = express()
const db = require('./db')
const bodyParser = require('body-parser')
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.send('welcome to balli dhaba')
})





const personRoutes = require('./routes/personroute');
app.use('/person',personRoutes)

const menuItemRoutes = require('./routes/menuItemRoutes')
app.use('/menu',menuItemRoutes)

app.listen(3000);