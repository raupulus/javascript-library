/*
    Librería de funciones para limpiar campos de entrada de formularios
 */

function comprobarNombre(nombre) {
    var patron = RegExp("^[a-záéíóúñ]+", "i");
    return patron.test(input);
}
