function encontrarMenor() {
    const valor1 = parseFloat(document.getElementById('valor1').value);
    const valor2 = parseFloat(document.getElementById('valor2').value);
    const valor3 = parseFloat(document.getElementById('valor3').value);
    const valor4 = parseFloat(document.getElementById('valor4').value);

    const menor = Math.min(valor1, valor2, valor3, valor4);

    document.getElementById('resultado').textContent = `O menor valor é: ${menor}`;
}