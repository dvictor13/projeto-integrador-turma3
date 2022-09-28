const fs = require('fs');
const bcrypt = require('bcrypt')
//const User = require('../models/User');
const {validationResult} = require('express-validator')
//const listaUsuariosassinante = require('../database/preferenciausuarios');
//const listaPlanos = require('../planos.json');
const {Pessoa,Plano,Vantagem, Assinatura} = require('../database/models');


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
            endereco: usuario.endereco,
            cpf : usuario.cpf,
            telefone : usuario.telefone,
            sexo: usuario.radio,
            email: usuario.email,
            senha: bcrypt.hashSync(usuario.senha, 11),
            status: 'inativo',
            imagem: 'images/profile/user.png'
        })

        return res.render('login')
    },
    foto: async (req,res) => {
        const {id} = req.params;
        let user = await Pessoa.findByPk(id);
        req.session.novoUsuario = false;
        sessaoAtiva = ''

        if(!req.file){
            let listAll = await Plano.findAll({
                include:{
                model: Vantagem,
                as: 'vantagens',
                //trazer so o q eles tem em comum
                required: false
                // false traz tudo das duas 
                }
            });
            let assinaturaUser = await Assinatura.findOne({
                where: {
                    fk_pessoas: user.idPessoas
                }
            });
            if(assinaturaUser){
                let planoUser = await Plano.findOne({
                    where: {
                        idPlanos: assinaturaUser.fk_planos
                    }
                });
                return res.render('assinante', {
                    errors: {
                        foto: {msg: "Foto inválida."}
                    },
                    userLogged: user,
                    assinaturaUser: assinaturaUser,
                    listaPlanosUser: planoUser,
                    listaPlanos: listAll,
                    sessionUser: req.session.novoUsuario,
                    sessionAtiva : sessaoAtiva
                });
            }
            return res.render('assinante', {
                errors: {
                    foto: {msg: "Foto inválida."}
                },
                userLogged: user,
                assinaturaUser: undefined,
                listaPlanosUser: undefined,
                listaPlanos: listAll,
                sessionUser: req.session.novoUsuario,
                sessionAtiva : sessaoAtiva

            });
                
        }else{
        
        user.update({
            imagem: `images/profile/${req.file.filename}`
        },{
            where: {
                idPessoas: id
            }
        })

        return res.redirect('/assinante');
        }
    },
    alterarDados: async (req,res) =>{
        const {id} = req.params;
        let user = await Pessoa.findByPk(id);

        user.update({
            nome: req.body.nome,
            data_nasc: date,
            endereco: req.body.endereco,
            cpf: req.body.cpf,
            telefone: req.body.telefone,
            sexo: req.body.genero,
            email: req.body.email
          //  senha: req.body.nome,
        },{
            where: {
                idPessoas: id
            }
        })
        req.session.isAuth = user;
        return res.redirect('/assinante');
    },
    pagar: async (req , res) => {
        // update plano e mudar status ativo da pessoa pelo PK 
        //criar assinatura pra pessoa 
        
        console.log("🚀 ~ file: userController.js ~ line 140 ~ pagar: ~ req.body", req.body.duracao)
        let {idPessoas} = req.session.isAuth;

        let hasAssinaturaAtiva = await Assinatura.findOne({
            where:{
                fk_pessoas:idPessoas,
                status:'ativo'
            }
        })
        if(hasAssinaturaAtiva){
            hasAssinaturaAtiva.update({status:"inativo"})
        }

        //let usuario = await Pessoa.findByPk(idPessoas) //'ver aonde posso pegar id'
        let plano = await Plano.findByPk(req.session.plano)
        //await usuario.update({status:'ativo'}) //'mudar status do usuario pra ativo'
        let assinatura = await Assinatura.create({
            status:'ativo',
            periodo:req.body.duracao, // form 
            fk_planos:plano.idPlanos ,
            cabelo:plano.cabelo,
            barba:plano.barba,
            fk_pessoas:idPessoas,
        })
        req.session.assinaturaAtiva = assinatura

        return res.redirect('/assinante')
    },
    logar: (req,res) =>{
        res.render('login')
    },
    auth: async (req, res) => {
        const dadosUsuario = req.body
        let userToLogin = await Pessoa.findOne({
            where: {
                email: dadosUsuario.email //email é o campo do banco e dados usuario é do formulario
            }
        });

        if(userToLogin){
            let senhaValida = bcrypt.compareSync(dadosUsuario.senha, userToLogin.senha)

            if(senhaValida){
                delete userToLogin.senha;
                req.session.isAuth = userToLogin;
                if(dadosUsuario.lembrar){
                    res.cookie('userEmail', dadosUsuario.email, 
                    {maxAge: (1000 * 60) * 30} )
                }
                let userAssinaturaAtiva = await Assinatura.findOne({
                    where:{
                        fk_pessoas:userToLogin.idPessoas,
                        status:'ativo'
                    }
                })
                if(userAssinaturaAtiva){
                    req.session.assinaturaAtiva = userAssinaturaAtiva;
                }

                
                if(!req.session.plano){
                    return res.redirect('/assinante')
                }else{
                    return res.redirect('/pagamento/'+ req.session.plano)
                }
            }
        }

        return res.render('login', {
            errors: {
                senha: {msg: "Email ou senha inválido."}
            }
        })
    },
    assinante: async (req,res)=>{
        let {idPessoas} = req.session.isAuth;
        let userLogged = await Pessoa.findByPk(idPessoas)
        let userNovo = req.session.novoUsuario;
        req.session.novoUsuario = false;
        let sessaoAtiva = req.session.assinaturaAtiva;
        let listAll = await Plano.findAll({
            include:{
            model: Vantagem,
            as: 'vantagens',
            //trazer so o q eles tem em comum
            required: false
            // false traz tudo das duas 
            }
        });
        let assinaturaUser = await Assinatura.findOne({
            where: {
                fk_pessoas: userLogged.idPessoas,
                status:'ativo'
            }
        });
        req.session.assinaturaAtiva = assinaturaUser;
        if(assinaturaUser){
            let planoUser = await Plano.findOne({
                where: {
                    idPlanos: assinaturaUser.fk_planos
                }
            });
            return res.render('assinante',{
                userLogged: userLogged,
                assinaturaUser: assinaturaUser,
                listaPlanosUser: planoUser,
                listaPlanos: listAll,
                sessionUser: userNovo,
                sessionAtiva : sessaoAtiva
            });
        }
        return res.render('assinante',{
            userLogged: userLogged,
            assinaturaUser: undefined,
            listaPlanosUser: undefined,
            listaPlanos: listAll,
            sessionUser: false, 
            sessionAtiva : sessaoAtiva
        });
    },
    logout: (req, res) => {
        res.clearCookie('userEmail');
        req.session.destroy();
        
        return res.redirect('/');
    }
    
}
module.exports = userController;