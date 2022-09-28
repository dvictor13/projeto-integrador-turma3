function marcaNovoUsuario(req,res,next){
    
    req.session.novoUsuario = true
    next()
}

module.exports = marcaNovoUsuario