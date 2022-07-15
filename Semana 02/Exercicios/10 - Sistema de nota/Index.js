var nome,
  nota,
  notas = [],
  soma = 0,
  media,
  contador = 0;

//Prompt para receber Nome do aluno e laço While para receber Nota de 4 unidades
nome = window.prompt("Digite o NOME do aluno.");
while (contador < 4) {
  nota = parseFloat(
    window.prompt(
      `Digite a NOTA da ${
        contador + 1
      }ª unidade.\n\nObservações:\n\nSó serão aceitos valores entre 0 e 10.`
    )
  );

  //Impedir entradas diferentes de valores entre 0 e 10
  if (nota > 10 || nota < 0) {
    window.alert(
      `O valor ${nota} não é aceito.\n\nDigite um valor entre 0 e 10.`
    );
    contador--;
  } else {
    notas.push(nota);
  }
  contador++;
}

//Laço para somar todas as notas
for (i = 0; i < notas.length; i++) {
  soma += notas[i];
}

//Cálculo de média
media = soma / notas.length;

//Verificação da nota e apresentação do nome do aluno, sua nota e se foi aprovado ou não
if (media >= 7) {
  document.write(`<h1>Aluno: ${nome}</h1>`);
  document.write(`<h2>Média: ${media.toFixed(2)}</h2>`);
  document.write(`<h2>Resultado: Aprovado</h2>`);
} else {
  document.write(`<h1>Aluno: ${nome}</h1>`);
  document.write(`<h2>Média: ${media.toFixed(2)}</h2>`);
  document.write(`<h2>Resultado: Reprovado</h2>`);
}