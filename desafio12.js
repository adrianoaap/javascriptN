/**
 *  Crie uma função construtora chamada 'Person'. esse construtor deve ter as
 *  seguintes caracteristicas:
 *  - Deve receber 3 parâmetros: 'name', 'lastName' e 'age'
 *  - Deve ter 3 propriedades:
 *  - deve ter 3 métodos:
 *   - getFullName - deve receber o nome completo
 *   - getIdade - que deve retornar a idade
 *   - addAge - esse deve ter um parâmetro , mas ao invocâlo iremos passar um único argumento
 *   , que e a qtde de anos que devem ser adcionados a idade original.Esse método deverá retornar
 *     objeto que será isntanciado retorna o this
 */

function Person(name, lastName, age) {

    this.name = name;
    this.lastName = lastName;
    this.age = age;

    this.getFullName = function getFullName() {
        return this.name + ' ' + this.lastName
    }

    this.getIdade = function getIdade() {
        return ' Sua idade eh ' + this.age
    }

     this.addAge = function addAge() {
        this.age += arguments[0];
        return this;
    }

}

// Crie 3 novos objetos
var miguel = new Person('Miguel', 'Ayres', 5);
var sara = new Person('sara', 'Ayres', 5);
var irene = new Person('irene', 'Ayres', 55);


// Mostre o nome completo de cada pessoa  e a idade
miguel.getFullName() + ' tem ' + miguel.addAge(4).getIdade()+ ' anos';
sara.getFullName() + ' tem ' + miguel.getIdade()+ ' anos';
irene.getFullName() + ' tem ' + miguel.getIdade()+ ' anos';



