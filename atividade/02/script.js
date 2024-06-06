let Num1 = document.querySelector("#Num1");
let Num2 = document.querySelector("#Num2");
let btcalcular = document.querySelector("#btCalcular");
let pago = document.querySelector("#pago");

btcalcular.onclick = function () {
let Numero1 = 
    parseFloat(Num1.value);
let Numero2 = 
    parseFloat(Num2.value);
let resultado = Numero1 * Numero2;
pago.textContent = resultado
}