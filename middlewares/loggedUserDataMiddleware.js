const {Pessoa} = require("../database/models");

async function loggedUserDataMiddleware (req,res,next) {
    res.locals.isLogged = false;

    let emailInCookie = req.cookies.userEmail;
    if(req.cookies.userEmail){
        let userFromCookie = await Pessoa.findOne({
            where: {
               email: emailInCookie
           }
        }); 
        if(userFromCookie){
            req.session.isAuth = userFromCookie;
        }
    }

     if(req.session.isAuth){
         res.locals.isLogged = true;
         console.log(req.cookies.userEmail + "chegandoooooo")
     }
    next()
}

module.exports = loggedUserDataMiddleware;