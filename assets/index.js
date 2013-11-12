function getSelectedText() {
    var text = "";
    if (typeof window.getSelection != "undefined") {
        text = window.getSelection().toString();
    } else if (typeof document.selection != "undefined" && document.selection.type == "Text") {
        text = document.selection.createRange().text;
    }
    return text;
}

function doSomethingWithSelectedText() {
    var selectedText = getSelectedText();
    if (selectedText) {
        document.getElementById('text').innerHTML = 'Search <b>' + selectedText + '</b> in FlickrCentral (34427469792@N01)';
        getPhotosFromFlickr(selectedText, '34427469792@N01');
    }
}

function getPhotosFromFlickr(text, group_id) {
    var url = 'http://nameless-fjord-2265.herokuapp.com/photo',
        args = 'text=' + encodeURIComponent(text) + '&group_id=' + encodeURIComponent(group_id) + '&sort=interestingness-desc';
    makeRequest(url + '?' + args, parseResp);
}

function parseResp(req) {
    console.log(req.responseText.substring(0, 10));
}

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


var q = document.getElementById("quote");
q.onmouseup = doSomethingWithSelectedText;

