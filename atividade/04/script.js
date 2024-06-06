function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const num3 = parseFloat(document.getElementById('num3').value);

    const mediaAritmetica = (num1 + num2 + num3) / 3;
    const peso1 = 3;
    const peso2 = 2;
    const peso3 = 5;
    const mediaPonderada = (num1 * peso1 + num2 * peso2 + num3 * peso3) / (peso1 + peso2 + peso3);
    const somaDasMedias = mediaAritmetica + mediaPonderada;
    const mediaDasMedias = (mediaAritmetica + mediaPonderada) / 2;

    const result = `A média aritmética dos números é: ${mediaAritmetica.toFixed(2)} <br> 
                    A média ponderada dos números é: ${mediaPonderada.toFixed(2)} <br>
                    A soma das médias é: ${somaDasMedias.toFixed(2)}<br>
                    A média das médias é: ${mediaDasMedias.toFixed(2)}`;
    document.getElementById('result').innerHTML = result;
  }