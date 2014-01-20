/**
 * 
 */
window.onload = function() {
	var id = "t";
	var elemento = getElementoById(id);
	elemento.onmousedown = function() {
		escrever(elemento);
	};
};
function getElementoById(id) {
	return document.getElementById(id);
}
function escrever(elemento) {
	var texto = "<ul> \n";
	for (var ix = 1; ix < 5; ix++) {
		texto += "\n<li>executou for ix = " + ix + "</li>";
	}
	if (elemento.style.color == "Green") {
		elemento.style.backgroundColor = "Black";
		elemento.style.color = "White";
	} else {
		elemento.style.backgroundColor = "Yellow";
		elemento.style.color = "Green";
	}
	texto += "\n</ul>";
	elemento.innerHTML += texto;
	elemento.innerHTML = elemento.innerHTML.substr(0, 200);
}