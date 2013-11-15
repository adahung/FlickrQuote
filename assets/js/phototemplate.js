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

	if (elem.className == 'photo-mask') {
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

function tmplHoverHandler(e) {
	var elem, evt = e ? e:event,
		parentNode;
	if (evt.srcElement)  elem = evt.srcElement;
	else if (evt.target) elem = evt.target;

	parentNode = elem.parentNode;
	// remove camera overlay if mouseout of overlay
	if (elem.className == 'photo-mask') {
		if (evt.type == 'mouseout') {
	        parentNode.classList.remove('hover');
	        renderTmplOverlay(parentNode);
		}
		else if (evt.type == 'mouseover' && !parentNode.classList.contains('hover')) {
			parentNode.classList.add('hover');
			renderTmplOverlay(parentNode);
		}
	}
	
	return true;
}

function renderTmplOverlay(el) {
	if (el.classList.contains('hover')) {
		var overlay = document.createElement('div'),
			text = document.createElement('span');
		
		text.className = 'tmpl-text';
		text.innerHTML = 'Choose this template';
		overlay.className = 'tmpl-overlay';
		overlay.appendChild(text);
		el.appendChild(overlay);
	}
	else {
		var overlay = el.getElementsByClassName('tmpl-overlay')[0];
		el.removeChild(overlay);
	}
}

