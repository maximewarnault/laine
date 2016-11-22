// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require bootstrap/collapse
//= require jquery.turbolinks
//= require turbolinks
//= require masonry/jquery.masonry
//= require masonry/modernizr-transitions
//= require masonry/jquery.imagesloaded.min
//= require jquery.slick
//= require_tree .

$(function() {
	if (location.pathname.split('/')[1] != ""){
	    $('li.' + location.pathname.split('/')[1] + ' > a').addClass('active');
		$('.active').parent().addClass('active'+ location.pathname.split('/')[1]);
		$('.dropdown-menu').hover(
		  function() {
		    $(this).parent().addClass('activedoors');
		    $('li.dropdown > a').addClass('doorsdropdown');
		  }, function() {
		    $(this).parent().removeClass('activedoors');
		  	$('li.dropdown > a').removeClass('doorsdropdown');
		  }
		);
	}
	
	$('.slick').slick();
});