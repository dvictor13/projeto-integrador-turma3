function transformCheckedBox (req,res,next){
    req.body.fezbarba == true? req.body.barba = 1 : req.body.barba = 0 ;
    req.body.fezcabelo == true ? req.body.cabelo = 1 : req.body.cabelo = 0;
    next()
}

module.exports = transformCheckedBox