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
 * Devuelve  el tamaño de la ventana en un array, la posición 0 el ancho y
 * en la posición 1 el alto.
 * @param  {window}  ventana  Recibe la ventana como parámetro
 * @return {Array}            Devuelve un array con ancho y alto
 */
function sizeVentana(ventana) {
    return [ventana.innerWidth, ventana.innerHeight];
}

/**
 * Devuelve la posición de la ventana en una array, la posición 0 es la
 * separación desde el borde izquierdo y la posición 1 sobre la parte superior
 * @param  {window}  ventana  [description]
 * @return {Array}            Array que contiene la posición de la ventana
 */
function posicionVentana(ventana) {
    return [ventana.screenX, ventana.screenY];
}

/**
 * Mueve una ventana pasada como parámetro los píxeles pasados como segundo
 * parámetro, desde arriba y desde la izquierda.
 * @param  {window}   ventana    Ventana a la que se aplicará
 * @param  {Integer}  arriba     Número de píxeles desde la parte superior
 * @param  {Integer}  izquierda  Número de píxeles desde la parte izquierda
 */
function moverVentana(ventana, arriba, izquierda) {
    ventana.moveBy(arriba, izquierda);
}

/**
 * Mueve una ventana a un lugar concreto de la pantalla
 * @param  {window}   ventana    Ventana a la que se aplicará
 * @param  {Integer}  arriba     Distancia desde la parte superior
 * @param  {Integer}  izquierda  Distancia desde la parte izquierda
 */
function moverVentanaTo(ventana, arriba, izquierda) {
    ventana.moveTo(arriba, izquierda);
}

function redimensionarVentana(ventana) {

}

function redimensionarVentanaTo() {

}

/**
 * Cierra todas las ventanas pasadas en la llamada
 * @param  {array}  ventanas  Todos los parámetros que recibe los convierte en
 *                            una lista iterable
 */
function cerrarVentana(...ventanas) {
    for (ventana of ventanas) {
        ventana.close();
    }
}
