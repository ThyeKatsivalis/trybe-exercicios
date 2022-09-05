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
  for (let colunaBase = 0; colunaBase <= base; colunaBase += 1) {
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

// Observações: usando o codigo do triangulo você irá criar uma variavel de posicionamento igual a base 
// pois note que o espaço vazio forma o triangulo original de cabeça pra baixo, para definir esse 
// posicionamento criaremos um segundo laço de repetição for com valor igual o da base. Apos criaremos 
// uma estrutura condicional onde queremos saber se a variavel colunaBase é menor que a posicaoSimbolo, 
// se ela for concatenamos a linha com ela mesma e uma string contendo um espaço ' ' caso nao seja será 
// preenchida com o simbolo. Para finalizar iremos zerar a linha simbolo do primero laço de 
// repetição '' e vamos decrementar o simbolo para que ele apareça de tras pra frente. 