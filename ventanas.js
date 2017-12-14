/*
    Librería de funciones para trabajar sobre ventanas, objeto window
 */

/**
 * [abrirVentana description]
 * @param  {String}   origen  Ruta al documento HTML para abrir
 * @param  {String}   titulo  Nombre de la ventana
 * @param  {Integer}  ancho   Ancho de la ventana
 * @param  {Integer}  alto    Altura de la ventana
 * @param  {Integer}  top     Separación respecto la parte superior
 * @param  {Integer}  left    Separación respecto la parte izquierda
 * @return {window}           Devuelve la nueva ventana
 */
function abrirVentana(origen, titulo, ancho, alto, top, left) {
    ventana = window.open(
        origen,
        titulo,
        'width='+ancho+
        ',height='+alto+
        ',top='+top+
        ',left='+left+
        ',menubar=yes,resizable=yes,location=yes,scrollbars=yes,status=yes,toolbar=yes');

    return ventana;
}

/**
 * Tamaño de la ventana
 * @param  {[type]} ventana [description]
 * @return {[type]}         [description]
 */
function sizeVentana(ventana) {

}

/**
 * Devuelve la posición de la ventana
 * @param  {[type]} ventana [description]
 * @return {[type]}         [description]
 */
function posicionVentana(ventana) {

}

/**
 * Cierra las ventanas pasadas
 * @param  {array} ventanas [description]
 */
function cerrarVentana(...ventanas) {

}
