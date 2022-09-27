let total = document.getElementById('total')
let planopreco = document.getElementById('plano-preco')
let escolhaTempoPlano = document.getElementById('exampleFormControlSelect1')

let estado = document.getElementById('estado')



escolhaTempoPlano.addEventListener('change',function(){

    total.innerHTML = parseFloat(planopreco.innerHTML) * parseFloat(escolhaTempoPlano.value) 
})
const getEstados = async ()=>{
    let res = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome',{method:'get'})
    let distritos = await res.json();
    return distritos

}


const showEstados = ()=>{
    const s = document.getElementById('estado');
    const options = distritos;
    console.log(options)

    for (const option in options){
        s.appendChild(new Option(option.name,option.sigla));    
}
}
window.onload = (event) =>{
    distritos = getEstados()
    showEstados()
}