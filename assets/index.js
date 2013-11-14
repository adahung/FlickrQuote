function updateQuote() {
    console.log('change');
    document.getElementById("quote").innerHTML = qInput.value;
}

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
    makeRequest(url + '?' + args, parsePhotoResp);
}

function parsePhotoResp(req) {
    var rslt = JSON.parse(req.responseText);
    renderPhotoList(rslt.photos);
}

function renderPhotoList(photos) {
    // create ul to display photos
    var template;

    template = '<ul>';

    for (var index in photos) {
        var photoObj = photos[index],
            photoTemplate;
        
        photoTemplate = '<li class="photo"><img src="' + photoObj.url + '" width="250" height="250"></li>';
        template += photoTemplate;
    }

    template += '</ul>';

    document.getElementById('photos').innerHTML = template;
}

var quoteCollection = new Quotes();

document.getElementById('qInput').oninput = updateQuote;
document.getElementById('quote').onmouseup = doSomethingWithSelectedText;

document.getElementById('qInput').value = quoteCollection.getOne();
updateQuote();
