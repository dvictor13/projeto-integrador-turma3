const fs = require('fs');
const usersJson = require('../users.json')
const bcrypt = require('bcrypt')
const listaPlanos = require('../database/planos');
const User = require('../models/User');
const {validationResult} = require('express-validator')
const listaUsuariosassinante = require('../database/preferenciausuarios');
const listaPlanos = require('../planos.json');


const userController = {
    cadastro:(req,res)=>{
        res.render('cadastro')
    },
    processRegister: (req,res) =>{
        const resultValidations = validationResult(req);
        if (resultValidations.errors.length > 0){
            return res.render('cadastro', {
                errors: resultValidations.mapped(),
                oldData: req.body
            });
        }
        return res.send('Ok, passou')
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
    cadastra: (req, res) => {
        const usuario = req.body
        //Criptografar a senha
        let userExists = User.findUserByField('email', req.body.email);

        if (userExists){
            return res.render('cadastro', {
                errors: {
                    email: {msg: "Este email já está registrado"}
                },
                oldData: req.body
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
        return res.send('Login ou senha errada')

    },
    pagar: (req, res) => {
        res.render('pagamento',{dadosPlano:listaPlanos[0]})
    },
    logar: (req,res) =>{
        res.render('login')
    }
}
module.exports = userController;