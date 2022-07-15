var compra,
  maiorQtd = 0,
  itemMaiorQtd = 0,
  open = true,
  qtd = 0,
  hort = 0,
  lat = 0,
  car = 0,
  pei = 0,
  ave = 0,
  array = [],
  itens = ["Hortifruti", "Laticícios", "Carnes", "Peixes", "Aves"];

while (open == true) {
  compra = parseFloat(
    window.prompt(
      "Digite o número referente à sua compra conforme abaixo: \n\n(1) Hortifruti \n(2) Laticínios \n(3) Carnes \n(4) Peixes \n(5) Aves \n(6) Fechar pedido"
    )
  );
  //Condição para não aceitar outros valores além dos que estão na tela
  if (compra >= 1 && compra < 6) {
    qtd = parseInt(window.prompt("Digite a quantidade"));
  } else if (compra == 6) {
  } else {
    window.alert("Este valor não existe. Digite um dos valores da lista.");
  }
  switch (compra) {
    case 1:
      hort += qtd;
      break;
    case 2:
      lat += qtd;
      break;
    case 3:
      car += qtd;
      break;
    case 4:
      pei += qtd;
      break;
    case 5:
      ave += qtd;
      break;
    case 6:
      array.push(hort, lat, car, pei, ave);
      //Verificar qual é o ítem de maior quantidade
      for (i = 0; i < 5; i++) {
        if (maiorQtd < array[i]) {
          maiorQtd = array[i];
          itemMaiorQtd = itens[i];
        }
      }

      //Se nenhum ítem for selecionado termina sem a msg de qtd de ítens
      if (maiorQtd == 0) {
        window.alert(`Você não selecionou nenhum ítem.\n\nVolte sempre.`);
      } else {
        window.alert(
          `Compra finalizada. O ítem de maior quantidade nesta compra foi o ${itemMaiorQtd} com ${maiorQtd} unidade(s).\n\nVolte sempre.`
        );
      }
      open = false;
  }
}