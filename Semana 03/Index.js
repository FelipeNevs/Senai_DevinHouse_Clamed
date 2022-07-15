//Crie uma função não nomeada 
//que recebe um número e 
//devolva uma string dizendo 
//se é par ou ímpar. 


var informarParImpar = function (num1){
    var resultado;
    if(num1 % 2 == 0){
        resultado = 'Par'
    } else if(num1 %2 == 1){
        resultado = 'Ímpar'
    } else{ resultado = "inválido"}

    return resultado
}

console.log(informarParImpar());



// Crie uma função nomeada que  recebe um array de elementos,  imprima cada um dos elementos e  em seguida retorne a quantidade  de elementos no array (seu tamanho).

function imprimeElementosDaLista (lista = []){
    
    for (let item of lista){
         console.log (item);
    }
    let quantidade = "A quantidade de elementos da lista são " + lista.length;
    return quantidade

}
console.log (imprimeElementosDaLista(["oi", "turu", "bom"]));
