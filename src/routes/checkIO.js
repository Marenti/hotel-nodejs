const express = require('express');
const router = express.Router();

const checkIOController = require('../app/controllers/CheckIOController');


router.get('/:id/edit', checkIOController.edit);
router.put('/:id', checkIOController.update);
router.get('/', checkIOController.showIO);


module.exports = router;