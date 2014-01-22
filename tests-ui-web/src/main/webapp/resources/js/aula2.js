/*
 * 	
 * 
 * 
 */

window.onload = function() {
	document.getElementById('t').onmousedown = function() {
		escrever();
	};
};
function escrever() {
	var texto = "<ul> \n";
	for (var ix = 1; ix < 5; ix++) {
		texto += "\n<li>executou for ix = " + ix + "</li>";
	}
	if (document.getElementById('t').style.color == "Green") {
		document.getElementById('t').style.backgroundColor = "Black";
		document.getElementById('t').style.color = "White";
	} else {
		document.getElementById('t').style.backgroundColor = "Yellow";
		document.getElementById('t').style.color = "Green";
	}
	texto += "\n</ul>";
	document.getElementById('t').innerHTML = texto;
}