const {Assinatura,Pessoa} = require('../database/models');

const apiController = {
checarAssinatura:async (req,res)=>{
    let cliente = await Pessoa.findByPk(req.params.id)
    if (cliente ==null){
        res.status(200).send(`ID ${req.params.id} de Cliente não existe`)
    }
    let assinatura = await Assinatura.findOne({
        where:{
            fk_pessoas:cliente.idPessoas,
            status:'ativo'
        }
    })
    if(!assinatura){
        res.status(200).send(`O Cliente ${cliente.nome} de ID ${cliente.idPessoas} não possui uma assinatura ativa `)
    }
    return await res.status(200).json(assinatura)
},
usoAssinatura: async(req,res) => {
    let {id,barba,cabelo,extras} = req.body
    let cliente = await Pessoa.findByPk(id)
    let assinatura = await Assinatura.findOne({
        where:{
            fk_pessoas:cliente.idPessoas,
            status:'ativo'
        }
    })
    barbaantiga = assinatura.barba
    cabeloantigo = assinatura.cabelo
    extrasantigo = assinatura.servicosextras

    assinatura.set({
        barba: barbaantiga - barba,
        cabelo: cabeloantigo - cabelo,
        servicosextras: extrasantigo - extras
    })
    await assinatura.save();
    res.send('Concluido serviço')

}
}

module.exports = apiController;