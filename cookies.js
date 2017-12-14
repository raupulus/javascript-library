/**
 * Función para obtener una cookie
 * @param  {string} name Recibe el nombre de la cookie
 * @return {string}      Devuelve el valor de la cookie en un string o null
 */
function getCookie(name){
    var cname = name + "=";
    var dc = document.cookie;
    if (dc.length > 0) {
        begin = dc.indexOf(cname);
        if (begin != -1) {
            begin += cname.length;
            end = dc.indexOf(";", begin);
            if (end == -1) end = dc.length;
            return decodeURIComponent(dc.substring(begin, end));
        }
    }
    return null;
}

/**
 * Establece una cookie mediante los parámetros pasados a la función
 * @param {string} name     Nombre de la cookie.
 * @param {string} value    Valor de las cookies.
 * @param {string} expires  Fecha de caducidad de la cookie (por defecto, el
 *                          final de la sesión).
 * @param {string} path     Camino donde se aplica esta cookie, por defecto
 *                          el dominio del documento que realiza la llamada.
 * @param {string} domain   Dominio para el cual la cookie es válida (por
 *                          defecto, el del documento que hace la llamada).
 * @param {Bool} secure     Indica si la trasnmisión de la cookie requiere una
 *                          transmisión segura (HTTPS).
 */
function setCookie(name, value, expires, path, domain, secure) {
  document.cookie = name + "=" + encodeURIComponent(value) +
  ((expires == null) ? "" : "; expires=" + expires.toGMTString()) +
  ((path == null) ? "" : "; path=" + path) +
  ((domain == null) ? "" : "; domain=" + domain) +
  ((secure == null) ? "" : "; secure");
}


// Esta es una adaptación de la función de Dorcht para borrar una cookie
// name - nombre de la cookie
// [path] - camino de la cookie (debe ser el mismo camino que el especificado al crear la cookie)
// [domain] - dominio de la cookie (debe ser el mismo dominio que el especificado al crear la cookie)
// se considera el camino y dominio por defecto si se especifica null o no se proporcionan argumentos

function delCookie (name,path,domain) {
  if (getCookie(name)) {
    document.cookie = name + "=" +
    ((path == null) ? "" : "; path=" + path) +
    ((domain == null) ? "" : "; domain=" + domain) +
    "; expires=Thu, 01-Jan-70 00:00:01 GMT";
  }
}
