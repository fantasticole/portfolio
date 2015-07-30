;(function(){
	var gifs = ['images/gifs/aok.gif', 'images/gifs/burger.gif', 'images/gifs/bridesmaids.gif', 'images/gifs/catsideeye.gif', 'images/gifs/chrispratt.gif', 'images/gifs/fabulous.gif', 'images/gifs/fail.gif', 'images/gifs/groom.gif', 'images/gifs/highfive.gif', 'images/gifs/jan.gif', 'images/gifs/momjeans.gif', 'images/gifs/monday.gif', 'images/gifs/mrt.gif', 'images/gifs/pancakes.gif', 'images/gifs/pharrell.gif', 'images/gifs/pizzayonce.gif', 'images/gifs/pumpit.gif', 'images/gifs/robotbeach.gif', 'images/gifs/rosie.gif', 'images/gifs/sideeye.gif', 'images/gifs/slothboss.gif', 'images/gifs/slothyawn.gif', 'images/gifs/thanksobama.gif', 'images/gifs/tina.gif', 'images/gifs/turtle.gif']

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
		},
		showProjGif: function(){
			$('.gifdiv').show();
			$('.gifdiv').html('');
			$('.gifdiv').css('background-image', 'url(../' + gifs[newGif()] + ')');
			$('.gifdiv').css('background-color', 'rgb(2, 11, 34)');
			$('.gifdiv').append('<i class="fa fa-close fa-3x"></i>');
		}
	};
	window.interface = interface;
})();