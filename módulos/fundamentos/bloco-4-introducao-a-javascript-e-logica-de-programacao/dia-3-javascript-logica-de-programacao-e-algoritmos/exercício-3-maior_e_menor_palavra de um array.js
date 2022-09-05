//Questão 3
// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. 
// Considere o número de caracteres de cada palavra. 

//lógica: devemos declarar o array,declarar as variaveis necessarias, percorrer o array, medir qual a maior 
// palavra,tirar ela do array ,imprimir a maior palavra na tela
//devemos declarar o array,declarar as variaveis necessarias, percorrer o array, medir qual a menor 
// palavra,tirar ela do array ,imprimir a menor na tela

let array = ['java', 'javascript', 'python', 'html', 'css'];

let encontraMaiorPalavra = array[0];
let encontraMenorPalavra = array[0];

for (let index = 0; index < array.length; index += 1) {
  if (array[index].length > encontraMaiorPalavra.length) {
      encontraMaiorPalavra = array[index];
  }
}

for (let index = 0; index < array.length; index += 1) {
  if (array[index].length < encontraMenorPalavra.length) {
      encontraMenorPalavra = array[index];
  }
}

console.log(encontraMaiorPalavra);
console.log(encontraMenorPalavra);