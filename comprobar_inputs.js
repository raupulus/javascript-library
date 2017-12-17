/*
    Librería de funciones para limpiar campos de entrada de formularios
 */

function comprobarNombre(nombre) {
    var patron = new RegExp("^[a-záéíóúñ]+", "i");
    return patron.test(nombre);
}

function comprobarMail(mail) {
    var patron = new RegExp("^(http(s)?:\/\/)?([w]{3}[\.])?[a-z0-9]+[\.][a-z]{2,3}$");
    return patron.test(mail);
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
