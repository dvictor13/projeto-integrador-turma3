// criar lista de barbearias e planos e mandar no render
const listaPlanos = require('../planos.json')
const listaBarbearias = require('../barbearias.json')


const contentController ={
    planos:(req,res)=>{
        res.render('planos',{listaplanos:listaPlanos}) // adicionar objeto planos
    },
    barbearias:(req,res)=>{
        res.render('barbearias',{listabarbearias:listaBarbearias,}) // adicionar objeto barbearias
    }
    // visualizarPlanos:async (req,res)=>{
    //     let planos = await Plano.findAll()
    //     res.send(planos)
    // }
}


module.exports = contentController;