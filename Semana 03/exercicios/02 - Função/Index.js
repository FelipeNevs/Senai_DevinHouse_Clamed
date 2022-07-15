function imprimirElementosDaLista(lista = []) {
    for (let item of lista) {
      console.log(item);
    }
    let quantidade = "Quantidade de elementos: " + lista.length;
    return quantidade;
  }
  console.log(imprimirElementosDaLista(["PS5", "XBox", "Switch", "PC"]));