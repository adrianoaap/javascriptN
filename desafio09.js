(function () {


    /**
     *  Crie uma variável chamada 'onde', que receba false como seu valor.
     *  Crie um loop executando enquanto essa variável for verdadeira.Dentro do loop, 
     *  mostre no console a mensagem:
     *  'Entrou ao menos uma vez!'
     */
    var once = false;
    do {
        console.log('Entrou ao menos uma Vez!')
    } while (once);

    /**
     * Crie um objeto chamado 'person', que receba as seguintes propriedades:
     * - 'name', 'age', 'weight' e 'birthaday'. Preencha com os valores corretos para o 
     * nome, idade e peso e data de nascimento da pessoa.
     */

    var person = {
        name: 'Palmeira Miguel',
        age: 5,
        weight: 25,
        birthaday: '04/10'
    }

    /**
     * Use um loop para percorrer o obejto criado acima, mostrando no console a frase:
     *  - 'The [property] of person in [value]'
     */
    var coutter = 0;
    for (var prop in person) {
        console.log('The ' + prop + ' of person in ' + person[prop]);
        coutter++;
    }

    console.log('Propriedades para a pessoa ' + coutter)

    /**
     * Faça um loop de 0 a 20, que adcione cada número como um item de um array chamado
     * 'numbers'. Se o contador for maior que 10, saia do loop.
     */
    var numbers = [];
    for( var i =0; i < 20; i++ ){
        if( i > 10 ){
            break;
        }
        numbers.push( i );
    }

    /**
     * Faça outro loop de 0 a 20, que adcione a um array chamada 'number' ja criado acima.
     * Se o número for par, pular para o p´roximo numero
     */
    var numbers = [];
    for( var i =0; i =< 20; i++ ){
        if( i % 2 == 0 ){
            continue;
        }
        numbers.push( i );
    }



})