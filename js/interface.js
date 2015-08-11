;(function(){
	var gifs = ['http://bit.ly/prattdance', 'http://bit.ly/soultraindance', 'http://bit.ly/catcrazyeyes', 'http://bit.ly/lucillebluth', 'http://bit.ly/catcuddlegif', 'http://bit.ly/burgergif', 'http://bit.ly/aokboygif', 'http://bit.ly/fabllamagif', 'http://bit.ly/colbertdance', 'http://bit.ly/bridesmaidsfood', 'http://bit.ly/babydancesneaks', 'http://bit.ly/sideeye', 'http://bit.ly/seinfelddance', 'http://bit.ly/robotbeach', 'http://bit.ly/pizzayonce', 'http://bit.ly/rabbitmonday', 'http://bit.ly/pumpitdance', 'http://bit.ly/mrtbling', 'http://bit.ly/jumpfailx', 'http://bit.ly/johnye', 'http://bit.ly/tinahighfive', 'http://bit.ly/kimyelooks', 'http://bit.ly/khloekar', 'http://bit.ly/gmbluth', 'http://bit.ly/momjeansdance', 'http://bit.ly/3dancing', 'http://bit.ly/fpdance', 'http://bit.ly/slothtongue', 'http://bit.ly/slothchair', 'http://bit.ly/thanksobamacookie', 'http://bit.ly/slinkytreadmill', 'http://bit.ly/babyturtleflap', 'http://bit.ly/tinadance', 'http://bit.ly/mjbaddance', 'http://bit.ly/eddieclap', 'http://bit.ly/feyaspalin', 'http://bit.ly/cheezgoofy', 'http://bit.ly/antelopechew', 'http://bit.ly/jordandunk', 'http://bit.ly/catpancakes', 'http://bit.ly/rosiedance', 'http://bit.ly/elephantstreamer', 'http://bit.ly/porcusink', 'http://bit.ly/corgigif', 'http://bit.ly/corgigif5']

	function newGif(){
		return Math.floor(Math.random()*gifs.length);
	};

	var interface = {
		showGif: function(){
			$('.gifdiv').show();
			$('.gifdiv').html('');
			$('.gifdiv').css('background-image', 'url(' + gifs[newGif()] + ')');
			$('.gifdiv').css('background-color', 'rgb(2, 11, 34)');
			$('.gifdiv').append('<i class="fa fa-close fa-2x"></i>');
		}
	};
	window.interface = interface;
})();