var currentQuote='', currentAuthor = '';
$('#btn').on('click', getQuote);
$('#tweet').on('click', function(event){
	event.preventDefault();
	window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
});

$(document).ready(function(){
	getQuote();
});

function getQuote(){
	$.ajax({
		type: "GET",
		headers: {
			"X-Mashape-Key": "IxTVQa1Vrnmsh3FNT0LMEviP8ricp1pOfwqjsnj68dMvDlJ2uQ",
			Accept: "application/json",
			"Content-Type": "application/x-wwww-form-urlencoded"
		},
		url: 'https://andruxnet-random-famous-quotes.p.mashape.com/',
		success: function(data){
			currentQuote = data.quote;
			currentAuthor =data.author;
			$('#quote').text('"'+currentQuote+'"');
			$('#author').text("-"+currentAuthor);
		}
	}); //end of Ajax
}

function tweetQuote(){
	var link ='https://twitter.com/intent/tweet?text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor);
	window.open(link);
}
