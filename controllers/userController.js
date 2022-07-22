const fs = require('fs');

const listaUsuarios = require('../database/usuarios');

const listaPlanos = require('../database/planos');



const userController = {
    cadastro:(req,res)=>{
        res.render('cadastro')
    },
    carrinho:(req,res)=>{
        const codPlano = req.params.id;
        res.render('carrinho',{listaplanos:listaPlanos, codPlano:codPlano});
    },
    pagamento:(req,res)=>{
        res.render('pagamento',{dadosPlano:listaPlanos[0]})
    },
    assinante:(req,res)=>{
        res.render('assinante',{usuario:listaUsuarios,listaplanos:listaPlanos});
    },
    contato:(req,res)=>{
        res.render('contato');
    },
    saveform:(req,res)=>{
        console.log(req.body);
        user = JSON.stringify(req.body)
        fs.appendFileSync('out/users.txt',user);
        res.redirect('assinante');
        
    },
    planchoice:(req,res)=>{
        let plano = req.body.categoriaP
        let index = listaPlanos.findIndex(element => element.nome == plano)
        res.redirect('pagamento') // add object to send to the page
    }, 
}
module.exports = userController;