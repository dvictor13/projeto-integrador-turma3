const listaPlanos = [
    {nome:"BASIC",preco:"R$30,00",barbas:1,cabelo:1,img:"images/barbeiros/barbeiro_detalhe_barba_tesoura.jpg"},
    {nome:"STANDARD",preco:"R$40,00",barbas:4,cabelo:1,img:"images/barbeiros/barbeiro_detalhe_barba.jpg"},
    {nome:"PREMIUM",preco:"R$60,00",barbas:5,cabelo:5,img:"images/barbeiros/barbeiro_detalhe_tesoura.jpg"},
]
const listaBarbearias = [
    {nome:"FIO DO BIGODE",img:"images/barbearias/salao_amplo_pb.jpg",rua:"Av.Brasil, 2022",loja:01,bairro:"Centro",horario:"Seg. a Sáb.: das 9h às 23h",horariofds:"Dom.: das 11h às 22h",servicos:["Corte de cabelo","Corte de barba","Depilação facial"]},
    {nome:"BARBA NEGRA",img:"images/barbearias/salao_amplo_vertical_color.jpg",rua:"Av.Brasil, 2022",loja:01,bairro:"Centro",horario:"Seg. a Sáb.: das 9h às 23h",horariofds:"Dom.: das 11h às 22h",servicos:["Corte de cabelo","Corte de barba","Depilação facial"]},
    {nome:"VELHO TRANQUILO",img:"images/barbearias/salao_vertical_color.jpg",rua:"Av.Brasil, 2022",loja:01,bairro:"Centro",horario:"Seg. a Sáb.: das 9h às 23h",horariofds:"Dom.: das 11h às 22h",servicos:["Corte de cabelo","Corte de barba","Depilação facial"]},
]



const indexController = {
    home:(req,res)=>{
        res.render('index',{listaplanos:listaPlanos,barbearias:listaBarbearias});
    },
}

module.exports = indexController;