const fs = require("fs")
//
function logUsuario(req, res, next){
    fs.appendFileSync("log.txt", " O usuario entrou na url:  "  + req.url)
next()
}

module.exports = logUsuario