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