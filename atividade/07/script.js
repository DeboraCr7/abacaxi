function verificarImpar() {
    const numero = parseInt(document.getElementById('numero').value);

    if (isNaN(numero)) {
        document.getElementById('resultado').textContent = 'Por favor, insira um número válido.';
        return;
    }

    const resultado = (numero % 2 !== 0) ? 'O número é ímpar.' : 'O número não é ímpar.';


    document.getElementById('resultado').textContent = resultado;
}