let total = document.getElementById('total')
let planopreco = document.getElementById('plano-preco')
let escolhaTempoPlano = document.getElementById('exampleFormControlSelect1')

let estado = document.getElementById('estado')



escolhaTempoPlano.addEventListener('change',function(){

    total.innerHTML = parseFloat(planopreco.innerHTML) * parseFloat(escolhaTempoPlano.value) 
})

// const getEstados = async ()=>{
//     let res = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome')
//     let distritos = await res.json();
//     return distritos
   
// }
// distritos = getEstados()

// const s = document.getElementById('estado');
// const options = distritos;

// options.forEach((element,key) => {
//     s[key] = new Option(element,key);
// });
