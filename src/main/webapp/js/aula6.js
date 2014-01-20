/**
 * 
 */
function divEdit() {
	/* busca na árvore DOM o elemento com ID "header" */
	var header = document.getElementById("header");
	/* guarda o código HTML de dentro do elemento */
	var conteudo = header.innerHTML;
	/* reescreve o conteúdo adicionando outras tags */
	header.innerHTML = "<strong>" + conteudo + "</strong>";
	/* cria um novo elemento DOM */
	var paragrafo = document.createElement("p");
	/* configura a propriedade title do elemento */
	paragrafo.setAttribute("title", "Novo parágrafo");
	/* cria um nó de texto */
	var txt = document.createTextNode("Parágrafo adicionado a árvore DOM");
	/* insere o texto ao paragráfo */
	paragrafo.appendChild(txt);
	/* insere o paragráfo na página */
	header.appendChild(paragrafo);
	setTimeout("divEdit()", 5000);
}