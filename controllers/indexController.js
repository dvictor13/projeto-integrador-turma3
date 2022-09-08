const listaPlanos = require("../planos.json")
const listaBarbearias = require("../barbearias.json")



const indexController = {
    home:(req,res)=>{
        res.render('index',{listaplanos:listaPlanos,barbearias:listaBarbearias});
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

}

module.exports = indexController;