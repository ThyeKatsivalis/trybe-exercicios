// Questão Bonus 2: Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo 
// retângulo com 5 asteriscos de base. Por exemplo:

// lógica: para criar o triangulo retangulo precisamos imprimir os asteriscos em ordem crescente de 
// numero de cima para baixo até a base

let base = 5;
let simbolo = ('@');
let linhaSimbolo = ('');

for (let linhaIndex = 0; linhaIndex <= base; linhaIndex += 1) {
  linhaSimbolo = linhaSimbolo + simbolo;
    console.log(linhaSimbolo)
}

// Observações: o triangulo é um quadrado ou um retangulo cortado na diagonal. nesse exercicio usaremos
// apenas um laço de repetição aumentar o numero de asteriscos por linha pq nao precisamos acrescentar 
// um laço para aumentar os simbolos na mesma linha , para finalizar concatenamos linhaSimbolo com ele 
// mesmo + o simbolo, em cada repetição o programa ira adicionar um asterisco na linha seguinte criando 
// o triangulo retangulo. Na base podemos aumentar o tamanho do triangulo no simbolo podemos usar 
// qualquer coisa.