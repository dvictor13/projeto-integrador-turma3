const fs = require('fs');
const usersJson = require('../users.json')
const bcrypt = require('bcrypt')
const User = require('../models/User');
const {validationResult} = require('express-validator')
const listaUsuariosassinante = require('../database/preferenciausuarios');
const listaPlanos = require('../planos.json');


const userController = {
    cadastro:(req,res)=>{
        res.render('cadastro')
    },
    processRegister: (req,res) =>{
        const errors = validationResult(req);
        if (!errors.isEmpty()){
            return res.render('cadastro', {
                errors: errors.mapped(),
                oldData: req.body
            });
        }
        
        const usuario = req.body
        //Criptografar a senha
        let userExists = User.findUserByField('email', usuario.email);

        if (userExists){
            console.log("funcionou")
            return res.render('cadastro', {
                 errors: {
                     email: {msg: "Este email já está registrado"}
                 },
                oldData: usuario
            })
            
        }

        let userToCreate = {
            ...req.body,
            senha: bcrypt.hashSync(usuario.senha, 11)
           // avatar: 
        }
        
        let userCreated = User.create(userToCreate)
        return res.render('login')
    },
    carrinho:(req,res)=>{
        const codPlano = req.params.id;
        res.render('carrinho',{listaplanos:listaPlanos, codPlano:codPlano});
    },
    pagamento:(req,res)=>{
        res.render('pagamento',{dadosPlano:listaPlanos[0]})
    },
    assinante:(req,res)=>{
        res.render('assinante',{usuario:listaUsuariosassinante,listaplanos:listaPlanos});
    },    
    contato:(req,res)=>{
        res.render('contato');
    },
    auth: (req, res) => {
        //{email:"Iago@dh",senha:"123456"}
        const dadosUsuario = req.body
        //Busca o usuario por email
        const user = usersJson.find((u) => u.email == dadosUsuario.email)
        //Valida se o usuario existe
        if (user) {
            //compara a senha do formulario com a senha do json
            let senhaValida = bcrypt.compareSync(dadosUsuario.senha, user.senha)
            if (senhaValida) {
                req.session.isAuth = dadosUsuario.email
                //login com sucesso
                return res.redirect('/assinante')
            }
        }
        return res.render('login', {
            errors: {
                senha: {msg: "Email ou senha inválido."}
            }
       })

    },
    pagar: (req, res) => {
        res.render('pagamento',{dadosPlano:listaPlanos[0]})
    },
    logar: (req,res) =>{
        res.render('login')
    }
}
module.exports = userController;