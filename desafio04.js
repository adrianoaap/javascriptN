/*
    Declare uma variável chamada 'isTruthy', e atribua a ela uma função que receba um único
    parâmetro como argumento.Essa função deve retornar 'true' se o equivalente booleano
    para o valor passado no argumento for 'true', ou 'false' para o contrário.
*/

var isTruthy = function (args) {
    var retorno = args ? true : false
    // !!args = ele passa o equivalente ao boolean
    return retorno;
}

// Invoque a função criada acima passado todos os tipos de valores 'false'
isTruthy(false);
isTruthy(0);
isTruthy(-0);
isTruthy(null);
isTruthy(undefined);
isTruthy('');
isTruthy("");

// Invoque a função acima passando como parâmetro 10 valores 'truthy'
isTruthy(!false);
isTruthy(true);
isTruthy(10);
isTruthy([]);
isTruthy(!undefined);
isTruthy('Adriano');
isTruthy({});
isTruthy(!"")
isTruthy([1, 2, 3])
isTruthy(!null)

/*
    Declare uma variável chamado 'carro', atribuindo á ela um objeto com as seguintes propriedades
    - 'marca' : string
    - 'modelo' : string
    - 'placa' : string
    - 'ano' : number
    - 'cor' : string
    - 'qtdasPortas' : number
    - 'assentos': number - 5 por padrão
    - 'qtdePessoas: number - 0 por padrão
    var carro = {
        marca: 'Hyunday',
        modelo: 'HB20',
        placa: 'jkj8341',
        ano: 2013,
        cor: 'Prata',
        qtdasPortas: 4,
        assentos: 5,
        qtdePessoas: 0
}
*/

// Crie um método 'mudaCor' que muda a cor conforme a cor passada como parâmetro
carro.mudaCor = function(cor){
    return carro.cor = cor;
}

// Crie um método 'obterMarca' para obter a marca do carro
carro.getMarca = function(){
    return carro.marca;
}

// Crie um método 'obterModelo' para obter a marca do carro
carro.getModelo = function(){
    return carro.modelo;
}

/*
    Crie um método 'obterMarcaModelo', que retorne :
    - 'Esse carro é um 'marca' 'modelo'
    para retornar os valores de marca e modelo, utilize os métodos criados acima
*/
carro.getObterMarcaModelo = function(){
    return 'Esse carro é um ' + carro.getMarca() + ' ' + carro.getModelo();
}

/*
    Crie um método que irá adcionar pessoas no carro. Esse método terá as seguintes 
    caracteristicas:
    - Ele deverá receber como parâmetro o número de pessoas entrarão no carro. 
    Esse número não precisa encher o carro, voçê precisa acrecentar as pessoas aos poucos.
    - O método deve retornar a frase: 'Já temos [x] pessoas no carro!
    - Se o carro estiver cheio, com todos assentos la preenchidos, o método deve retornar
    a frase: 'O carro esta lotado!'
    - Se ainda houverem lugares no carro, mas a oportunidade de pessoas passadas por parâmetro
    for ultrapassar o limite de assentos do carro, voçê de retornar a frase
    'so cabem 'numeroPessoas' pessoas!'
    - Se couber somente mais uma pessoas, mostrar a palavra 'pessoa' no retorno citado acima
    , no lugar de 'pessoas'
*/
carro.adcionarPessoas = function (numeroPessoas) {
    var totalPessoas = carro.qtdePessoas + numeroPessoas;
    var qtdePessoasCabem = carro.assentos - carro.qtdePessoas;
    var plurasOuSingular = qtdePessoasCabem === 1 ? 'pessoa' : 'pessoas';
    
    if (carro.qtdePessoas === carro.assentos && totalPessoas >= carro.assentos) {
        return 'O carro esta lotado!';
    }
    if (totalPessoas > carro.assentos) {
        return 'so cabem mais ' + qtdePessoasCabem + ' ' + plurasOuSingular + '!';
    }
    carro.qtdePessoas += numeroPessoas; 
    return 'Já temos ' + totalPessoas + ' pessoas no carro!';
}

// Adcione 2 pessoas no carro
carro.adcionarPessoa(2) //'Já temos 2 pessoas no carro!';

// adcione mais 4 pessoas no carro
carro.adcionarPessoa(4) //'so cabem mais 3 pessoas!';

// Faça o carro encher
carro.adcionarPessoa(3) // 'Já temos 5 pessoas no carro

// Retire 4 pessoas do carro 
carro.adcionarPessoa(-4)// 'Já temos 1 pessoas no carro

// adcione mais 10 pessoas no carro
carro.adcionarPessoa(10) //'so cabem mais 4 pessoas!';

