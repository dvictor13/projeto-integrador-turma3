const listaPlanos = require("../planos.json")
const listaBarbearias = require("../barbearias.json")



const indexController = {
    home:(req,res)=>{
        res.render('index',{listaplanos:listaPlanos,barbearias:listaBarbearias});
    },
}

module.exports = indexController;