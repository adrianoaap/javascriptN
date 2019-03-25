/*
    Vamos falar um pouco sobre futebol. Escolha um campeonato qualquer para começar o desafio.
    Declare uma variável chamada 'championship' que receberá o nome do campeonato, e imprima
    o nome desse campeonato no console
*/

var championship = 'Campeonata Carioca';

/*
    Declare uma variável chamada 'teams', que receberá um array com 5 elementos. Os elementos
    serão nomes de times do campeonato escolhido, e os nomes devem estar na ordem em que
    eles aparecem na tabela no momento da solução desse desafio.
*/
var teams = ['Flamengo', 'Bangu', 'Botafogo', 'Vasco', 'Fluminense'];

/*
   Crie uma função chamada 'showTeamPosition' com as seguintes caracteristicas:
   - A função deve receber um número por parâmetro;
   - A função deve retornar a frase:
     - 'O time está em [posicao] lugar é o [nome do time]
   - A função só deve retornat afrase acima se o time estiver entre os 5 primeiros
   - Se não houver time para a posição passada, deve retornar a mensage,
    - 'Não temos informações do time que esta nessa posição'
*/

function showTeamPosition(index) {

    var msg = 'O time está em ' + (index + 1)+ '° lugar é o ' + teams[index];
    var msg2 = 'Não temos informações do time que esta nessa posição';

    var result = index <= 4 ? msg : msg2;
    return result;

}

showTeamPosition(1); // Bangu
showTeamPosition(12); // Não temos informações do time que esta nessa posição
showTeamPosition(0); // Flamengo

/*
    Mostre no console os numeros de 20 a 30 , usando a estrutura de repetição while
*/
var num = 20;
while(num <= 30){
  console.log(num++);
}

/*
    Crie uma função chamada 'convertToHex', com as seguintes caracteristicas:
    - A função recebe uma cor como parÂmetro, do tipo string
    - Escolha 5 cores que serão convertidas do nome da cor para o seu equivalente
      hexadecimal
    - Usando a estrutura switch, veirfique se a cor passada por parâmetro é algum
      hexa escolhido. se for , retorne a frase:
      'O hexadecimal para a 'cor' é 'hexadecimal'
    - Se a cor passada por parÂmetro não estiver entre as selecionadas, mostre a frase>
      'Não temos o equivalente hexadecimal para a 'cor'
*/

function convertToHex(cor) {

    var hexa;
    switch (cor) {
        case 'red':
            hexa = '#FF0000'
            break;
        case 'blue':
            hexa = '#0000FF'
            break;
        case 'Gray':
            hexa = '#808080';
            break;
        case 'Gold':
            hexa = '#FFD700';
            break;
        case 'Lime':
            hexa = '#00FF00';
            break;
        default:
            return 'Não temos o equivalente hexadecimal para a ' + cor;
    }

    return 'O hexadecimal para a ' + cor + ' é ' + hexa;

}


   