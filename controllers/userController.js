const fs = require('fs')

const listaUsuarios =[
    {nome:'Fulano de Tal',plano:"BASIC",mes:{barba:3,cabelo:2,depilação:1},total:{cabelos:22,barbas:32,depilacao:5},barbearia:"BARBEARIA BAIRRO BONFIM"}
]
const listaPlanos = [
    {nome:"BASIC",preco:"R$30,00",barbas:1,cabelos:1,img:"images/barbeiros/barbeiro_detalhe_barba_tesoura.jpg",vantagens:["Barbas mais robustas","Ajustes mensais"],economia:20},
    {nome:"STANDARD",preco:"R$65,00",barbas:2,cabelos:3,img:"images/barbeiros/barbeiro_detalhe_barba.jpg",vantagens:["Atendentes","Escolha de Barbeiro","Horários fixos"],economia:25},
    {nome:"PREMIUM",preco:"R$80,00",barbas:5,cabelos:5,img:"images/barbeiros/barbeiro_detalhe_tesoura.jpg",vantagens:["Preferência nos agendamentos","Maior flexibilidade de agendamento","Atendimento Luxo"],economia:30},
]


const userController = {
    cadastro:(req,res)=>{
        res.render('cadastro')
    },
    carrinho:(req,res)=>{
        res.render('carrinho')
    },
    pagamento:(req,res)=>{
        res.render('pagamento')
    },
    assinante:(req,res)=>{
        res.render('assinante',{usuario:listaUsuarios,listaplanos:listaPlanos});
    },
    saveform:(req,res)=>{
        console.log(req.body);
        user = JSON.stringify(req.body)
        fs.appendFileSync('users.txt',user);
        res.redirect('assinante');
        
    }
}
module.exports = userController;