// criar lista de barbearias e planos e mandar no render
const listaBarbearias = [
    {nome:"FIO DO BIGODE",img:"images/barbearias/salao_amplo_pb.jpg",rua:"Av.Brasil, 2022",loja:"Loja 01",bairro:"Centro",horarioutil:"Seg. a Sáb.: das 9h às 23h",horariofds:"Dom.: das 11h às 22h",servicos:["Corte de cabelo","Corte de barba","Depilação facial"]},
    {nome:"BARBA NEGRA",img:"images/barbearias/salao_amplo_vertical_color.jpg",rua:"Av.Brasil, 2032",loja:"Loja 02",bairro:"Centro",horarioutil:"Seg. a Sáb.: das 9h às 23h",horariofds:"Dom.: das 9h às 22h",servicos:["Corte de cabelo","Corte de barba","Depilação facial"]},
    {nome:"VELHO TRANQUILO",img:"images/barbearias/salao_vertical_color.jpg",rua:"Av.Brasil, 2022",loja:"Loja 05",bairro:"Centro",horarioutil:"Seg. a Sáb.: das 9h às 23h",horariofds:"Dom.: das 11h às 22h",servicos:["Corte de cabelo","Corte de barba","Depilação facial"]},
    {nome:"RUA DOS BOBOS",img:"images/barbearias/salao_vertical_color.jpg",rua:"Av.Brasil, 2022",loja:"Loja 05",bairro:"Centro",horarioutil:"Seg. a Sáb.: das 9h às 23h",horariofds:"Dom.: das 10h às 22h",servicos:["Corte de cabelo","Depilação facial"]},
]
const listaPlanos = [
    {nome:"BASIC",preco:"R$30,00",barbas:1,cabelos:1,img:"images/barbeiros/barbeiro_detalhe_barba_tesoura.jpg",vantagens:["Barbas mais robustas","Ajustes mensais"],economia:20},
    {nome:"STANDARD",preco:"R$65,00",barbas:2,cabelos:3,img:"images/barbeiros/barbeiro_detalhe_barba.jpg",vantagens:["Atendentes","Escolha de Barbeiro","Horários fixos"],economia:25},
    {nome:"PREMIUM",preco:"R$80,00",barbas:5,cabelos:5,img:"images/barbeiros/barbeiro_detalhe_tesoura.jpg",vantagens:["Preferência nos agendamentos","Maior flexibilidade de agendamento","Atendimento Luxo"],economia:30},
]


const contentController ={
    planos:(req,res)=>{
        res.render('planos',{listaplanos:listaPlanos}) // adicionar objeto planos
    },
    barbearias:(req,res)=>{
        res.render('barbearias',{listabarbearias:listaBarbearias,}) // adicionar objeto barbearias
    }
}


module.exports = contentController;