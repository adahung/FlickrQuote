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

function photoPublishHandler(e) {
	var elem, evt = e ? e:event;
	if (evt.srcElement)  elem = evt.srcElement;
	else if (evt.target) elem = evt.target;

	if (elem.className == 'photo-mask') {
		showPublishOverlay(elem.parentNode);
	}

}

function showPublishOverlay(photoNode) {
	var publishOverlay = document.getElementById('publish'),
		publishPhoto = document.getElementById('pubPhoto'),
		photoTop = parseInt(document.defaultView.getComputedStyle(publishPhoto, null).getPropertyValue('top').replace('px', '')),
		initTop = photoTop,
		overlay,
		canvasPhoto;

	// render publish info
	showPublishInfo();

	canvasPhoto = getPublishPhoto(photoNode);
	publishPhoto.appendChild(canvasPhoto);

	publishOverlay.style.display = 'block';

	// animate the photo out of camera
	var internal = setInterval(function() {
		if (photoTop < initTop + 270) {
			photoTop += 1;
			publishPhoto.style.top = photoTop.toString() + 'px';
		}
		else {
			clearInterval(internal);
		}
		
	}, 10);

}

function showPublishInfo() {
	var photographer = 'adahung',
		photogroup = 'FlickrCentral',
		photoquoter = 'adahung';

	photogroup = document.getElementById('pickgroup').innerHTML;
	document.getElementById('photographer').innerHTML = photographer;
	document.getElementById('photogroup').innerHTML = photogroup;
	document.getElementById('photoquoter').innerHTML = photoquoter;

}

function getPublishPhoto(photoNode) {
	var pubPhoto = document.createElement('DIV'),
		imgNode, textNode;
	pubPhoto.className = photoNode.className;

	imgNode = photoNode.getElementsByClassName('photo')[0].cloneNode(true);
	textNode = photoNode.getElementsByClassName('photoText')[0].cloneNode(true);

	pubPhoto.appendChild(imgNode);
	pubPhoto.appendChild(textNode);

	return pubPhoto;
}


