function hasAssinaturaAtiva(req,res,next){
    if(req.session.assinaturaAtiva){
        if(req.session.plano <= req.session.assinaturaAtiva.fk_planos){
            req.session.assinaturaAtiva =  'ja possui';
            return res.redirect('/assinante')
        }
    }   
    next()
}
module.exports = hasAssinaturaAtiva