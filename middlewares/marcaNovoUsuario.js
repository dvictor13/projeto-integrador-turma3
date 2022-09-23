function marcaNovoUsuario(req,res,next){
    
    req.session.novoUsuario = true
    res.locals.novoUsuario = req.session.novoUsuario
    next()
}
module.exports = marcaNovoUsuario