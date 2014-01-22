function myFunc() {
     console.log('myFunc() ' + this.length);   
}
myFunc();

var myFunc2 = function () {
     console.log('myFunc2() ' + this.length);   
}
myFunc2();

var myObj = {
    init: function () {
        console.log('myObj ' + this);   
    }
};
myObj.init();

function MyObj() {
    console.log('function myObj() ' + this);   
}
var obj = new MyObj();

function Ventilador(velMax) {
    var maximaPermitida = 5; // Uso de encapsulamento
    var velocidadePadrao = 3; // Vari�veis privadas
    // Avalia se a velocidade m�xima fornecida � maior que zero e menor que 5, o limite atual.
    if (velMax > 0 && velMax <= maximaPermitida) {
        // Caso seja, atribui o valor fornecido � propriedade velocidadeMaxima
        this.velocidadeMaxima = velMax;
    } else {
        // Caso contr�rio, atribui o valor da vari�vel velocidadePadrao � propriedade velocidadeMaxima
        this.velocidadeMaxima = velocidadePadrao;
    }
    this.ligado = false;
    this.ligar = function() { // O m�todo ligar agora � definido
        this.ligado = true; // por um literal de fun��o, o que
    } // melhora a legibilidade do c�digo.
}
ventilador = new Ventilador(0); // Cria a inst�ncia fornecendo o valor 0 para o argumento velMax;
console.log('ventilador.velocidadeMaxima ' + ventilador.velocidadeMaxima); // Retorna 3 � o padr�o
console.log('ventilador.maximaPermitida ' + ventilador.maximaPermitida); // Retorna undefined