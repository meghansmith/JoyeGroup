$(document).ready(function(){
	
	$(".menuHide").addClass('hide');
	$('#menuButton').click(function(){
		$(".menuHide").slideToggle('fast');
	});

	var container = document.querySelector('#container');
	var msnry = new Masonry( container, {
	itemSelector: '.eventS'
	});
	$('a').click(function(){
	   $('html, body').animate({
	       scrollTop: $( $.attr(this, 'href') ).offset().top
	   }, 500);
	   return false;
	});
});