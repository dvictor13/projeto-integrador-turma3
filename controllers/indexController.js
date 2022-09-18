const listaPlanos = require("../planos.json")
const listaBarbearias = require("../barbearias.json")
const {Plano, Vantagem} = require('../database/models')



const indexController = {
    home:(req,res)=>{
        console.log(req.cookies.aceite)
        res.render('index',{listaplanos:listaPlanos,barbearias:listaBarbearias, aceite:req.cookies.aceite});
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
        let teste = await Plano.findAll({
            include:{
                model: Vantagem,
                as: 'vantagens',
                //trazer so o q eles tem em comum
                required: false
                // false traz tudo das duas 
            }
        })
        return res.send(teste);
    }
}

module.exports = indexController;