function photoHoverHandler(e) {
	var elem, evt = e ? e:event,
		parentNode;
	if (evt.srcElement)  elem = evt.srcElement;
	else if (evt.target) elem = evt.target;

	parentNode = elem.parentNode;
	// remove camera overlay if mouseout of overlay
	if (elem.className == 'photo-mask') {
		if (evt.type == 'mouseout') {
	        parentNode.classList.remove('hover');
	        renderPublishOverlay(parentNode);
		}
		else if (evt.type == 'mouseover' && !parentNode.classList.contains('hover')) {
			parentNode.classList.add('hover');
			renderPublishOverlay(parentNode);
		}
	}
	
	return true;
}

function renderPublishOverlay(el) {
	if (el.classList.contains('hover') && !el.classList.contains('camera')) {
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
