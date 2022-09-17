const listaPlanos = require("../planos.json")
const listaBarbearias = require("../barbearias.json")
const {Planos} = require('../database/models')



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
        let pla = await Planos.findAll()
        console.log(pla);
    }
}

module.exports = indexController;