/**
 *  Crie uma variável qualquer, que receba um array com valores aleatórios ao menos 5
 */
var myArray = [1, false, { nome: 'adriano' }, null, undefined, 'Flamengo'];

// Crie uma função que receba um array como parâmetro, e retorne esse array
function myFunction(array) {
    return array;
}

// Imprima o segundo índice do array
myFunction(myArray[1]); // false

/*
    Crie uma função que receba dois parâmetros: o primeiro, um array de valores, e o segundo
    um número. A função deve retorb=nar um indice do array que foi passado no primerio parâmetro
    . O índice a ser retornado, deve ser o número passado no segundo parâmetro.
 */
function myFunction2(array, index) {
    return array[index];
}

// Declare uma variável que receba um array co 5 valores, de tipo diferentes
var myArray2 = [true, 4, undefined, null, {nome: 'Adrinao', profissao: 'Programador'}];

// Invoque a função criada acima, fazendo retornar todos os valores do último array criado.
// myFunction2(myArray2, 0) // true
// myFunction2(myArray2, 1) // undefiend
// myFunction2(myArray2, 2) // null
// myFunction2(myArray2, 3) // {nome: 'Adrinao', profissao: 'Programador'}

/*
    Crie uma função chamada 'book', que recebe um parâmetro, que será o nome do livro.
    Dentro dessa função, declare uma variável que receba um objeto com as seguintes
    caracterticas:
    - esse objeto irá receber 3 propriedades, que serão o nomes do livros;
    - cada uma dessas propriedades será um novo objeto, que terá outras 3 propriedades:
      - qtdePaginas = number
      - autor = String
      - editora = string
    - a função deve retornar o objeto referente ao livro passado por parâmetro.
    - se o parâmetro nao for passado, a função deve retornar o objeto com todos os livros
*/
function book(bookName) {

    var allBooks = {
        'tudo sobre java': { qtdePaginas: 201, autor: 'Palmeira Miguel', editora: 'Abril' },
        'css 3': { qtdePaginas: 121, autor: 'Rosa Edirene', editora: 'Panini' },
        'js ninja': { qtdePaginas: 221, autor: 'Ayres Adriano', editora: 'nova' }
    }
    
    return !bookName ? allBooks : allBooks[bookName];

}

// Usando a função acima passando todos objetos acima
book()

// Com a função acima, imprime o nome de um autor 
var bookName = 'js ninja';
console.log(' O autor do livro ' + bookName +' é '+ book('js ninja').autor);
