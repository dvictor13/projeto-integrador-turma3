const nome = document.getElementById('nome');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const cpf = document.getElementById('cpf');
const nascimento = document.getElementById('nascimento');
const telefone = document.getElementById('telefone');
const endereco = document.getElementById('endereco');
const radio = document.querySelector('.custom-radio');
const concluirCadastro = document.querySelector('.concluirCadastro')
const addError = document.querySelector('div.addErrors ul')

let errors = []

concluirCadastro.addEventListener('click', event => {

    addError.innerHTML = '' 
    errors = [];
    if(nome.value == ''){
        errors.push("O campo Nome não pode ficar vazio")
    }
    if(email.value == ''){
        errors.push("O campo Email não pode ficar vazio")
    }
    if((senha.value == '') || (senha.value.length < 8)){
        errors.push("O campo Senha não pode ficar vazio e tem que ter mais de 8 caracteres")
    }
    if((cpf.value == '') || (cpf.value.length != 11)){
        errors.push("O campo CPF não pode ficar vazio e tem que ter 11 caracteres")
    }
    if((nascimento.value == '')){
        errors.push("O campo Data de Nascimento não pode ficar vazio")
    }
    if((telefone.value == '') || (telefone.value.length != 11)){
        errors.push("O campo Telefone não pode ficar vazio e tem que ter 11 caracteres")
    }
    if(endereco.value == ''){
        errors.push("O campo Endereco não pode ficar vazio")
    }
    if(radio.value == ''){
        errors.push("O campo Gênero não pode ficar vazio")
    }

    if(errors.length > 0){
        event.preventDefault();
        for(let i=0; i<errors.length; i++){
            addError.innerHTML += '<li>' + errors[i] + '</li>'
        }
    }
    
    
})


