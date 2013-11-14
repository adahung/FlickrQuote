function renderAllPhotoNodes(photoListNode, text, typeClassName) {
	var photoNodeArray = photoListNode.getElementsByClassName('photo'),
		length = photoNodeArray.length;
	for (var idx = 0; idx < length; idx++) {
		if (typeClassName == 'center') {
			renderTextCenter(photoNodeArray[idx], text, typeClassName);
		}
		else if (typeClassName == 'blurAndCenter') {
			renderBlurAndCenter(ph)
		}
	}
}

function renderTextCenter(photoNode, text, typeClassName) {
    var textNode = document.createElement("span");
    textNode.className = 'photoText ' + typeClassName;
    textNode.innerHTML = text;
    photoNode.appendChild(textNode);
}

function renderAllPhotoTemplates(templateListNode, text) {
	var defaultTmpl = new PhotoTemplates();
	console.log(defaultTmpl.templates);

	for (var idx in defaultTmpl.templates) {
		var tmplNode = document.createElement('li'),
			textNode = document.createElement('span')
			imgNode = document.createElement('img'),
			tmplName = defaultTmpl.templates[idx];
		tmplNode.className = 'template ' + tmplName;
		textNode.className = 'photoText ' + tmplName;
		imgNode.className = 'photo ' + tmplName;
		textNode.innerHTML = text;
		imgNode.setAttribute('src', './assets/img/template_default.jpg');
		imgNode.setAttribute('width', '300');
		imgNode.setAttribute('height', '250');

		tmplNode.appendChild(imgNode);
		tmplNode.appendChild(textNode);
		templateListNode.appendChild(tmplNode);
	}
}