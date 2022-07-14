const fs = require('fs');

const listaUsuarios = require('../database/usuarios');

const listaPlanos = require('../database/planos')


const userController = {
    cadastro:(req,res)=>{
        res.render('cadastro')
    },
    carrinho:(req,res)=>{
        res.render('carrinho',{user:listaUsuarios});
    },
    pagamento:(req,res)=>{
        res.render('pagamento')
    },
    assinante:(req,res)=>{
        res.render('assinante',{usuario:listaUsuarios,listaplanos:listaPlanos});
    },
    saveform:(req,res)=>{
        console.log(req.body);
        user = JSON.stringify(req.body)
        fs.appendFileSync('users.txt',user);
        res.redirect('assinante');
        
    }
}
module.exports = userController;