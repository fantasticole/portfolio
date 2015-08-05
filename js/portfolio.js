var main = function(){
	$('.gifdiv').hide();

	$('.navbar-nav li:lt(3)').click(function(){
		$('.navbar-nav li').removeClass('active');
		$(this).addClass('active');
	});

	$('.dropdown-menu li').click(function(){
		$('.navbar-nav li:lt(3)').removeClass('active');
		$('.dropdown').addClass('active');
		$(this).addClass('active');
	});

	$('.gifme').click(function(){
		interface.showGif();
	});

	$(document).on('click', '.fa-close', function(){
		$('.gifdiv').hide();
	});

	var config = {
		"id": '628733595385995265',
		"domId": 'timeline',
		"maxTweets": 15,
		"enableLinks": true,
		"showUser": true,
		"showTime": true,
		"showInteraction": false,
		"lang": 'en'
	};

	twitterFetcher.fetch(config);

	$(window).resize(function(){
		if ($(window).width() < 550){
			$('.contact i').removeClass('fa-3x');
			$('.contact i').addClass('fa-2x');
		}
		else {
			$('.contact i').removeClass('fa-2x');
			$('.contact i').addClass('fa-3x');
			$('.timePosted').show();
		}
	});
};

$(document).ready(main);