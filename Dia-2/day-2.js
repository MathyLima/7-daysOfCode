/**Deve pedir para o usuário responder 3 perguntas:

- Qual o seu nome?
- Quantos anos você tem?
- Qual linguagem de programação você está estudando?

À medida que as perguntas forem sendo feitas, a pessoa que estiver usando o programa deve responder cada uma delas.

No final, o sistema vai exibir a mensagem:

"Olá [nome], você tem [idade] anos e já está aprendendo [linguagem]!"

Note que cada informação entre [ ] é uma das respostas dadas pela pessoa. */

var inputName = document.querySelector('#name');
var inputIdade = document.querySelector('#age');
var inputLanguage = document.querySelector('#currLanguage');
const inputGosto = document.querySelector('#options');
var submitbtn = document.querySelector('#btnEnvia');



submitbtn.addEventListener("click", (e) => {
    e.preventDefault();
    var nomeUsuario = inputName.value;
    var idadeUsuario = inputIdade.value;
    var linguagemUsuario = inputLanguage.value;
    var gostoDoUsuarioIndice = inputGosto.selectedIndex;
    const textGosto = inputGosto.options[gostoDoUsuarioIndice].text;

    if (nomeUsuario === "" || idadeUsuario === "" || linguagemUsuario === "") {
        alert("Preencha todos os campos");
    } else {
        console.log("Olá " + nomeUsuario + ",você tem " + idadeUsuario + " anos e já está aprendendo " + linguagemUsuario + "!");
    }

    if (textGosto !== "") {
        if (textGosto === "Sim") {
            console.log("Muito bom! Continue estudando e você terá muito sucesso.")
        }
        if (textGosto === "Não") {
            console.log("Ahh que pena... Já tentou aprender outras linguagens?")
        }
    }
})

