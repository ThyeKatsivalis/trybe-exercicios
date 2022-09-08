 
function verificaPalindrome(word) {
    for(index in word) {
      if(word[index] != word[(word.length - 1) - index]) {
        return false;
      }
    }
    return true;
  }

console.log(verificaPalindrome('barata'))
console.log(verificaPalindrome('arara'))

/**
  
 function ehPalindromo(palavra) {

var palindromo = ""

for(var index = palavra.length - 1; index >= 0; index--) {
    palindromo += palavra[index]
}

if (palavra == palindromo) {
  return "SIM, SOU UM PALÍNDROMO"
} else {
  return "INFELIZMENTE, NÃO SOU UM PALÍNDROMO"

}    
 
}
 */