var contador = 0, 
resposta,
 qtdRuim = 0; 
 
 while (contador <4) {
    resposta = window.prompt(
        "O que você achou sobre a série Stanger Things?"
    );
 
 switch (respota) {
    case "ruim":
        qtdruim++;
        break;
    case "bom":
        break;
    case "excelente":
        break;
    default:
        window.alert("Por favor digitar valor valido. Digite 'ruim', 'bom', ou 'excelente'");
        contador --;
 }
        contador++;
}
console.log('Quantidade de avaliações "Ruim": $(qntdRuim}');
