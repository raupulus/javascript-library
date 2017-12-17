/*
    Librería de funciones para limpiar campos de entrada de formularios
 */

function comprobarCadena(cadena) {
    var patron = new RegExp("^[a-záéíóúñ]+", "i");
    return patron.test(cadena);
}

function comprobarCadenas(cadena) {
    var patron = new RegExp("^[a-záéíóúñ]+(( [a-záéíóúñ]+)+)?$", "i");
    return patron.test(cadena);
}

function comprobarNombre(nombre) {
    var patron = new RegExp("^[a-záéíóúñ]+", "i");
    return patron.test(nombre);
}

function comprobarEmail(email) {
    var patron = new RegExp("^(http(s)?:\/\/)?([w]{3}[\.])?[a-z0-9]+[\.][a-z]{2,3}$");
    return patron.test(email);
}

function comprobarEdad(edad) {
    var patron = new RegExp("^[0-9]{1,3}$", "i");
    return patron.test(edad);
}

function comprobarTelefono(telefono) {
    var patron = new RegExp("^[0-9]{9}$");
    return patron.test(telefono);
}

function comprobarWeb(web) {
    var patron = new RegExp("^(http(s)?:\/\/)?([w]{3}[\.])?[a-z0-9]+[\.][a-z]{2,3}$");
    return patron.test(web);
}

function comprobarPassword(password) {
    var patron = new RegExp("^[0-9a-zA-Z\,\._-]+$");
    return patron.test(password);
}

function comprobarDNI(dni) {
    var patron = new RegExp("^[0-9]{2}\.[0-9]{3}\.[0-9]{3}-[a-zA-Z]$");
    return patron.test(dni);
}
