
/**
 * Limpia todos los nodos texto hijos vacíos y con saltos de línea
 * que son creados automáticamente por el navegador y pueden causar errores
 * Es útil usarlo antes de comenzar, justo en "window.onload = limpiar_nodos"
 */
function limpiar_nodos() {
    var nodos_a_eliminar = [];

    // Busca los nodos y los añade al array
    function buscar(){
        var elementos = document.getElementsByTagName('*');

        for (var k=0;k<elementos.length;k++) {
            for (var i=0;i<elementos[k].childNodes.length;i++) {
                var hijo = elementos[k].childNodes[i];
                if ((hijo.nodeType == 3 && !/\S/.test(hijo.nodeValue))||(hijo.nodeType==8)) {
                    nodos_a_eliminar[nodos_a_eliminar.length] = hijo;
                }
            }
        }
    }

    // Destruye los nodos del array
    function destruir(){
        for (var d=0;d<nodos_a_eliminar.length;d++) {
            nodos_a_eliminar[d].parentNode.removeChild(nodos_a_eliminar[d]);
        }
    }

    buscar();
    destruir();
}

/**
 * Crea un nuevo nodo y le asigna una clase.
 * @param  {String} elemento Etiqueta HTML para crear el nodo.
 * @param  {String} clase    Clase para asignar a la etiqueta creada
 * @param  {String} texto    Texto para incluir en el nodo texto.
 * @return {Node}            Devuelve el nodo creado.
 */
function crearNodo(elemento, clase, texto = '') {
    var nuevoNodo = document.createElement(elemento);
    nuevoNodo.setAttribute('class', clase);

    var nodoTexto = document.createTextNode(texto);
    nuevoNodo.appendChild(nodoTexto);
    return nuevoNodo;
}

/**
 * Crea un nuevo nodo y le asigna un id.
 * @param  {String} elemento Etiqueta HTML para crear el nodo.
 * @param  {String} id       Id para asignar a la etiqueta creada
 * @param  {String} texto    Texto para incluir en el nodo texto.
 * @return {Node}            Devuelve el nodo creado.
 */
function crearNodoId(elemento, id, texto) {
    var nuevoNodo = document.createElement(elemento);
    nuevoNodo.setAttribute('id', id);

    var nodoTexto = document.createTextNode(texto);
    nuevoNodo.appendChild(nodoTexto);
    return nuevoNodo;
}

/**
 * Elimina todos los nodos de la clase pasada.
 * @param  {String} clase Clase por la que filtrar para eliminar nodo.
 */
function eliminarNodosClase(clase) {
    var nodosBorrar = document.getElementsByClassName(clase);
    for (nodo of nodosBorrar) {
        document.removeChild(nodosBorrar);
    }
}
