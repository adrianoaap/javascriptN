/**
 *  Crie um array chamado numberObjects.Esse array deve ter 10 elementos. Cada elemento
 * será um objeto no formato: { number: [number]}
 */

var numberObjects = [];
for (var i = 1; i <= 10; i++) {
    numberObjects.push({ number: i });
}

/**
 * Crie um novo array chamado justNumbers, que tera como elementos somente os números do
 * array criado acima.
 */

var justNumbers = [];
var just = numberObjects.map(function (item) {
    return item.number;
});

/**
 * Crie um novo array chamado justMod0Or3, que receberá o array criado acima somente os números
 * que forem divisíveis pir 2 ou 3.Mostre esse novo array no console
 */

var justMod02Or03 = justNumbers.filter(function (item) {
    return item % 2 == 0 || item % 3 == 0;
});

/**
 *  Declare uma variável chamada operation que receba , do array criado acima, um valor
 * reduzido pela seguinte operação:
 *  - Somar 1 ao valor retornado
 *  - Multiplicar o resultado pelo valor atual
 * O calculo deve começar do zero
 */

var operation = justMod02Or03.reduce(function (acumulado, atual) {
    return (acumulado + 1) * atual
}, 0);

/**
 * Crie um array chamdo name.Cada elemento desse array deve ser uma síliba do seu nome.
 * vamos reduzir esse array, juntando todas as sílibas, mas usando a 'lingua no P'
 */

var name = ['A', 'dri', 'ano'];
var reduceP = name.reduce(function (acumulador, atual) {
    return  acumulador + 'P' + atual
}, '');


/**
 * Crie uma variável chamada inverName, que reduzirá o array em uma string e atribuirá
 * o seu nome invertido
 */
