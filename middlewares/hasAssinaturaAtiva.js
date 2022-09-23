function hasAssinaturaAtiva(req,res,next){
    if(req.session.assinaturaAtiva && req.session.plano == req.session.assinaturaAtiva.fk_planos){
        return res.redirect('/assinante')
    } 
    next()
}
module.exports = hasAssinaturaAtiva