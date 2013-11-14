function Quotes() {
	this.quotes = [
		"The only way to do great work is to love what you do. -Steve Jobs",
		"lalala -Ada",
		"Whatever the mind of man can conceive and believe, it can achieve. -Napoleon Hill",
		"Your time is limited, so don't waste it living someone else's life. -Steve Jobs",
        "Strive not to be a success, but rather to be of value. -Albert Einstein",
        "Two roads diverged in a wood, and I took the one less traveled by, and that has made all the difference.  -Robert Frost",
		"The common question that gets asked in business is, 'why?' That’s a good question, but an equally valid question is, 'why not?' -Jeffrey Bezos",
		"You miss 100% of the shots you don't take. -Wayne Gretzky",
		"I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I've been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed. -Michael Jordan",
	];

	this.getOne = function() {
		var index = Math.floor((Math.random()*this.getQuoteLength()));
		return this.quotes[index];
	}

	this.getQuoteLength = function() {
		return this.quotes.length;
	}
}
