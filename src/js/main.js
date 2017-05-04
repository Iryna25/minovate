//https://www.npmjs.com/package/gulp-include

//=require jquery/dist/jquery.js

//=require bootstrap/js/tab.js

//=require bootstrap/js/carousel.js

$(function(){

 $('.navbar-toggler').click(function(e){
 e.preventDefault();

	var target = $(this).attr('href');
	$(target).toggleClass('collapse');
});


$ ('.page-up a').click(function(e){
e.preventDefault();	
var href=$(this).attr('href'), speed=1000;

 $('html, body').animate({ scrollTop: $(href).offset().top }, speed);
});


//$('.carousel').carousel({});


})