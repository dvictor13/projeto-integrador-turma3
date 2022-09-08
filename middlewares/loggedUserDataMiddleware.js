const User = require("../models/User")

function loggedUserDataMiddleware (req,res,next){
    res.locals.isLogged = false;

    let emailInCookie = req.cookies.userEmail;
    let userFromCookie = User.findUserByField('email', emailInCookie);

    if(userFromCookie){
        req.session.isAuth = userFromCookie;
    }

    if(req.session.isAuth){
        res.locals.isLogged = true;
    }
    next()
}

module.exports = loggedUserDataMiddleware;