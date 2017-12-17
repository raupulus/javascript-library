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
