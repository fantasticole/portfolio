var main = function(){
	$('.navbar-nav li:lt(3)').click(function(){
		$('.navbar-nav li').removeClass('active');
		$(this).addClass('active');
	});

	$('.dropdown-menu li').click(function(){
		$('.navbar-nav li:lt(3)').removeClass('active');
		$('.dropdown').addClass('active');
		$(this).addClass('active');
	});

	$(window).resize(function(){
		if ($(window).width() < 550){
			$('.contact i').removeClass('fa-3x');
			$('.contact i').addClass('fa-2x');
		}
		else {
			$('.contact i').removeClass('fa-2x');
			$('.contact i').addClass('fa-3x');
		}
	});
};

$(document).ready(main);