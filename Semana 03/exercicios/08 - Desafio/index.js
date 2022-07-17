//Crie um site com os seguintes requisitos:

//um campo de texto (input) onde o usuário irá digitar uma mensagem

//três botões:

//um botão “adicionar”, que no momento do clique insira a mensagem na tela

//um botão “salvar mensagem”, que no momento do clique salve as informações no localStorage
//opcional: se o texto estiver vazio (length), deve mostrar uma mensagem ao usuário solicitando a inserção de algum texto.

//um botão “mostrar mensagem”, que após o recarregamento da página, no momento do clique busque a mensagem no localStorage e exiba na tela

// Function para imprimir mensagem
function add () {
    const input = document.getElementById("meu-input");
    const divPai = document.getElementById("pai");
    divPai.innerHTML = (input.value);
}

// Botao para salvar msg
const botao2 = document.getElementById("botao-save"); 
botao2.addEventListener("click", function() {
    const input = document.getElementById("meu-input");
    localStorage.setItem("mensagem", JSON.stringify(input.value))
  })

// Botao mostrar msg
function show () {
    const input = document.getElementById("meu-input");
    const divPai = document.getElementById("pai");
    const texto = localStorage.getItem("mensagem");
    divPai.innerHTML = JSON.parse(texto);
}
