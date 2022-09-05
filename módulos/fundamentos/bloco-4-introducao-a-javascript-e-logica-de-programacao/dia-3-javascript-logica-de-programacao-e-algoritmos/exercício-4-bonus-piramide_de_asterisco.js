// Questão Bonus 4: Depois, faça uma pirâmide com n asteriscos de base, exemplo:

// n = 5

//   *
//  ***
// *****

/*Lógica: o que queremos, desenhar a piramide com asteriscos e imprimir no console. 
1 - Descobrir o que temos(coletar dados), identificar os elementos que queremos reproduzir, 
2 - descobrir o que precisa ser feito e como(escrever em forma de texto o que será feito), 
4 - pensar e determinar nas ferramentas que podemos usar para chegar ao resultado. (funções, loops, 
    estruturas condicionais etc...)
3 - codificar informação: o codigo vai funcionar assim os dados vão virar as variaveis ou constantes
o texto vai nos dizer o que faremos e como pra chegar ao resultado.  

/*Criação do algoritmo

1- Temos espaço em branco e simbolos, percebemos que a figura e formada por 3 linhas e 5 colunas, na 
imagem os espaços vazios estão dos dois lados da figura, percebemos que os simbolos estão 
centralizados, percebemos que a unica linha que ta preenchida aqui é a linha da base da figura a 
ultima de cima pra baixo, percebemos que só a coluna do centro é preenchida só de simbolos. 
o numero de simbolos aumenta da primeira linha até a ultima. 

2- definir variaveis: tamanho,espaços em branco, simbolo,linha, coluna. definir forma para imprimir 
simbolos centralizados, imprimir espaços na direita e na esquerda.  

*/


let n = 5;
let simbolo = '*';
let inputLine = '';

let midOfMatrix = (n + 1) / 2;
let controlLeft = midOfMatrix;
let controlRight = midOfMatrix;

for (let lineIndex = 0; lineIndex <= midOfMatrix; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if (columnIndex > controlLeft && columnIndex < controlRight) {
      inputLine = inputLine + simbolo;
    } else {
      inputLine = inputLine + ' ';
    }
  }
  console.log(inputLine);
  inputLine = '';
  controlRight += 1;
  controlLeft -= 1
};

// Observações: