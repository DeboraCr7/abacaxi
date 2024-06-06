function verificarNota() {
    // Obtém a nota digitada pelo usuário
    var nota = parseFloat(document.getElementById("notaInput").value);

    // Verifica a nota e exibe a mensagem apropriada
    var mensagem;

    if (nota > 6) {
        mensagem = "Aprovado";
    } else if (nota >= 4 && nota <= 6) {
        mensagem = "Precisa fazer prova substitutiva";
    } else {
        mensagem = "Reprovado";
    }

    // Exibe a mensagem ao usuário
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "<h2>Resultado</h2>" +
        "<p>" + mensagem + "</p>";
}
