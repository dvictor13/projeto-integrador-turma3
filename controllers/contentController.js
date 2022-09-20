// criar lista de barbearias e planos e mandar no render
const listaPlanos = require('../planos.json')
const listaBarbearias = require('../barbearias.json')
const {Plano, Vantagem} = require('../database/models');


const contentController ={
    planos: async(req,res)=>{
        let planos = await Plano.findAll({
            include:{
                model: Vantagem,
                as: 'vantagens',
                //trazer so o q eles tem em comum
                required: false
                // false traz tudo das duas 
            }
        });
        console.log(planos.vantagens)
    //    res.send(planos[0])
        res.render('planos',{listaplanos:planos}) // adicionar objeto planos
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