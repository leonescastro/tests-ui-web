function Eletrodomestico(){
	this.ligado = false;
	ligar = function(){
		this.ligado = true;
		console.log('ventilador.ligado ' + this.ligado); 
	}
	desligar = function(){
		this.ligado = false;
		console.log('ventilador.ligado ' + this.ligado); 
	}
}
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

Ventilador.prototype = new Eletrodomestico(); // Cria a inst�ncia fornecendo o valor 0 para o argumento velMax;
var ventilador = new Ventilador(4);
console.log('ventilador.velocidadeMaxima ' + ventilador.velocidadeMaxima); // Retorna 3 � o padr�o
console.log('ventilador.maximaPermitida ' + ventilador.maximaPermitida); // Retorna undefined
console.log('ventilador.ligado ' + ventilador.ligado); // Retorna undefined