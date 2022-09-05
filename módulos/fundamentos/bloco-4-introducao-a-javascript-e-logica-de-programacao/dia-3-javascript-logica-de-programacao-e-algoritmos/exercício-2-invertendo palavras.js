// Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" 
// seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para 
// verificar se seu algoritmo está funcionando corretamente. 

let palavra = 'tryber';
let inverteStrings = '';
for (let index = 0; index < palavra.length; index +=1) {
    inverteStrings += palavra[palavra.length - 1 - index]
}

console.log(inverteStrings)