const express = require('express');
const router = express.Router();

const suiteController = require('../app/controllers/SuiteController');



router.get('/', suiteController.general);


module.exports = router;