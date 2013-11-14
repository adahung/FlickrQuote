function renderAllPhotoNodes(photoListNode, text, tmplName) {
	var photoNodeArray = photoListNode.getElementsByClassName('photoContainer'),
		length = photoNodeArray.length;
	for (var idx = 0; idx < length; idx++) {
		photoNodeArray[idx].className = 'photoContainer';
		renderPhotoTemplate(photoNodeArray[idx], text, tmplName);
	}
}

function renderAllPhotoTemplates(templateListNode, text) {
	var defaultTmpl = new PhotoTemplates();
	console.log(defaultTmpl.templates);

	for (var idx in defaultTmpl.templates) {
		var tmplNode = document.createElement('li'),
			imgNode = document.createElement('img'),
			tmplName = defaultTmpl.templates[idx];
		
		tmplNode.className = 'template';
		imgNode.className = 'photo';
		imgNode.setAttribute('src', './assets/img/template_default.jpg');
		imgNode.setAttribute('width', '300');
		imgNode.setAttribute('height', '250');

		tmplNode.appendChild(imgNode);
		renderPhotoTemplate(tmplNode, text, tmplName);
		
		templateListNode.appendChild(tmplNode);
	}
}

function tmplSelectionHandler(e) {
	var elem, evt = e ? e:event;
	if (evt.srcElement)  elem = evt.srcElement;
	else if (evt.target) elem = evt.target;

	if (elem.tagName.toUpperCase() == 'IMG') {
		var tmplName = elem.parentNode.className.replace('template ', ''),
			photoList = document.getElementById('photoList'),
			text = document.getElementById('quote').innerHTML;
		renderAllPhotoNodes(photoList, text, tmplName);
	}
	
	return true;
}

function renderPhotoTemplate(photoNode, text, tmplName) {
	var textNode = document.createElement('span'),
		photoMask = document.createElement('DIV');

	photoNode.className = photoNode.className + ' ' + tmplName;
	textNode.className = 'photoText';
	textNode.innerHTML = text;
	photoMask.className = 'photo-mask';

	photoNode.appendChild(textNode);
	photoNode.appendChild(photoMask);
}

