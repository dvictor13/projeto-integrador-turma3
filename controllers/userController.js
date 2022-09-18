const fs = require('fs');
const bcrypt = require('bcrypt')
//const User = require('../models/User');
const {validationResult} = require('express-validator')
const listaUsuariosassinante = require('../database/preferenciausuarios');
const listaPlanos = require('../planos.json');
const {Pessoa} = require('../database/models');


const userController = {
    cadastro:(req,res)=>{
        res.render('cadastro')
    },
    processRegister: async (req,res) =>{
        const errors = validationResult(req);
        if (!errors.isEmpty()){
            return res.render('cadastro', {
                errors: errors.mapped(),
                oldData: req.body
            });
        }
        
        const usuario = req.body

        let userExists = await Pessoa.findOne({
            where: {
                email: usuario.email
            }
        });

        if (userExists){
            console.log("funcionou")
            return res.render('cadastro', {
                 errors: {
                     email: {msg: "Este email já está registrado"}
                 },
                oldData: usuario
            })
            
        }
        
        await Pessoa.create({
            nome : usuario.nome,
            data_nasc: usuario.nascimento,
            endereco: 'teste',
            cpf : usuario.cpf,
            telefone : usuario.telefone,
            sexo: usuario.radio,
            email: usuario.email,
            senha: bcrypt.hashSync(usuario.senha, 11),
            status: 'inativo',
            imagem: 'images/profile/user.png',
            fk_assinaturas: 1
        })

        return res.render('login')

        // let userToCreate = {
        //     ...req.body,
        //     senha: bcrypt.hashSync(usuario.senha, 11),
        //     img: "images/profile/user.png",
        //     id_plano: undefined
        // }
        
        // User.create(userToCreate)
        // return res.render('login')
    },
    foto: (req,res) => {
        console.log(req.file);
        if(!req.file){
            return res.render('assinante', {
                errors: {
                    foto: {msg: "Foto inválida."}
                },
                userLogged: req.session.isAuth,
                usuario:listaUsuariosassinante,
                listaplanos:listaPlanos
           })
        }
        
        let user = User.findUserByField('email', req.session.isAuth.email);
    //    let userAntigo =  User.findUsersById(user.id)
        user.img = `images/profile/${req.file.filename}`;
        console.log(user)
        // User.update(userAntigo, user)

        return res.redirect('/assinante');
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