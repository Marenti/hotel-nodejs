const express = require('express');
const router = express.Router();

const deluxuryController = require('../app/controllers/DeluxuryController');



router.get('/', deluxuryController.general);


module.exports = router;