var express = require('express');
var router = express.Router();
var apiController = require('../controllers/apiController');

router.get('/:id',apiController.checarAssinatura)
router.post('/',apiController.usoAssinatura)

module.exports = router;