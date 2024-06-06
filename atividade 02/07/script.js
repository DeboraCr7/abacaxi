function compararNumeros() {
    // Obtém os números digitados pelo usuário
    var num1 = parseInt(document.getElementById("num1Input").value);
    var num2 = parseInt(document.getElementById("num2Input").value);

    // Compara os números e gera a mensagem correspondente
    var mensagem;

    if (num1 > num2) {
        mensagem = "O primeiro número é maior que o segundo.";
    } else if (num1 < num2) {
        mensagem = "O primeiro número é menor que o segundo.";
    } else {
        mensagem = "Os dois números são iguais.";
    }

    // Exibe a mensagem ao usuário
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "<h2>Resultado da Comparação</h2>" +
        "<p>" + mensagem + "</p>";
}