const buttonMedicamentos = document.querySelector("#medicamentos")
const remedios = document.querySelector(".remedios");

// variavel validacao
const campoNome = document.querySelector("#nome")
const campoCidade = document.querySelector("#cidade")
const buttonEnviar = document.querySelector("buton")

function clearForm() {
    campoNome.value = ""
    campoCidade.value = ""
}

// Funcao da validacao
buttonEnviar.addEventListener("click", function(event) {
    event.preventDefault()
    if (campoNome.value === '') {
        alert("prencha o campo nome")
        return false;
    }
    campoNome.value = ""
    return false; 

});

//chamando medicamentos
buttonMedicamentos.addEventListener("click",function() {
    remedios.classList.add("d-block");    
})