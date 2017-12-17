/*
    Librería de funciones para realizar operaciones matemáticas
 */

function generarAleatorio() {
    return parseInt((Math.random()+0.01)*20);
}

function generarAleatorios(cantidad) {
    var aleatorios = [];

    for (let i=1; i<=cantidad; i++) {
        aleatorios.push(parseInt((Math.random()+0.01)*20));
    }
    return aleatorios;
}

function redondearDecimales(numero, decimales) {
    return numero.toFixed(4);
}
