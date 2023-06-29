const express = require('express')
const router = express.Router()
const screeningController = require('../controllers/screeningController')

router.get('/',screeningController.getAll)

module.exports = router
