// criar lista de barbearias e planos e mandar no render

const contentController ={
    planos:(req,res)=>{
        res.render('planos') // adicionar objeto planos
    },
    barbearias:(req,res)=>{
        res.render('barbearias') // adicionar objeto barbearias
    }
}


module.exports = contentController;