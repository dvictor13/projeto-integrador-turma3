const alterar = document.getElementById("alterar");
const userImage = document.getElementById('userImage')
const addError = document.querySelector('div.addErrors ul')

    alterar.onclick = function() {
        const special = document.querySelectorAll("input");

        special.forEach((userItem) => {
            userItem.disabled = false;
        });
        document.getElementById("alterar").style.display = 'none';
        document.getElementById("cancelar").style.display = 'flex';
    }

const cancelar = document.getElementById("cancelar");

    cancelar.onclick = () => {
        const special = document.querySelectorAll("input");
        special.forEach((userItem) => {
            userItem.disabled = true;
        });
        document.getElementById("alterar").style.display = 'flex';
        document.getElementById("cancelar").style.display = 'none';
        userImage.disabled = false
    }

// const carregarFoto = document.getElementById("carregarFoto");

//     carregarFoto.addEventListener("click", function(e){
//         e.preventDefault();
//         const foto = document.getElementById("userImage");
//         const value = foto.value
//         console.log("🚀 ~ file: assinante.js ~ line 30 ~ carregarFoto.addEventListener ~ value", value)
        
//     })


const carregarFoto = document.getElementById('carregarFoto');

carregarFoto.addEventListener('click', event =>{
    addError.innerHTML = '' 

    var filePath = userImage.value;

    var validExt = [ 'jpg', 'png' ];
    var ext = filePath.split('.').pop();

    if (validExt.indexOf(ext.toLowerCase()) == -1) {
        event.preventDefault();
        this.value = '';

        addError.innerHTML += '<li>Insira uma foto válida</li>'
        addError.innerHTML += '<li>(*.jpeg ou *.png)</li>'

    }
})

