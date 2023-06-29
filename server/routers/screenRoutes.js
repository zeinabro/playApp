const express = require('express');
const router = express.Router();
const screenController = require('../controllers/screenController');

router.get('/', screenController.getAll);
router.get('/:id', screenController.getOne);
router.post('/', screenController.create);
router.put('/:id', screenController.update);
router.delete('/:id', screenController.deleteOne);

module.exports = router;
