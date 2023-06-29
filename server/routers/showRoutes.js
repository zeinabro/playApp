const express = require('express')
const router = express.Router()
const showController = require('../controllers/showController')

router.get('/',showController.getAll)
router.get('/:id', showController.getOne)
router.patch('/:id', showController.update)

module.exports = router
