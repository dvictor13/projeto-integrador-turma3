var express = require('express');
var router = express.Router();
var apiController = require('../controllers/apiController');
var transformCheckedBox = require('../middlewares/transformCheckedBox')

router.get('/',apiController.mostrarFormulario)
router.post('/',apiController.checarAssinatura)
router.put('/',transformCheckedBox,apiController.usoAssinatura)

module.exports = router;