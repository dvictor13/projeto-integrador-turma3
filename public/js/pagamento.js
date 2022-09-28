let total = document.getElementById('total')
let planopreco = document.getElementById('plano-preco')
let escolhaTempoPlano = document.getElementById('exampleFormControlSelect1')

let estado = document.getElementById('estado')



escolhaTempoPlano.addEventListener('change',function(){

    total.innerHTML = parseFloat(planopreco.innerHTML) * parseFloat(escolhaTempoPlano.value) 
})

const getEstados = async ()=>{
    let response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome',{method:'get'})
    let distritos = await response.json();
    s = document.getElementById('estado');
    distritos.forEach(distrito =>{ s.appendChild(new Option(distrito.nome,distrito.sigla))})
}


const getPaises = async ()=>{
    let respaises = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/paises?orderBy=nome',{method:'get'})
    let paises = await respaises.json();
    p = document.getElementById('pais');
    paises.forEach(pais =>{ p.appendChild(new Option(pais.nome,pais.nome))})
    // console.log(paises);
    return paises
}


getEstados()
//showEstados(distritos)
getPaises()


