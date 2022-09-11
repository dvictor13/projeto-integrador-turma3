const fs = require('fs');
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
    foto: (req,res) => {
        res.send("Deu certo");
    },
    carrinho:(req,res)=>{
        const codPlano = req.params.id;
        res.render('carrinho',{listaplanos:listaPlanos, codPlano:codPlano});
    },
    pagamento:(req,res)=>{
        res.render('pagamento',{dadosPlano:listaPlanos[0]})
    },    
    contato:(req,res)=>{
        res.render('contato');
    }, 
    pagar: (req, res) => {
        res.render('pagamento',{dadosPlano:listaPlanos[0]})
    },
    logar: (req,res) =>{
        res.render('login')
    },
    auth: (req, res) => {
        const dadosUsuario = req.body
        let userToLogin = User.findUserByField('email', dadosUsuario.email);
        if(userToLogin){
            let senhaValida = bcrypt.compareSync(dadosUsuario.senha, userToLogin.senha)

            if(senhaValida){
                delete userToLogin.senha;
                req.session.isAuth = userToLogin;
                console.log(dadosUsuario.lembrar)
                if(dadosUsuario.lembrar){
                    res.cookie('userEmail', dadosUsuario.email, 
                    {maxAge: (1000 * 60) * 30} )
                }

                return res.redirect('/assinante')
            }
        }

        return res.render('login', {
            errors: {
                senha: {msg: "Email ou senha inválido."}
            }
        })
    },
    assinante:(req,res)=>{
        console.log(req.cookies.userEmail);
        res.render('assinante',{
            userLogged: req.session.isAuth,
            usuario:listaUsuariosassinante,
            listaplanos:listaPlanos
        });
    },
    logout: (req, res) => {
        res.clearCookie('userEmail');
        req.session.destroy();
        
        return res.redirect('/');
    }
    
}
module.exports = userController;