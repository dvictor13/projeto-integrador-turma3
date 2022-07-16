const listaPlanos = [
    {nome:"BASIC",
    preco:30,
    barbas:1,
    cabelos:1,
    img:"images/barbeiros/barbeiro_detalhe_barba_tesoura.jpg",
    vantagens:["Barbas mais robustas","Ajustes mensais"],
    economia:20}
    ,
    {nome:"STANDARD",
    preco:65,
    barbas:2,
    cabelos:3,
    img:"images/barbeiros/barbeiro_detalhe_barba.jpg",
    vantagens:["Atendentes","Escolha de Barbeiro","Horários fixos"],
    economia:25}
    ,
    {nome:"PREMIUM",
    preco:80,
    barbas:5,
    cabelos:5,
    img:"images/barbeiros/barbeiro_detalhe_tesoura.jpg",
    vantagens:["Preferência nos agendamentos","Maior flexibilidade de agendamento","Atendimento Luxo"],
    economia:30}
    ,
    {nome:"MASTER",
    preco:100,
    barbas: 'Ilimitado',
    cabelos:'Ilimitado',
    img:"images/barbeiros/barbeiro_detalhe_tesoura.jpg",
    vantagens:["Preferência nos agendamentos","Maior flexibilidade de agendamento","Atendimento Luxo"],
    economia:30}
]

module.exports = listaPlanos;