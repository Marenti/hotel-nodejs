const express = require('express');
const router = express.Router();

const roomController = require('../app/controllers/RoomController');


router.get('/booking', roomController.booking);
router.get('/:slug', roomController.showSlug); 
router.get('/', roomController.showRoom);


module.exports = router;