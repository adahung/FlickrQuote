function Quotes() {
	this.quotes = [
		"The only way to do great work is to love what you do. -Steve Jobs",
		"Whatever the mind of man can conceive and believe, it can achieve. -Napoleon Hill",
		"Your time is limited, so don't waste it living someone else's life. -Steve Jobs",
        "Strive not to be a success, but rather to be of value. -Albert Einstein",
        "Two roads diverged in a wood, and I took the one less traveled by, and that has made all the difference. -Robert Frost",
		"You miss 100% of the shots you don't take. -Wayne Gretzky",
		"Change your thoughts and you change your world. -Norman Vincent Peale",
		"Life is what we make it, always has been, always will be. -Grandma Moses",
		'Nothing is impossible, the word itself says, "I\'m possible!" -Audrey Hepburn'
	];

	this.getOne = function() {
		//var index = Math.floor((Math.random()*this.getQuoteLength()));
		//return this.quotes[index];
		return '';
	}

	this.getQuoteLength = function() {
		return this.quotes.length;
	}
}

function PhotoTemplates() {
	this.templates = [
		'original',
		'contrast',
		'blur',
		'grayscale',
		'sepia',
		'hue-rotate'
	];
}

function FlickrGroup() {
	this.groups = [
		{ id: '34427469792@N01', name: 'FlickrCentral'},
		{ id: '1463451@N25', name: 'Project Weather'}//,
		//{ id: '35034344814@N01', name: 'Dogs! Dogs! Dogs!'} //FlickrCentral (34427469792@N01)
	];

	this.getRandomGroup = function() {
		var index = Math.floor(Math.random()*this.groups.length);
		return this.groups[index];
	}
}

function FlickrParams() {
	this.sort = [
		//'date-posted-asc', 
		//'date-posted-desc', 
		//'date-taken-asc', 
		//'date-taken-desc', 
		'interestingness-desc'//, 
		//'interestingness-asc', 
		//'relevance'
	];

	this.getRandomSort = function() {
		var index = Math.floor(Math.random()*this.sort.length);
		return this.sort[index];
	}
}

