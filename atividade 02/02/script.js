function calcular() {
    // Obtém o número de pessoas digitado pelo usuário
    var numPessoas = parseInt(document.getElementById("numPessoasInput").value);

    // Calcula a quantidade de ovos e queijo necessários
    var ovos = numPessoas * 2; // 2 ovos por pessoa
    var queijo = numPessoas * 50; // 50 gramas de queijo por pessoa

    // Exibe os resultados ao usuário
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "<h2>Ingredientes Necessários</h2>" +
        "<p>Para " + numPessoas + " pessoa(s), você precisará de:</p>" +
        "<p>" + ovos + " ovos</p>" +
        "<p>" + queijo + " gramas de queijo</p>";
}