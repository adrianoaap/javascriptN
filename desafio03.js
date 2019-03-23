// Declare uma variável qualquer, que receba um objeto vazio.
var pessoa = {};

// Declare uma variável pessoa, que receba suas informações pessoais. As propriedades e tipos
// de valores para cada propriedade desse objeto devem ser:
// - nome String, sobreNome String, sexo String, altura number, andando true e 
// caminhoQuantosMetros number inicia com 0
pessoa.nome = 'Miguel';
pessoa.sobreNome = 'Palmeira';
pessoa.idade = 6;
pessoa.altura = 1.25;
pessoa.peso = 35;
pessoa.andando = false;
pessoa.caminhoQuantosMetros = 0;
pessoa.sexo = 'M';

// Adcione um método ao objeto chamdo 'fazerAniversario', o método altera a idade da pessoa
// somando mais 1, cada vez que invocado
pessoa.fazerAniversario = function () {
    pessoa.idade = pessoa.idade + 1;
    return pessoa.idade;
}

// Adcione um método ao objeto pessoa chamando andar, que terá as seguintes caracteristicas:
// - Esse método deve receber por parâmetro um valor que representará a quantidade de metros
// caminhados;
// - Ele deverá alterar o valor da propriedade caminhoQuantosMetros, somando ao
// valor dessa propriedade a quantidade passada por parâmetro;
// - Ele devera modificar o valor da propriedade andando para o valor booleano que representa
// verdadeiro
pessoa.andar = function (metrosCaminhados) {
    pessoa.caminhoQuantosMetros += metrosCaminhados;
    pessoa.andando = true;
    return pessoa.caminhoQuantosMetros;
} 

pessoa.parar = function(){
    return  pessoa.andando = false;
}

// Crie um método chamado nomeCompleto , que retorna a frase:
//  - Olá! Meu nome é 'nome' 'sobrenome'

pessoa.nomeCompleto = function(){
    return 'Olá! meu nome é ' + pessoa.nome + ' ' + pessoa.sobreNome;
}

// Crie um método chamado mostraIdade , que retorna a frase:
//  - Olá! eu tenho 'idade' anos

pessoa.mostraIdade = function(){
    return 'Olá! eu tenho ' + pessoa.idade + ' anos.';
}


// Crie um método chamado mostraAltura , que retorna a frase:
//  - Minha altura é 'altura'

pessoa.mostraIdade = function(){
    return 'Minha altura é '+altura;
}


// Crie um método chamado mostraPeso , que retorna a frase:
//  - Eu peso 'peso' kg

pessoa.mostraPeso = function(){
    return 'Eu peso '+ pessoa.peso + ' kg';
}

// Faça a pessoa fazer 3 aniversarios
pessoa.fazerAniversario();
pessoa.fazerAniversario();
pessoa.fazerAniversario();
// 9

// Faça a pessoa caminhar alguns metros, invocando o método andar 3 vezes
// com passagem de parametros diferentes
pessoa.andar(2);
pessoa.andar(4);
pessoa.andar(12);
// 18

// Agora vamos bricar um pouco com objeto criado:
// Crie um mmétodo chamado apreesentração. Esse método deve retorbar a String:
// - Olá, eu sou o 'nome completo', tenho 'idade' anos, 'altura', meu peso é 'peso'
// Só que antes de retornar a string voçê deve fazer algumas validações:
//  - Se o sexo da pessoa for 'feminino', a frase acima, no ínicio da a presentação
//  onde diz 'eu sou o', deve mostrar 'a' no lugar de 'o';
//  - Se a idade for 1, a frase deve mostrar a palavara 'ano' no lugar de 'anos'
//  - Se a quantidade de metros caminhados for igual a 1, a palavra deve conter o
//  retorno da frase acima é 'metro' no lugar de 'metros'

pessoa.apresentacao = function () {

    var sexo = pessoa.sexo == 'M' ? 'o' : 'a';
    var idade = pessoa.idade == 1 ? 'ano' : 'anos';
    var qtdeMetros = pessoa.caminhoQuantosMetros > 1 ? 'metros' : 'metro';

    return 'Olá, eu sou ' + sexo + ' ' + pessoa.nomeCompleto() + ' tenho ' + pessoa.idade + ' ' + idade
        + ' e caminhei '+ pessoa.caminhoQuantosMetros+ ' ' + qtdeMetros + ' meu peso é ' + pessoa.peso + ' kg';
}
