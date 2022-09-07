function isAuthUser(req,res,next){
    if(req.session.isAuth){
        next()
    }else{
       return res.redirect('/cadastro')
    }

}
module.exports = isAuthUser