function calcular() {
    // Obtém os números digitados pelo usuário
    var num1 = parseInt(document.getElementById("num1Input").value);
    var num2 = parseInt(document.getElementById("num2Input").value);

    // Calcula as operações matemáticas
    var soma = num1 + num2;
    var subtracao = num1 - num2;
    var multiplicacao = num1 * num2;
    var divisao = num1 / num2;

    // Exibe os resultados ao usuário
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "<h2>Resultados das Operações Matemáticas</h2>" +
        "<p>Soma: " + soma + "</p>" +
        "<p>Subtração: " + subtracao + "</p>" +
        "<p>Multiplicação: " + multiplicacao + "</p>" +
        "<p>Divisão: " + divisao + "</p>";
}