/**
 *  Crie uma função chamada 'addItem', que irá adcionar itens no array criado.
 */
var arr = [];
function addItem( item){
    arr.push(item);
    return arr;
}

/**
 *  Adcione um novo array criado no início do sesafio, com ao menos 3 itens de tipos diferentes,
 *  mostrando o resultado no console
 */
addItem( 'Adriano');
addItem( {time: 'flamengo'});
addItem( undefined);

/**
 *  Mostre no console o segundo elemento desse último array, criado acima, com a frase:
 * 'O segundo elemento do array é 'elemento'
 */
console.log('O segundo elemento do array é ' + arr[1])

/**
 *  Declare uma variável chamada 'sum' e atribua a ela uma função chamada 'calculaSum'
 * . A função deve receber dois parâmetros e retornar a soma desses parâmetros.
 */
var sum = function calculaSum(x, y){
    return x+ y;
}

// Invoque a função e mostre a seguinte frase: 'A soma de 'x' + 'y' é igual 'soma'
var value1 = 10;
var value2 = 20;
console.log('A soma de ' + value1 + ' + ' +  value2 + ' é '+sum(value1, value2));

// Mostre no console o nome da função
console.log(sum.name)

// Crie uma funcção chamada 'showName.Essa função deve retornar seu nome
function showName(){
    return 'Adriano Ayres'
}

// declare uma variável chamada 'varShowNAme' recebendo a função acima
var varShowNAme = showName;

/**
 *  Usando a variável criada acima, moste no console o nome e o retorno da função atribuída a ela,
 * com a seguinte frase:
 * 'A função 'nome da função' retorna 'retorno'
 */
console.log('A função '+ varShowNAme.name + ' retorna ' + varShowNAme());

/**
 *  Crie uma função chamada 'calculator', que funcione assim:
 *  - A função deve receber um parâmetro que dirá qual operação matemática ela vai efetuar.
 * Será uma string com os valores '+' , '-' , '*', '/' ou '%';
 *  - Essa função deve retornar uma segunda função que fara o seguinte:
 *  - Essa função deve receber dois parametros;
 *  - Esses dois parâmetros serão usados na operação matematica;
 *  - O retorno dessa função é a operação matematica completa
 *  - Se operador for inválido, retorna 'operação inválida' 
 *  */
function calculator(op) {
    return function (x, y) {
        var operador;
        switch (op) {
            case '+':
                operador = x + y
                break;
            case '-':
                operador = x - y
                break;
            default:
                return 'operação inválida'
        }
        return operador
    }
}
