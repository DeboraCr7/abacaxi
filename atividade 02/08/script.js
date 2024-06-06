function verificarParOuImpar() {
    // Obtém o número digitado pelo usuário
    var numero = parseInt(document.getElementById("numeroInput").value);

    // Verifica se o número é par ou ímpar
    var mensagem;

    if (numero % 2 === 0) {
        mensagem = "O número é par.";
    } else {
        mensagem = "O número é ímpar.";
    }

    // Exibe a mensagem ao usuário
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "<h2>Verificação de Par ou Ímpar</h2>" +
        "<p>" + mensagem + "</p>";
}