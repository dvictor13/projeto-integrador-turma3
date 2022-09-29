const {Assinatura,Pessoa} = require('../database/models');

const apiController = {

mostrarFormulario:(req,res)=>{
    res.render('api')
},
checarAssinatura:async (req,res)=>{
    id = req.body.id
    let cliente = await Pessoa.findByPk(id)
    if (cliente ==null){
        return res.status(200).send(`ID ${id} de Cliente não existe`)
    }
    let assinatura = await Assinatura.findOne({
        where:{
            fk_pessoas:cliente.idPessoas,
            status:'ativo'
        }
    })
    console.log(assinatura)
    if(!assinatura){
        return res.status(200).send(`O Cliente ${cliente.nome} de ID ${cliente.idPessoas} não possui uma assinatura ativa `)
    }
    return await res.status(200).json(assinatura)
},
usoAssinatura: async(req,res) => {
    let {id,barba,cabelo,extras} = req.body
    let cliente = await Pessoa.findByPk(id)
    if (cliente ==null){
        return res.status(200).send(`ID ${id} de Cliente não existe`)
    }
    let assinatura = await Assinatura.findOne({
        where:{
            fk_pessoas:cliente.idPessoas,
            status:'ativo'
        }
    })
    if(!assinatura){
        return res.status(200).send(`O Cliente ${cliente.nome} de ID ${cliente.idPessoas} não possui uma assinatura ativa `)
    }

    
    barbaantiga = assinatura.barba
    console.log("🚀 ~ file: apiController.js ~ line 32 ~ usoAssinatura:async ~ assinatura.barba", assinatura.barba)
    cabeloantigo = assinatura.cabelo
    console.log("🚀 ~ file: apiController.js ~ line 35 ~ usoAssinatura:async ~ assinatura.cabelo", assinatura.cabelo)
    extrasantigo = assinatura.servicosextras
    console.log("🚀 ~ file: apiController.js ~ line 38 ~ usoAssinatura:async ~ assinatura.servicosextras", assinatura.servicosextras)
    assinatura.set({
        barba: (barbaantiga - barba) ,
        cabelo: (cabeloantigo - cabelo),
        servicosextras: (extrasantigo - extras),
    })
    await assinatura.save();
    let frasebarba,fraseservico,frasecabelo =""
    barbaantiga==assinatura.barba ? frasebarba = ` Tem ${barbaantiga} cortes de barba disponíveis.` :  frasebarba = ` Tinha: ${barbaantiga} cortes de barba disponíveis. Agora tem: ${assinatura.barba} cortes de barba disponíveis.`

    cabeloantigo==assinatura.cabelo ?  frasecabelo = ` tem ${cabeloantigo} cortes de cabelo disponíveis.` :  frasecabelo = ` tinha: ${cabeloantigo} cortes de cabelo disponíveis. Agora tem: ${assinatura.cabelo} cortes de cabelo disponíveis.`
    // 
    extrasantigo==assinatura.servicosextra ? fraseservico = ` Tem ${assinatura.servicosextras} serviços extras` :  fraseservico = ` Tinha ${extrasantigo} serviços extras. Agora tem ${assinatura.servicosextras} serviços extras`
    res.status(200).send(`Concluido serviço. O usuário ${cliente.nome}, de ID ${id},` +frasecabelo+frasebarba+fraseservico)

}
}

module.exports = apiController;