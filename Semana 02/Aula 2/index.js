//Bloco simples if
var idade = 17;
//Leitura = Se idade for maior ou igual a 18 o bloco do if será executado
if (idade >= 18) {
  console.log("É maior de idade");
}

//exercicio slide 12
var media = 10;
if (media >= 7) {
  console.log(
    "Parabéns você tirou a média mínima, não esqueça de continuar estudando :)"
  );
}

//Bloco composto if - else
var idade = 20;
if (idade >= 18) {
  console.log("É maior de idade");
} else {
  console.log("É menor de idade");
}

//Bloco aninhado if... else if... else if... else
var idade = 30;
//Se a primeira não passar ele cai na segunda validação
if (idade === 18) {
  console.log("Acabou de ser maior idade");
} else if (idade > 18) {
  console.log("É maior de idade");
} else if (idade == 24) {
  console.log("É maior de idade");
} else if (idade == 89) {
  console.log("É maior de idade");
} else {
  console.log("É menor de idade");
}
// Em ultimo caso, se não cair em nenhuma condição do if,
// ele automaticamente cai no else

// Exercicio slide 16
var nota = window.prompt("Digite sua nota 1");
var nota2 = window.prompt("Digite sua nota 2");
var nota3 = window.prompt("Digite sua nota 3");
var notas = (parseFloat(nota) + parseFloat(nota2) + parseFloat(nota3)) / 3;
if (notas < 7) {
  alert("Reprovado");
} else if (notas < 10) {
  alert("Aprovado na média");
} else if (notas == 10) {
  alert("Aprovado com excelência!");
}

document.write(notas);

// Merito do Silas Pereira
var nota1 = parseFloat(window.prompt("Digite a primeira nota."));
var nota2 = parseFloat(window.prompt("Digite a segunda nota."));

var notaTotal = nota1 + nota2;

document.write("<h1>" + "Sua nota é " + notaTotal + ".</h1>");

if (notaTotal >= 7 && notaTotal < 10) {
  document.write("<h2>" + "Aprovado" + "</h2>");
} else if (notaTotal < 7) {
  document.write("<h2>Reprovado</h2>");
} else if (notaTotal == 10) {
  document.write("<h1>" + "Você arrasou. Aprovado com excelência." + "</h1>");
}

//If ternário
var isLogged = false,
  token = "gbl245-43ftg43-43tf34-43";

//declaração gasta sem o if ternário
// if(token){
//  isLogged = true;
// }else{
//   isLogged = false;
// }

//declaração com o if ternário
// isLogged = token ? true : false;

//Switch
var idade = 89;
switch (idade) {
  case 13:
    console.log("10");
    break;
  case 11:
    console.log("13");
    break;
  case "13":
    console.log("13 string");
    break;
  case 20:
    console.log("20");
    break;
  case 15:
    console.log("15");
    break;
  default:
    console.log("Não encontrado");
}
