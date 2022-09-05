// Questão Bonus 3: Agora inverta o lado do triângulo. Por exemplo:

// n = 5

//     *
//    **
//   ***
//  ****
// *****

// lógica: é necessario imprimir um triangulo invertido, note que exitem espaços em branco seguido de
// asteriscos o importante aqui é concatenar espaço e asterisco. criação de variaveis para armazenar os
// valores, identificar o numero de vezes de cada operação, imprimir valores na tela.

let base = 5;
let simbolo = ("*");
let linhaSimbolo = ('');
let posicaoSimbolo = base;

for (let linhaIndex = 0; linhaIndex <= base; linhaIndex += 1) {
  for (let colunaBase = 0; colunaBase <= base; base += 1) {
    if (colunaBase < posicaoSimbolo) {
      linhaSimbolo = linhaSimbolo + ' ';
    } else {
      linhaSimbolo = linhaSimbolo + simbolo;
    }
  }
  console.log(linhaSimbolo)
  linhaSimbolo = '';
  posicaoSimbolo -= 1;
}

// Observações: