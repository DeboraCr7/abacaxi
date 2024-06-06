function calcular() {
    // Obtém o número de alunos e o número de turmas digitados pelo usuário
    var numAlunos = parseInt(document.getElementById("numAlunosInput").value);
    var numTurmas = parseInt(document.getElementById("numTurmasInput").value);

    // Calcula a quantidade de pessoas por turma e quantas pessoas ficarão "sem turma"
    var pessoasPorTurma = Math.floor(numAlunos / numTurmas);
    var pessoasSemTurma = numAlunos % numTurmas;

    // Exibe os resultados ao usuário
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "<h2>Resultados</h2>" +
        "<p>Quantidade de pessoas por turma: " + pessoasPorTurma + "</p>" +
        "<p>Quantidade de pessoas sem turma: " + pessoasSemTurma + "</p>";
}