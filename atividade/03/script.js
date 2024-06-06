let num1 = document.querySelector("#num1");
let btCalcular = document.querySelector("#btCalcular");
let pago = document.querySelector("#pago");

btCalcular.onclick = function () {
    let valorOriginal = parseFloat(num1.value);
    let reajuste = valorOriginal * 0.01;
    pago.textContent = valorOriginal + reajuste;
}