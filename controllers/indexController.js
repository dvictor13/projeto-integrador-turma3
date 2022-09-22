const listaPlanos = require("../planos.json")
const listaBarbearias = require("../barbearias.json")
const {Plano, Barbearia, Servico,Vantagem} = require('../database/models')



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
    },
    carrinho:async (req,res)=>{
        const codPlano = req.params.id;
        let planos = await Plano.findAll()
        res.render('carrinho',{listaplanos:planos, codPlano:codPlano});
    },
    pagamento:async(req,res)=>{
        let codPlano = req.params.id;
        let plano = await Plano.findOne({
            where:{
                idPlanos: codPlano
            },
            include:{
                model:Vantagem,
                as:'vantagens',
                required:false
            }
        })
        console.log("🚀 ~ file: indexController.js ~ line 52 ~ pagamento:async ~ plano", plano.vantagens)
        res.render('pagamento',{dadosPlano:plano})
    },    
    contato:(req,res)=>{
        res.render('contato');
    }
}

module.exports = indexController;