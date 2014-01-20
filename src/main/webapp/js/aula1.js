/**
 * 
 */
window.onload = function() {
	document.getElementById('t').onmousedown = function() {
		var texto = "";
		var numero = 45;
		var booleana = true;
		alert('texto = ' + typeof (texto) + '\nnumero = ' + typeof (numero)
				+ '\nbooleano = ' + typeof (booleana));
	};
};
/*
 * var texto = document.getElementById('t').innerHTML; alert(texto); texto =
 * prompt('Escreva um novo conteudo para t ');
 * document.getElementById('t').innerHTML = texto; alert(texto);
 */