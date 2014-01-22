/**
 * 
 */
var Linguagem = function(nome, versao) {
	this.nome = nome;
	this.versao = versao;
};
Linguagem.prototype.descricaoCompleta = function() {
	return this.nome + " vr. " + this.versao;
};
var python = new Linguagem("Python", "2.7");
console.log(python); // Linguagem
console.log(python.descricaoCompleta()); // Python vr.2.7
