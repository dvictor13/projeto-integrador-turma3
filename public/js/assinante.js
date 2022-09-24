const alterar = document.getElementById("alterar");

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
    }

// const carregarFoto = document.getElementById("carregarFoto");

//     carregarFoto.addEventListener("click", function(e){
//         e.preventDefault();
//         const foto = document.getElementById("userImage");
//         const value = foto.value
//         console.log("🚀 ~ file: assinante.js ~ line 30 ~ carregarFoto.addEventListener ~ value", value)
        
//     })