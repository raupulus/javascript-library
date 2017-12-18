/*
    Librería de funciones para realizar operaciones matemáticas
 */

/**
 * Genera un número aleatoriamente
 * @return {Integer} Número generado
 */
function generarAleatorio() {
    return parseInt((Math.random()+0.01)*20);
}

/**
 * Genera números aleatoriamente y los devuelve en un array
 * @param  {Integer}  cantidad  Cantidad de números generados
 * @return {Array}              Array con todos los números generados
 */
function generarAleatorios(cantidad) {
    var aleatorios = [];
    for (let i=1; i<=cantidad; i++) {
        aleatorios.push(parseInt((Math.random()+0.01)*20));
    }
    return aleatorios;
}

/**
 * Recibe un número y la cantidad de decimales a los que redondeará
 * @param  {Float}    numero     Número a redondear
 * @param  {Integer}  decimales  Cantidad de decimales
 * @return {Float}               Número redondeado
 */
function redondearDecimales(numero, decimales) {
    return numero.toFixed(4);
}
