function makeRequest(url, callback) {
    var httpRequest;
    console.log(url);
    if (window.XMLHttpRequest) { // Mozilla, Safari, ...
      httpRequest = new XMLHttpRequest();
    } else if (window.ActiveXObject) { // IE
      try {
        httpRequest = new ActiveXObject("Msxml2.XMLHTTP");
      } 
      catch (e) {
        try {
          httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
        } 
        catch (e) {}
      }
    }

    if (!httpRequest) {
      console.log('Giving up :( Cannot create an XMLHTTP instance');
      return false;
    }
    httpRequest.open('GET', url);
    // http://www.quirksmode.org/js/xmlhttp.html
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState == 4) {
            if (httpRequest.status == 200 || httpRequest.status == 304) {
                callback(httpRequest);
            }
        }
    }
    if (httpRequest.readyState == 4) return;
    httpRequest.send();
}
