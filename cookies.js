// Esta es la función que usa Heinle para recuperar una cookie
// name - nombre de la cookie deseada
// devuelve un string conteniendo el valor de la cookie especificada o null si la cookie no existe

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


// Esta es una adaptación de la función de Dorcht para establecer una cookie
// name - nombre de la cookie
// value - valor de la cookie
// [expires] - fecha de caducidad de la cookie (por defecto, el final de la sesi?n)
// [path] - camino para el cual la cookie es válida (por defecto, el camino del documento que hace la llamada)
// [domain] - dominio para el cual la cookie es válida (por defecto, el dominio del documento que hace la llamada)
// [secure] - valor booleano que indica si la trasnmisión de la cookie requiere una transmisión segura
// al especificar el valor null, el argumento tomará su valor por defecto

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
