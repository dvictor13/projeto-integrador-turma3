const userController = {
    cadastro:(req,res)=>{
        res.render('cadastro')
    },
    carrinho:(req,res)=>{
        res.render('carrinho')
    },
    pagamento:(req,res)=>{
        res.render('pagamento')
    },
    assinante:(req,res)=>{
        res.render('assinante')
    }
}
module.exports = userController;