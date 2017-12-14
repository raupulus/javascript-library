/*
    Librería de funciones para trabajar sobre ventanas, objeto window
 */

/**
 * [abrirVentana description]
 * @param  {[type]} origen [description]
 * @param  {[type]} titulo [description]
 * @param  {[type]} ancho  [description]
 * @param  {[type]} alto   [description]
 * @param  {[type]} top    [description]
 * @param  {[type]} left   [description]
 * @return {[type]}        [description]
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
