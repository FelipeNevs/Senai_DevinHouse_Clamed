// ### Crie uma função que recebe um array de números e retorna a quantidade de números pares e a quantidade de números ímpares.
// ### Em seguida imprima na tela uma string informando a quantidade de valores informados, os ímpares e os pares
// ### (ex: A quantidade informada foi _____, a de valores pares foi ___, e a de valores ímpares foi __)

function listaNumeros(arrayNumeros = []) {
    var par = 0;
    var impar = 0;
    var invalido = 0;
    for (const item of arrayNumeros) {
      if (item % 2 == 0) {
        par++;
      } else if (item % 2 === 1) {
        impar++;
      } else {
        invalido++;
      }
      // debugger
    }
    return [par, impar, invalido];
  }
  
  //Chamada da função
  var lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, "felipe"];
  
  qtdPares = listaNumeros(lista)[0];
  qtdImpares = listaNumeros(lista)[1];
  qtdInvalidos = listaNumeros(lista)[2];
  
  // Imprime na tela
  if (qtdInvalidos != 0) {
    window.alert(`Sua lista tem ${qtdInvalidos} dados inválidos. Sua lista de números precisa conter apenas números inteiros.`);
  } else {
    console.log(`A quantidade informada foi de ${lista.length} números, a de valores pares foi de ${qtdPares}, e a de valores ímpares foi de ${qtdImpares}.`);
  }