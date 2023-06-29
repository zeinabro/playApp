const cors = require('cors')
const express = require('express')
require('dotenv').config()
const routes = require('./routers/theatreRoutes')
const api = express()

api.use(cors())
api.use(express.json())

api.get('/', (req,res) => {
    res.send('Welcome to the Theatre API')
})

api.use('/theatre', routes)

module.exports = api
