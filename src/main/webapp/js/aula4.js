/**
 * 
 */
window.onload = function() {
	var elementoLimitar = getElementoById("justificativa");
	var elementoMsg = getElementoById("msg");
	if (!elementoLimitar  && !elementoMsg) {
		elementoLimitar.onkeyup = elementoLimitar.onkeydown = function() {
			limitarCaracteres(elementoLimitar, 50, elementoMsg);
		};
	};
};
function getElementoById(id) {
	return document.getElementById(id);
}

function limitarCaracteres(elementoLimitado, tamanhoLimite, elementoMsg) {
	var tamanhoElemento = elementoLimitado.value.length;
	// alert("limite: " + tamanhoLimite + "tamanho: " + tamanhoElemento);
	if (tamanhoElemento <= tamanhoLimite) {
		elementoMsg.innerHTML = "Caracteres Restantes: "
				+ (tamanhoLimite - tamanhoElemento);
	} else {
		elementoLimitado.value = elementoLimitado.value
				.substr(0, tamanhoLimite);
	}
}