/*
    Librería de funciones para realizar operaciones matemáticas
 */

/**
 * Genera un número aleatoriamente desde el 0 al 20
 * @return {Integer} Número generado
 */
function generarAleatorio20() {
    return parseInt((Math.random()+0.01)*20);
}

/**
 * Genera un número aleatoriamente entre los valores de mínimo y máximo.
 * @param  {Integer} [minimo=0]  Valor mínimo.
 * @param  {Integer} [maximo=10] Valor máximo.
 * @return {Integer}             Devuelve un entero entre el mínimo y máximo.
 */
function generarAleatorio(minimo = 0, maximo = 10) {
    var x = 0;

    while (true) {
        x = parseInt((Math.random()+0.01) * maximo);

        if ((x >= minimo) && (x <= maximo)) {
            return x;
        }
    }
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
