function calcular() {
    // Obtém o valor digitado pelo usuário
    var dolarAtual = parseFloat(document.getElementById("dolarInput").value);

    // Calcula os valores com aumento de 1%, 2%, 5% e 10%
    var aumento1 = dolarAtual * 1.01;
    var aumento2 = dolarAtual * 1.02;
    var aumento5 = dolarAtual * 1.05;
    var aumento10 = dolarAtual * 1.10;

    // Exibe os resultados ao usuário
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "<h2>Resultados</h2>" +
        "<p>Se o dólar subir 1%, ficará em: " + aumento1.toFixed(2) + "</p>" +
        "<p>Se o dólar subir 2%, ficará em: " + aumento2.toFixed(2) + "</p>" +
        "<p>Se o dólar subir 5%, ficará em: " + aumento5.toFixed(2) + "</p>" +
        "<p>Se o dólar subir 10%, ficará em: " + aumento10.toFixed(2) + "</p>";
}