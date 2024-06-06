function calcular() {
    // Obtém os sabores de pizza digitados pelo usuário
    var sabor1 = document.getElementById("sabor1Input").value;
    var sabor2 = document.getElementById("sabor2Input").value;
    var sabor3 = document.getElementById("sabor3Input").value;
    var sabor4 = document.getElementById("sabor4Input").value;

    // Obtém a quantidade de refrigerantes digitada pelo usuário
    var quantidadeRefri = parseInt(document.getElementById("refrigeranteInput").value);

    // Calcula o valor total a pagar
    var valorPizza = 12.00 * 4; // Cada sabor de pizza custa R$ 12,00
    var valorRefri = 7.00 * quantidadeRefri; // Cada refrigerante custa R$ 7,00
    var valorTotal = valorPizza + valorRefri;

    // Exibe os resultados ao usuário
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "<h2>Pedido</h2>" +
        "<p>Sabores de Pizza:</p>" +
        "<ul>" +
        "<li>" + sabor1 + "</li>" +
        "<li>" + sabor2 + "</li>" +
        "<li>" + sabor3 + "</li>" +
        "<li>" + sabor4 + "</li>" +
        "</ul>" +
        "<p>Quantidade de Refrigerantes: " + quantidadeRefri + "</p>" +
        "<p>Valor Total a Pagar: R$ " + valorTotal.toFixed(2) + "</p>";
}