$( document ).ready(function() {
	$('#portfolio-nav').click(function(){
		$('#portfolio').removeClass('right-hidden');
		$('#portfolio').removeClass('left-hidden');
		$('#contact').addClass("right-hidden");
		$('#home').addClass("left-hidden");
		$('#contact').addClass("hidden");
		$('#home').addClass("hidden");
		$('#portfolio').removeClass("hidden");
	});
	$('#contact-nav').click(function(){
		$('#contact').removeClass('right-hidden');
		$('#portfolio').addClass("left-hidden");
		$('#home').addClass("left-hidden");
		$('#portfolio').addClass("hidden");
		$('#home').addClass("hidden");
		$('#contact').removeClass("hidden");
	});
	$('#home-nav').click(function(){
		$('#home').removeClass('left-hidden');
		$('#home').removeClass('active');
		$('#contact').addClass("right-hidden");
		$('#portfolio').addClass("right-hidden");
		$('#contact').addClass("hidden");
		$('#portfolio').addClass("hidden");
		$('#home').removeClass("hidden");
		$('#home-nav').parent.addClass('active');
	});
});