const listaPlanos = require("../planos.json")
const listaBarbearias = require("../barbearias.json")
const {Plano, Barbearia, Servico} = require('../database/models')



const indexController = {
    home:async(req,res)=>{
        console.log(req.cookies.aceite)
        let planos = await Plano.findAll()
        let barbearias = await Barbearia.findAll()
        res.render('index',{listaplanos:planos,barbearias:barbearias, aceite:req.cookies.aceite});
    },
    equipe:(req,res)=>{
        res.render('equipe');
    },
    politica:(req,res)=>{
        res.render('politica');
    },
    faleconosco:(req,res)=>{
        res.render('faleconosco');
    },
    teste: async (req,res) => {
        let teste = await Barbearia.findAll({
            include:{
                model: Servico,
                as: 'servicos',
                //trazer so o q eles tem em comum
                required: false
                // false traz tudo das duas 
            }
        })
        return res.send(teste);
    },carrinho:(req,res)=>{
        const codPlano = req.params.id;
        res.render('carrinho',{listaplanos:listaPlanos, codPlano:codPlano});
    },
    pagamento:(req,res)=>{
        res.render('pagamento',{dadosPlano:listaPlanos[0]})
    },    
    contato:(req,res)=>{
        res.render('contato');
    }
}

module.exports = indexController;