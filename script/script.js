// Obtém a tabela e o formulário
const tabela = document.querySelector("table");
const form = document.querySelector("form");

// Adiciona um evento de submit ao formulário
form.addEventListener("submit", function (event) {
	// Previne o envio do formulário
	event.preventDefault();

	// Obtém os valores dos campos de entrada
	const usuario = document.querySelector("#usuario").value;
	const data = document.querySelector("#data").value;
	const motivo = document.querySelector("#motivo").value;
	const quilometragem_saida = document.querySelector("#quilometragem_saida")
		.value;
	const quilometragem_chegada = document.querySelector("#quilometragem_chegada")
		.value;

	// Cria uma nova linha da tabela com os valores
	const novaLinha = document.createElement("tr");
	novaLinha.innerHTML = `
    <td>${usuario}</td>
    <td>${data}</td>
    <td>${motivo}</td>
    <td>${quilometragem_saida}</td>
    <td>${quilometragem_chegada}</td>
  `;

	// Adiciona a nova linha à tabela
	tabela.appendChild(novaLinha);

	// Reseta o formulário 
	form.reset();
});
