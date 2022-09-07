function notLogged(req,res,next){
    if(req.session.isAuth){
        return res.redirect('/assinante')
     }
     next()

}
module.exports = notLogged;