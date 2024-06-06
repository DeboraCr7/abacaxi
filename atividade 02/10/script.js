function calcular() {
    // Obtém os valores digitados pelo usuário
    var valorVendido = parseFloat(document.getElementById("valorVendidoInput").value);
    var meta = parseFloat(document.getElementById("metaInput").value);
    var metaMinima = parseFloat(document.getElementById("metaMinimaInput").value);

    // Calcula os percentuais de atingimento da meta e da meta mínima
    var percentualMeta = (valorVendido / meta) * 100;
    var percentualMetaMinima = (valorVendido / metaMinima) * 100;

    // Verifica se a meta foi atingida, a meta mínima foi atingida ou nenhuma delas
    var mensagem;
    if (valorVendido >= meta) {
        mensagem = "Parabéns! A meta foi atingida.";
    } else if (valorVendido >= metaMinima) {
        mensagem = "A meta mínima foi atingida.";
    } else {
        mensagem = "Nenhuma das metas foi atingida.";
    }

    // Exibe os resultados ao usuário
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "<h2>Resultados</h2>" +
        "<p>" + mensagem + "</p>" +
        "<p>Percentual de atingimento da meta: " + percentualMeta.toFixed(2) + "%</p>" +
        "<p>Percentual de atingimento da meta mínima: " + percentualMetaMinima.toFixed(2) + "%</p>";
}