function renderFirstHint() {
	var hint = document.getElementById('hint');

	hint.style.top = '70px';
	hint.style.left = '1080px';
	hint.style.display = 'block';
	hint.getElementsByClassName('tip')[0].innerHTML = 'Input your quote';

	setTimeout(function() {
		renderSecondHint();
	}, 3000);

}

function renderSecondHint() {
	var hint = document.getElementById('hint');

	hint.style.top = '130px';
	hint.style.left = '1180px';
	hint.style.display = 'block';
	hint.getElementsByClassName('tip')[0].innerHTML = 'Select some words';

}

function renderThirdHint() {
	var hint = document.getElementById('hint');

	hint.style.top = '180px';
	hint.style.left = '1180px';
	hint.style.display = 'block';
	hint.getElementsByClassName('tip')[0].innerHTML = 'Refresh photos';

	setTimeout(function() {
		hint.style.display = 'none';
	}, 5000);
}


