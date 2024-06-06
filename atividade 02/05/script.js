function verificarMaisVelha() {
    // Obtém os dados digitados pelo usuário
    var nome1 = document.getElementById("nome1Input").value;
    var anoNascimento1 = parseInt(document.getElementById("ano1Input").value);

    var nome2 = document.getElementById("nome2Input").value;
    var anoNascimento2 = parseInt(document.getElementById("ano2Input").value);

    var nome3 = document.getElementById("nome3Input").value;
    var anoNascimento3 = parseInt(document.getElementById("ano3Input").value);

    // Calcula as idades das pessoas
    var dataAtual = new Date();
    var anoAtual = dataAtual.getFullYear();

    var idade1 = anoAtual - anoNascimento1;
    var idade2 = anoAtual - anoNascimento2;
    var idade3 = anoAtual - anoNascimento3;

    // Determina a pessoa mais velha
    var pessoaMaisVelha = "";
    var pessoaSegundaMaisVelha = "";
    var pessoaTerceiraMaisVelha = "";

    if (idade1 > idade2 && idade1 > idade3) {
        pessoaMaisVelha = nome1 + " - " + idade1 + " anos";
        if (idade2 > idade3) {
            pessoaSegundaMaisVelha = nome2 + " - " + idade2 + " anos";
            pessoaTerceiraMaisVelha = nome3 + " - " + idade3 + " anos";
        } else {
            pessoaSegundaMaisVelha = nome3 + " - " + idade3 + " anos";
            pessoaTerceiraMaisVelha = nome2 + " - " + idade2 + " anos";
        }
    } else if (idade2 > idade1 && idade2 > idade3) {
        pessoaMaisVelha = nome2 + " - " + idade2 + " anos";
        if (idade1 > idade3) {
            pessoaSegundaMaisVelha = nome1 + " - " + idade1 + " anos";
            pessoaTerceiraMaisVelha = nome3 + " - " + idade3 + " anos";
        } else {
            pessoaSegundaMaisVelha = nome3 + " - " + idade3 + " anos";
            pessoaTerceiraMaisVelha = nome1 + " - " + idade1 + " anos";
        }
    } else {
        pessoaMaisVelha = nome3 + " - " + idade3 + " anos";
        if (idade1 > idade2) {
            pessoaSegundaMaisVelha = nome1 + " - " + idade1 + " anos";
            pessoaTerceiraMaisVelha = nome2 + " - " + idade2 + " anos";
        } else {
            pessoaSegundaMaisVelha = nome2 + " - " + idade2 + " anos";
            pessoaTerceiraMaisVelha = nome1 + " - " + idade1 + " anos";
        }
    }

    // Exibe os resultados ao usuário
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "<h2>Pessoas Mais Velhas</h2>" +
        "<p>Pessoa mais velha: " + pessoaMaisVelha + "</p>" +
        "<p>Segunda pessoa mais velha: " + pessoaSegundaMaisVelha + "</p>" +
        "<p>Terceira pessoa mais velha: " + pessoaTerceiraMaisVelha + "</p>";
}