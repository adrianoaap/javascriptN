// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(n1, n2) {
    var res = n1 + n2;
    return res;
}

soma(4, 8); // 12

// Declare uma variável que receba a função criada acima, passando dois numeros
// quaisquer como parametros, e somando mais 5
var resultado = 5 + soma(1, 8); // 14

// Declare uma nova variavel sem valor
var num;

// Crie uma função que adcione o valor a variavel acima, e retorne a string
// o valr da variavel e VALOR

function retornaNovariavel() {
    num = 25;
    return " O valor da variável " + num;
}

// Qual e o retorno da função
// O  valor da variável  25;


// Crie uma função com as seguintes caracteristicas:
// 1. A função de ve receber 3 argumentos;
// 2. Se qualquer um dos 3 argumentos não forem preencidos a função deve retornar a string:
//   - Preencha todos os valores corretamente!
// 3. O retorno da função deve ser a multiplicação de 3 argumentos, 
//somando 2 ao resultado final

function newFunction(num1, num2, num3) {
    if (num1 == undefined || num2 == undefined || num3 == undefined) {
        return 'Preencha todos os valores corretamente!';
    }
    var res = (num1 * num2 * num3) + 2;
    return res
}

// Qual resultado retorna acima
var resultado = newFunction(1, 4); // Preencha todos os valores corretamente!

// Agoora involque a função passando os 3 parametros
var result = newFunction(1, 4, 5); // 22


// Crie uma função com as seguintes caracteristicas:
// 1. A função de ve receber 3 argumentos;
// 2. Se somente um argumento for passado retorne o valor do argumento
// 3. Se dois argumentos forem passados retorne a soma
// 4. Se todos os argumentos foram passados, retorne a soma do primeiro com o segundo,
//     - dividindo pelo 3 argumento
// 5. Se nenhum argumento for passado, retorne false
// 6. E ainda se nenhuma condição for atendida acima, retorne null

function myFunction(a, b, c){
    if(a !== undefined && b === undefined && c === undefined){
        return a;
    } else if(a !== undefined && b !== undefined && c === undefined){
        return a + b;
    } else if(a !== undefined && b !== undefined && c !== undefined) {
        var soma = a + b;
        return soma / c;
    } else if(a === undefined && b === undefined && c === undefined) {
        return false;
    } else {
        return null;
    }
}