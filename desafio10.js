(function () {
    /**
     * Crie no console e mostre no console a representação em String desse array, usando
     * método visto na aula 13
     */
    var arr = [1, 2, 3, 4, 5];
    console.log(" O array em formato de string é:");
    arr.toString(); // "1,2,3,4,5"

    /**
     *  Crie 2 arrays 'sul' e 'sudeste', que serão as regiões do Brasil.Cada array deve conter
     * os estados dessa região
     */

    var sul = ["Paraná", "Santa Catarina", "Rio Grande do Sul"];
    var sudeste = [
        "Espírito Santo",
        " Minas Gerais",
        "Rio de Janeiro",
        "São Paulo"
    ];

    /**
     *  Crie uma variável chamada 'brasil', que irá receber as duas regiões concatenadas
     */

    var brasil = sul.concat(sudeste);

    // Adcione 3 novos estados da região norte no inicio do array brasil
    brasil.unshift("Acre", "Amapá", "Amazonas");

    // Remove o primeiro estado do array brasil
    brasil.shift();

    /**
     *  Crie um novo array chamado 'newSul', que receba somente os estados do sul, pegando
     *  do array 'brasil'.Não remova o item desse array
     */

    var newSul = brasil.slice(2, 5);

    /**
     *  Crie um array chamado 'nordeste', que tenha estados do nordesta
     */

    var nordeste = [
        "Alagoas",
        "Bahia",
        "Ceará",
        "Maranhão",
        "Paraíba",
        "Pernambuco",
        "Piauí",
        "Rio Grande do Norte",
        "Sergipe"
    ];

    // Remova de 'brasil' os estados do 'sudeste', colocando-os em uma variável chamada 'newSudeste'
    var newSudeste = brasil.splice(5);

    // usando forEach, percorra o array 'brasil' e gere um novo array chamado newBrasil
    // esse array deve ter cada item do objeto com as propriedades

    var newBrasil = [];
    brasil.forEach(function (item, index) {
        newBrasil.push({ id: index, estado: item });
    });

    /**
          Percorra o array 'brasil' e verifique se os estados tem mais de 7 letras cada,
           atribuindo o resultado a uma variável.Se tiver, mostre no console a frase:
           - 'Sim, todos os estados tem masi de 7 letras!'
          Senao, msotre no console:
           - 'Nem todos so estados tem mais de 7 letras !'
  
       */

    var isTem7Letras = brasil.every(function (item) {
        return item.length > 7;
    })

    isTem7Letras ? 'Sim, todos os estados tem masi de 7 letras!' : 'Nem todos so estados tem mais de 7 letras!';


    /*
        Percorra o array 'brasil' e verifique se o Ceará está incluído, atribuindo
        o resultado á uma variável. Se esse estado existi no array,
        mostre a frase no console:
        - 'Ceará esta incluído'
        senao
        - 'Ceará não foi incluído'
    */

    var isExisteCeara = brasil.some(function (item) {
        return item === 'Ceará'
        // item == 'Ceará'? 'Ceará esta incluído' : 'Ceará não foi incluído';
    })

    isExisteCeara ? 'Ceará esta incluído' : 'Ceará não foi incluído';

    /**
     * Percorra o array 'newBrasil' e crie um novo array que some 1 no id de cada objeto
     * desse array, e adcione a frase abaixo na propriedade 'estado':
     * - 'Estado pertence ao brasil'
     */

    var map = newBrasil.map(function (item, index) {
        item.id++;
        item.estado += ' Estado pertence ao brasil'
        return item;
    })

    /**
     * Filtre o array chamado acima, retornando somente os estados que tiverem ID par
     */

    var filter = newBrasil.filter(function (item) {
        if (item.id % 2 == 0)
            return item;
    })

});
