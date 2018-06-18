/**
 * @author Raúl Caro Pastorino
 * @copyright Copyright © 2018 Raúl Caro Pastorino
 * @license https://www.gnu.org/licenses/gpl-3.0-standalone.html
 */

/**
 * Genera una fecha aleatoria entre los parámetros pasados.
 * @param inicio por omisión será la fecha de inicio 70.
 * @param fin por omisión será la fecha de fin 2050.
 * @returns {Date} Devuelve un objeto Date().
 */
function generarFechaAleatoria(inicio = 70, fin = 2050) {
    var year = generarAleatorio(inicio, fin);
    if (year === 100) {
        year = 2000;
    } else if (year > 100) {
        year = 1900 + year;
    } else {
        year = Number("19" + String(year));
    }

    var dia = generarAleatorio(0, 30);
    var mes = generarAleatorio(0, 11);

    return new Date(year, mes, dia);
}

/**
 * Resta las dos fechas recibidas y devuelve la diferencia en milisegundos.
 * @param inicio
 * @param fin
 * @returns {number}
 */
function restarFechas(inicio, fin) {
    return fin.getTime() - inicio.getTime();
}

/**
 * Recibe milisegundos y devuelve los días que representa.
 * @param milis
 * @returns {number}
 */
function milisegundosDias(milis) {
    return Math.floor(milis/(24*60*60*1000));
}

/**
 * Recibe milisegundos y devuelve la cantidad de horas que representa
 * @param milis
 * @returns {number}
 */
function milisegundosHoras(milis) {
    return Math.floor(milis/(60*60*1000));
}

/**
 * Recibe milisegundos y devuelve los minutos que representa.
 * @param milis
 * @returns {number}
 */
function milisegundosMinutos(milis) {
    return Math.floor(milis/(60*1000));
}

/**
 * Recibe milisegundos y devuelve los segundos que representa.
 * @param milis
 * @returns {number}
 */
function milisegundosSegundos(milis) {
    return Math.floor(milis/(1000));
}
