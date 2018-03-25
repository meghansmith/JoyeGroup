$(document).ready(function(){
	
	$(".menuHide").addClass('hide');
	$('#menuButton').click(function(){
		$(".menuHide").slideToggle('fast');
	});

	var container = document.querySelector('#container');
	var msnry = new Masonry( container, {
	itemSelector: '.eventS'
	});
});