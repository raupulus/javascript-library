/*
    Librería de funciones para limpiar campos de entrada de formularios
 */

/**
 * Comprueba una palabra o cadena sin espacios, admitiendo carácteres en Español
 * @param  {String}  cadena Cadena a comprobar
 * @return {Boolean}        Devuelve booleano según el resultado de validación
 */
function validarCadena(cadena) {
    var patron = new RegExp("^[a-záéíóúñ]+", "i");
    return patron.test(cadena);
}

/**
 * Comprueba una o varias cadenas con espacios, admitiendo carácteres en Español
 * @param  {String}  cadena Cadena a comprobar
 * @return {Boolean}        Devuelve booleano según el resultado de validación
 */
function validarCadenas(cadena) {
    var patron = new RegExp("^[a-záéíóúñ]+(( [a-záéíóúñ]+)+)?$", "i");
    return patron.test(cadena);
}

/**
 * Comprueba un nombre personal
 * @param  {String}  cadena Cadena a comprobar
 * @return {Boolean}        Devuelve booleano según el resultado de validación
 */
function validarNombre(nombre) {
    var patron = new RegExp("^[a-záéíóúñ]+", "i");
    return patron.test(nombre);
}

/**
 * Comprueba un email que deberá tener una @ en el centro y terminar en punto
 * seguido de 2 o 3 carácteres.
 * @param  {String}  cadena Cadena a comprobar
 * @return {Boolean}        Devuelve booleano según el resultado de validación
 */
function validarEmail(email) {
    var patron = new RegExp("^[a-z0-9]+[\@][a-z0-9]+[\.][a-z]{2,3}$");
    return patron.test(email);
}

/**
 * Comprueba una edad en años, pasados como parámetros
 * @param  {String}  cadena Cadena a comprobar
 * @return {Boolean}        Devuelve booleano según el resultado de validación
 */
function validarEdad(edad) {
    var patron = new RegExp("^[0-9]{1,3}$", "i");
    return patron.test(edad);
}

/**
 * Valida un número de teléfono de 9 dígitos 999999999
 * @param  {String}  cadena Cadena a comprobar
 * @return {Boolean}        Devuelve booleano según el resultado de validación
 */
function validarTelefono(telefono) {
    var patron = new RegExp("^[0-9]{9}$");
    return patron.test(telefono);
}

/**
 * Comprueba una dirección web que tiene que comenzar obligatoriamente
 * por "www." una cadena y terminar por punto seguido de dos o tres caracteres.
 * @param  {String}  cadena Cadena a comprobar
 * @return {Boolean}        Devuelve booleano según el resultado de validación
 */
function validarWeb(web) {
    var patron = new RegExp("^(http(s)?:\/\/)+([w]{3}[\.])+[a-z0-9]+[\.][a-z]{2,3}$");
    return patron.test(web);
}

/**
 * Comprueba una cadena con caracteres posibles para una contraseña-
 * @param  {String}  cadena Cadena a comprobar
 * @return {Boolean}        Devuelve booleano según el resultado de validación
 */
function validarPassword(password) {
    var patron = new RegExp("^[0-9a-zA-Z\,\._-]+$");
    return patron.test(password);
}

/**
 * Comprueba un DNI de España con formato XX.XXX.XXX-X
 * @param  {String}  cadena Cadena a comprobar
 * @return {Boolean}        Devuelve booleano según el resultado de validación
 */
function validarDNI(dni) {
    var patron = new RegExp("^[0-9]{2}\.[0-9]{3}\.[0-9]{3}-[a-zA-Z]$");
    return patron.test(dni);
}
