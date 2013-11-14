function photoHoverHandler(e) {
	var elem, evt = e ? e:event,
		parentNode;
	if (evt.srcElement)  elem = evt.srcElement;
	else if (evt.target) elem = evt.target;

	parentNode = elem.parentNode;
	console.log(elem.tagName);
	if (parentNode.tagName == 'LI') {
		if (evt.type == 'mouseout') {
			console.log('out');
			elem.parentNode.classList.remove('hover');
			renderPublishOverlay(elem.parentNode);
		}
		else if (!elem.parentNode.classList.contains('hover')) {
			console.log('enter');
			elem.parentNode.classList.add('hover');
			renderPublishOverlay(elem.parentNode);
		}
	}

	e.stopPropagation();
}

function renderPublishOverlay(el) {
	if (el.classList.contains('hover') && !el.classList.contains('camera')) {
		console.log('render camera');
		el.classList.add('camera');
		// add camera
		var cameraOverlay = document.createElement('div'),
			camera = document.createElement('img');
		camera.setAttribute('src', 'assets/img/camera.png');
		camera.className = 'camera-icon';
		cameraOverlay.className = 'camera-overlay';
		cameraOverlay.appendChild(camera);
		el.appendChild(cameraOverlay);
	}
	else if (el.classList.contains('camera')) {
		if (el.getElementsByClassName('camera-overlay').length > 0) {
			var camera = el.getElementsByClassName('camera-overlay')[0];
			el.removeChild(camera);
			el.classList.remove('camera');
		}	
	}
}
