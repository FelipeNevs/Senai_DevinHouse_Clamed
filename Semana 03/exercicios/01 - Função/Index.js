var informarParImpar = function (num1){
    var resultado;
    if(num1 % 2 == 0){
        resultado = 'Par'
    } else if(num1 %2 == 1){
        resultado = 'Ímpar'
    } else{ resultado = "inválido"}
  
    return resultado
  }