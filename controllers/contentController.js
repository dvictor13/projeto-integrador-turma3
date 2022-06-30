const contentController ={
    planos:(req,res)=>{
        res.render('planos')
    },
    barbearias:(req,res)=>{
        res.render('barbearias')
    }
}


module.exports = contentController;