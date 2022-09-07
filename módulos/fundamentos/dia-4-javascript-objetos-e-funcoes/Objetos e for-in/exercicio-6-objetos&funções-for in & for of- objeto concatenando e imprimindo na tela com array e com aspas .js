/** 
6 - Acesse as chaves nome, sobrenome e titulo, que está dentro da chave livrosFavoritos, e 
faça um console.log no seguinte formato: "O livro favorito de Julia Pessoa se chama 
'O Pior Dia de Todos'".

acesssar chaves e imprimir na tela a frase. "O livro favorito de Julia Pessoa se chama 
'O Pior Dia de Todos'". passar a chave para codigo: 
'O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' ' + 'se chama ' + livrosFavoritos'[titulo]'
usar ferramenta para imprimir na tela a informação pedida, inserir frase dentro da ferramenta

*/

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' ' + 'se chama "' + leitor.livrosFavoritos[0].titulo + '"')
