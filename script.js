const inputNome = document.getElementById("nome");
const inputEmail = document.getElementById("email");
const inputMensagem = document.getElementById("mensagem");
const btnEnviar = document.getElementById("enviar");

btnEnviar.addEventListener("click", myFunction);

function myFunction() {
    if ((!inputNome.value) || (!inputEmail.value) || (!inputMensagem.value)) {
        alert("Por favor, preencha todos os campos!");
    } else {
        alert("Sua mensagem foi enviada com sucesso!");
    }
   
} 