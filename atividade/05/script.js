function retornaMaior() {

    var valor1 = parseFloat(document.getElementById("valor1").value);
    var valor2 = parseFloat(document.getElementById("valor2").value);
    var maiorValor;

    if (isNaN(valor1) || isNaN(valor2)) {
        document.getElementById("resultado").innerText = "Por favor, insira números válidos.";
        return;
    }

    
    if (valor1 > valor2) {
        maiorValor = valor1;
    } else {
        maiorValor = valor2;
    }


    document.getElementById("resultado").innerText = "O maior valor é: " + maiorValor;
}