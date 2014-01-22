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
    var velocidadePadrao = 3; // Variáveis privadas
    // Avalia se a velocidade máxima fornecida é maior que zero e menor que 5, o limite atual.
    if (velMax > 0 && velMax <= maximaPermitida) {
        // Caso seja, atribui o valor fornecido à propriedade velocidadeMaxima
        this.velocidadeMaxima = velMax;
    } else {
        // Caso contrário, atribui o valor da variável velocidadePadrao à propriedade velocidadeMaxima
        this.velocidadeMaxima = velocidadePadrao;
    }
    this.ligado = false;
    this.ligar = function() { // O método ligar agora é definido
        this.ligado = true; // por um literal de função, o que
    } // melhora a legibilidade do código.
}

Ventilador.prototype = new Eletrodomestico(); // Cria a instância fornecendo o valor 0 para o argumento velMax;
var ventilador = new Ventilador(4);
console.log('ventilador.velocidadeMaxima ' + ventilador.velocidadeMaxima); // Retorna 3 – o padrão
console.log('ventilador.maximaPermitida ' + ventilador.maximaPermitida); // Retorna undefined
console.log('ventilador.ligado ' + ventilador.ligado); // Retorna undefined