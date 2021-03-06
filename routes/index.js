var express = require('express');
var router = express.Router();

const indexController = require('../controllers/indexController')
const userController = require('../controllers/userController')
const contentController = require('../controllers/contentController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/home',indexController.home)

router.get('/assinante',userController.assinante)
router.get('/pagamento',userController.pagamento)
router.get('/carrinho/:id?',userController.carrinho)
router.get('/cadastro',userController.cadastro)
router.get('/contato',userController.contato)

router.get('/barbearias',contentController.barbearias)
router.get('/planos/',contentController.planos)

router.post('/pagamento',userController.planchoice)
router.post('/cadastro',userController.saveform)


module.exports = router;
