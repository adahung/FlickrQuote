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
    var selectedText = getSelectedText(),
        flickrGroups = new FlickrGroup(),
        flickrParams = new FlickrParams(),
        group = flickrGroups.getRandomGroup(),
        sort = flickrParams.getRandomSort();
    if (selectedText) {
        document.getElementById('text').innerHTML = 'Search <b>' + selectedText + '</b> in <b>' + group.name + '</b> (' + sort + ')';
        getPhotosFromFlickr(selectedText, group.id, sort);
    }
}

function getPhotosFromFlickr(text, group_id, sort) {
    var url = 'http://nameless-fjord-2265.herokuapp.com/photo',
        args;

    args = 'count=12&text=' + encodeURIComponent(text) + '&group_id=' + encodeURIComponent(group_id) + '&sort=' + sort;
    makeRequest(url + '?' + args, parsePhotoResp);
}

function parsePhotoResp(req) {
    var rslt = JSON.parse(req.responseText);
    renderPhotoList(rslt.photos);
}

function renderPhotoList(photos) {
    // create ul to display photos
    var photoList = document.getElementById('photoList'),
        text = document.getElementById('quote').innerHTML;
    photoList.innerHTML = '';

    for (var index in photos) {
        var photoObj = photos[index],
            photoNode = document.createElement("li"),
            imgNode = document.createElement('img');
        
        imgNode.setAttribute('src', photoObj.url);
        imgNode.setAttribute('width', '250');
        imgNode.setAttribute('height', '250');
        imgNode.className = 'photo';
        photoNode.className = 'photoContainer';
        photoNode.appendChild(imgNode);

        photoList.appendChild(photoNode);
    }

    // render template
    renderAllPhotoNodes(photoList, text, 'original');

}


var quoteCollection = new Quotes();

document.getElementById('qInput').oninput = updateQuote;
document.getElementById('quote').onmouseup = doSomethingWithSelectedText;

document.getElementById('qInput').value = quoteCollection.getOne();
updateQuote();
renderAllPhotoTemplates(document.getElementById('templateList'), "I'm doing Q4 Hackday!");
document.getElementById('templateList').onclick = tmplSelectionHandler;
document.getElementById('photoList').onmouseover = photoHoverHandler;
document.getElementById('photoList').onmouseout = photoHoverHandler;
document.getElementById('photoList').onclick = photoPublishHandler;
