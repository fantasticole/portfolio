;(function(){

	var gifs = ['http://bit.ly/prattdance', 'http://bit.ly/soultraindance', 'http://bit.ly/catcrazyeyes', 'http://bit.ly/lucillebluth', 'http://bit.ly/catcuddlegif', 'http://bit.ly/burgergif', 'http://bit.ly/aokboygif', 'http://bit.ly/fabllamagif', 'bit.ly/colbertdance', 'http://bit.ly/bridesmaidsfood', 'http://bit.ly/babydancesneaks', 'http://bit.ly/sideeye', 'http://bit.ly/seinfelddance', 'http://bit.ly/robotbeach', 'http://bit.ly/pizzayonce', 'http://bit.ly/rabbitmonday', 'bit.ly/1ImXZl4', 'http://bit.ly/1P41d1m', 'http://bit.ly/1ONx2uF', 'http://bit.ly/1KO8fc6', 'http://bit.ly/1MKAyr60', 'http://bit.ly/1eQo9Eh', 'http://bit.ly/1eQobMm', 'http://bit.ly/1Ho14zI', 'http://bit.ly/1K24dXT', 'http://bit.ly/1gHueoo', 'http://bit.ly/1g4WOzj', 'http://bit.ly/1DqsqtY', 'http://bit.ly/1eQoJSx', 'http://bit.ly/1eQoPcJ', 'http://bit.ly/1P42TIr', 'http://bit.ly/1eQoUx4', 'http://bit.ly/1hhMBAr', 'http://bit.ly/1DqsREr', 'http://bit.ly/1Dqt0YF', 'http://bit.ly/1IVT6F8', 'http://bit.ly/1g4XN2d', 'http://bit.ly/1IK6Ror', 'http://bit.ly/1DnqLWl', 'http://bit.ly/1MKBNGV', 'http://bit.ly/1MKaqhe', 'http://bit.ly/1M9i3hc']


// 1ImXZl4 - pump it, 1P41d1m - Mt. T, 1ONx2uF - jump fail, 1KO8fc6 - johnye, 1MKAyr60 - tina high five, 1eQo9Eh - kimye, 1eQobMm - khloe, 1Ho14zI - gmbluth, 1K24dXT - mom jeans, 1gHueoo - 3 dancing, 1g4WOzj - fresh prince dance, 1DqsqtY - bucket stairs, 1eQoJSx - sloth tongue, 1eQoPcJ - sloth chair, 1P42TIr - thanks obama, 1eQoUx4 - slinky, 1hhMBAr - baby turtle, 1DqsREr - tina, 1Dqt0YF - mj bad, 1IVT6F8 - eddie clap, 1g4XN2d - fey palin, 1IK6Ror - goofy cheez, 1DnqLWl - antelope chew, 1MKBNGV - Jordan Dunk, 1MKaqhe - cat pancakes, 1M9i3hc - Rosie Dance

	function newGif(){
		return Math.floor(Math.random()*gifs.length);
	};

	var interface = {
		showGif: function(){
			$('.gifdiv').show();
			$('.gifdiv').html('');
			$('.gifdiv').css('background-image', 'url(' + gifs[newGif()] + ')');
			$('.gifdiv').css('background-color', 'rgb(2, 11, 34)');
			$('.gifdiv').append('<i class="fa fa-close fa-3x"></i>');
		}
	};
	window.interface = interface;
})();