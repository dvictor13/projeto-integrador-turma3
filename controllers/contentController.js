// criar lista de barbearias e planos e mandar no render
const listaPlanos = require('../database/planos')
const listaBarbearias = require('../database/barbearias')


const contentController ={
    planos:(req,res)=>{
        res.render('planos',{listaplanos:listaPlanos}) // adicionar objeto planos
    },
    barbearias:(req,res)=>{
        res.render('barbearias',{listabarbearias:listaBarbearias,}) // adicionar objeto barbearias
    }
}


module.exports = contentController;