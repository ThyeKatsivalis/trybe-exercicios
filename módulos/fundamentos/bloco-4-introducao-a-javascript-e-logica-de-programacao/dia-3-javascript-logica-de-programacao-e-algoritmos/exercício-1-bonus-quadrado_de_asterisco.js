// Questão Bonus 1: Agora vamos trabalhar com algumas formas geométricas! Faça um programa que, 
// dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado 
// de tamanho n. exemplo:

// n = 5

// *****
// *****
// *****
// *****
// *****

// lógica: criar variaveis para armazenar valores, criar asterisco em linha n vezes, n = numero de 
// linhas, criar linha de asterisco, repetir linha n vezes,imprimir na tela

let n = 5;
let simbolo = '*';
let linhaDeAsterisco = '';

for (let linhaIndex = 0; linhaIndex < n ; linhaIndex +=1) {
  linhaDeAsterisco = linhaDeAsterisco + simbolo
}

for (let linhaIndex = 0; linhaIndex < n ; linhaIndex +=1) {
  console.log(linhaDeAsterisco)
}

// Observações: é preciso imprimir(console.log) o asterisco n na tela do console vezes para isso iremos 
// criar um laço de repetição para repetir a operação n vezes imprimindo uma linha de asterisco a cada 
// repetição. Após esse passo precisamos criar um segundo laço de repetição for para adicionar n 
// asteriscos a linha. Apos criar essa repetição criaremos a variavel simbolo para armazenar o valor e 
// conseguir imprimir atraves do nosso segundo for. Agora podemos utilizar qualquer coisa no lugar do
// simbolo e imprimir oque quisermos.