let total = document.getElementById('total')
let planopreco = document.getElementById('plano-preco')
let escolhaTempoPlano = document.getElementById('exampleFormControlSelect1')




escolhaTempoPlano.addEventListener('change',function(){

    total.innerHTML = parseFloat(planopreco.innerHTML) * parseFloat(escolhaTempoPlano.value) 
})