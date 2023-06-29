const express = require('express')
const router = express.Router()
const screeningController = require('../controllers/screeningController')

router.get('/',screeningController.getAll)
router.get('/:id', screeningController.getOne)
router.patch('/:id', screeningController.update)
router.post('/',screeningController.create)
router.delete('/:id',screeningController.destroy)

module.exports = router
