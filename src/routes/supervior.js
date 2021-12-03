const express = require('express');
const router = express.Router();

const superviorController = require('../app/controllers/SuperviorController');



router.get('/', superviorController.general);


module.exports = router;