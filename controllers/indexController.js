const listaPlanos = require("../database/planos")
const listaBarbearias = require("../database/barbearias")



const indexController = {
    home:(req,res)=>{
        res.render('index',{listaplanos:listaPlanos,barbearias:listaBarbearias});
    },
}

module.exports = indexController;