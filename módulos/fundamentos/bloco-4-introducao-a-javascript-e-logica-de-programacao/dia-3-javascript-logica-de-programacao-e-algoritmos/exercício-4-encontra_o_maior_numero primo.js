// Questão 3
// Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, 
// é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior 
// número primo entre 2 e 50.

//lógica: devemos criar as variáveis para armazenar os valores, percorrer os valores armazenados, 
//identificar quais são primos, medir qual primo é o maior, imprimir o valor na tela

let encontraMaiorPrimo = 0;

for (let numeroAtual = 0; numeroAtual <= 50 ; numeroAtual += 1) {
  let encontraPrimo = true
  for (let divisorAtual = 2; divisorAtual < numeroAtual; divisorAtual += 1) {
    if(numeroAtual % divisorAtual == 0) {
      encontraPrimo = false;
    }
  }
  if (encontraPrimo) {
  encontraMaiorPrimo = numeroAtual;
  }
}
console.log(encontraMaiorPrimo)