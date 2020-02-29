function convertir() {
    var montoUSDElem = document.getElementById('montoUSD');

    var valorUSD = montoUSDElem.value;

    var montoBOB = valorUSD * 6.96;

    console.log(valorUSD);
    console.log(montoBOB);

    var resultadoElem = document.getElementById('resultadoId');

    resultadoElem.innerHTML = montoBOB + ' BOB';
    resultadoElem.style = 'visibility: visible;';

}

function limpiar() {
    // ....
}