var i = 0;
// da linha 2 ate a linha 5 são a mesma proposta
i++; // Essa é a mais recomendada para incrementar com mais 1
i--; // Essa é a mais recomendada para decrementar com menos 1
// i = i + 1; // a linha 3 é a mesma coisa que essa
i += 10; //Essa é a mais recomendada para incrementar com main 10
// i = i + 10; // a linha 6 é a mesma coisa que essa


// Teste com o devTools aberto e aperte f6 para prosseguir
// para o próximo passo
// for (i = 0; i < 5; i++) {
//   debugger;
//   console.log("contador:" + i);
// }

// // Resolvendo o exercicio do slide 12
// for (contador = 1; contador <= 10; contador++) {
//   if (contador % 2 == 0) {
//     document.write(contador + "<br />");
//   }
// }


let alunos = ["Kayra","Silas","Arthur","Alan","Paula","Renan"];

//da linha 27 ate 31 isso se torna custoso e desnecessário para o código
// console.log(alunos[0]);
// console.log(alunos[1]);
// console.log(alunos[2]);
// console.log(alunos[3]);
// console.log(alunos[4]);

//Por isso é mais recomendado ou utilizar o laço "for" ou o "for of"
// for(i=0; i < alunos.length; i++){
//   console.log(alunos[i]);
// }

// For of (farofa)
for (var aluno of alunos) {
  // aluno é igual cada item do array alunos
  // alunos é igual array;
  console.log("Aluno: ", aluno);
}


//While
// Teste com o devTools aberto e aperte f6 para prosseguir
// para o próximo passo
var contador = 1, array = [];
debugger;
while(contador <= 10){
    if(contador%2 == 1){
      array.push(contador);
    }
  contador++;
}

console.log(array);
