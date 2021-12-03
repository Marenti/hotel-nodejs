const express = require('express');
const router = express.Router();

const responseController = require('../app/controllers/ResponseController');


// router.get('/:slug',newsController.show);
router.get('/', responseController.showResponse);

module.exports = router;