const cors = require('cors')
const express = require('express')
require('dotenv').config()

const screeningRoutes = require('./routers/screeningRoutes')
const showRoutes = require('./routers/showRoutes')
const screenRoutes = require('./routers/screenRoutes')
//const { application } = require('express')

const api = express()

api.use(cors())
api.use(express.json())

api.get('/', (req, res) => {
    res.send('Welcome to the Theatre API')
})

api.use('/screenings', screeningRoutes)
api.use('/shows', showRoutes)
api.use('/screens', screenRoutes)

module.exports = api
