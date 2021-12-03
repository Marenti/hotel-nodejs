const express = require('express');
const router = express.Router();

const billController = require('../app/controllers/BillController');


router.get('/:id/watch', billController.watch);




module.exports = router;