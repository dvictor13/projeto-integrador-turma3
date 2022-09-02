const fs = require('fs');
const usersJson = require('../users.json')
const bcrypt = require('bcrypt')

const listaUsuarios = require('../users.json');

const listaUsuariosassinante = require('../database/preferenciausuarios');

const listaPlanos = require('../planos.json');
const listaUser = require('../users.json');



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
        let sessao = listaUser.find(listaUser => listaUser.email === req.session.isAuth);
        res.render('assinante',{usuario:listaUsuariosassinante,listaplanos:listaPlanos, user:sessao});
    },    
    contato:(req,res)=>{
        res.render('contato');
    },
    cadastra: (req, res) => {
        const usuario = req.body
        //Criptografar a senha
        const senhaCriptografada = bcrypt.hashSync(usuario.senha, 11)
        console.log(senhaCriptografada)
        //edita o objeto usuario com a senha Criptografada
        usuario.senha = senhaCriptografada
        //Salva na memoria
        usersJson.push(usuario)
        //Escreve no Json
        fs.writeFile("users.json", JSON.stringify(usersJson, null, 4), err => {
            // Checking for errors
        if (err) throw err;
            console.log("Done writing"); // Success
        });
        return res.redirect('/cadastro')
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
                console.log(req.session.isAuth);
                return res.redirect('/assinante')
                
            }
        }
        return res.send('Login ou senha errada')

    },
    pagar: (req, res) => {
        res.render('pagamento',{dadosPlano:listaPlanos[0]})
    }
}
module.exports = userController;