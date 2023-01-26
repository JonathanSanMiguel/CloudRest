const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const routes = require('./src/routes/products.routes')

const app = express()

//MiddleWares
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

//Rutas
app.use(routes)


module.exports = app