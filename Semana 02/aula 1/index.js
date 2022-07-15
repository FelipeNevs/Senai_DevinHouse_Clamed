//Tela com area para resposta
var idade = window.prompt("Digite sua idade");
document.write(typeof idade);

//Tela com botão para aceitar e cancelar
var isConfirm = window.confirm();
// document.write - imprime o que quer se seja no documento html
document.write("<div><h2>Retorno do confirm</h2></div>");
document.write("<h1>" + isConfirm + "</h1>"); 
document.write(typeof isConfirm); // verifica o tipo da variável


var isConfirm = window.confirm("Amigo realmente estou aqui?");
// console.log - imprime valores no console do navegador (devTools)
console.log("Retorno do confirm");
console.log("Amigo estou aqui");
console.log(typeof isConfirm);
console.log(12);

// abre um modal de alerta
window.alert(12);


//Exercício visto em aula - slide 17
// Forma 1
console.log("Rayane Cristina");

//Forma 2
var nome = window.prompt("Digite o seu nome aqui:");
var sobrenome = window.prompt("Digite seu sobrenome aqui:");

console.log(nome + " " + sobrenome);
