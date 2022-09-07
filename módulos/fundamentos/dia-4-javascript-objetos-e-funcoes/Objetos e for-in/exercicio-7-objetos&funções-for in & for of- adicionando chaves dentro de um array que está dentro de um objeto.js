/** 
7 - Adicione um novo livro favorito na chave livrosFavoritos, que é um array. Atribua a esta 
chave um objeto contendo as seguintes informações:

{
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editor: 'Rocco',
}

inserir informações dentro do array livrosFavoritos que está dentro do objeto
acessar o objeto,acessar o array, inserir novos valores


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

let livrosFavoritos2 = ['Harry Potter e o Prisioneiro de Azkaban','JK Rowling','Rocco',]


leitor.livrosFavoritos.push (
    {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editor: 'Rocco',
  },
);

console.log(leitor)