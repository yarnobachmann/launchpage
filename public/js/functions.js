
/* Background Images
-------------------------------------------------------------------*/
var  pageTopImage = jQuery('#page-top').data('background-image');
var  aboutImage = jQuery('#about').data('background-image');
var  subscribeImage = jQuery('#subscribe').data('background-image');
var  contactImage = jQuery('#contact').data('background-image');

if (pageTopImage) {  jQuery('#page-top').css({ 'background-image':'url(' + pageTopImage + ')' }); };
if (aboutImage) {  jQuery('#about').css({ 'background-image':'url(' + aboutImage + ')' }); };
if (subscribeImage) {  jQuery('#subscribe').css({ 'background-image':'url(' + subscribeImage + ')' }); };
if (contactImage) {  jQuery('#contact').css({ 'background-image':'url(' + contactImage + ')' }); };

/* Background Images End
-------------------------------------------------------------------*/



/* Document Ready function
-------------------------------------------------------------------*/
jQuery(document).ready(function($) {
	"use strict";


    /* Window Height Resize
    -------------------------------------------------------------------*/
    var windowheight = jQuery(window).height();
    if(windowheight > 650)
    {
         $('.pattern').removeClass('height-resize');
    }
    /* Window Height Resize End
    -------------------------------------------------------------------*/



	/* Main Menu
	-------------------------------------------------------------------*/
	$('#main-menu #headernavigation').onePageNav({
		currentClass: 'active',
		changeHash: false,
		scrollSpeed: 750,
		scrollThreshold: 0.5,
		scrollOffset: 0,
		filter: '',
		easing: 'swing'
	});

	/* Main Menu End
	-------------------------------------------------------------------*/




	/* Time Countdown
	-------------------------------------------------------------------*/
	$('#time_countdown').countDown({

		targetDate: {
		    'day': 19,
		    'month': 1,
		    'year': 2018,
		    'hour': 24,
		    'min': 0,
		    'sec': 0
		 },
		 omitWeeks: true



	    });



	/* Next Section
	-------------------------------------------------------------------*/
	$('.next-section .go-to-about').click(function() {
    	$('html,body').animate({scrollTop:$('#about').offset().top}, 1000);
  	});
  	$('.next-section .go-to-subscribe').click(function() {
    	$('html,body').animate({scrollTop:$('#subscribe').offset().top}, 1000);
  	});
  	$('.next-section .go-to-contact').click(function() {
    	$('html,body').animate({scrollTop:$('#contact').offset().top}, 1000);
  	});
  	$('.next-section .go-to-page-top').click(function() {
    	$('html,body').animate({scrollTop:$('#page-top').offset().top}, 1000);
  	});

		$('.nav .navbar-nav .go-to-about').click(function() {
				$('html,body').animate({scrollTop:$('#about').offset().top}, 1000);
			});
			$('.nav .navbar-nav .go-to-subscribe').click(function() {
				$('html,body').animate({scrollTop:$('#subscribe').offset().top}, 1000);
			});
			$('.nav .navbar-nav .go-to-contact').click(function() {
				$('html,body').animate({scrollTop:$('#contact').offset().top}, 1000);
			});
			$('.nav .navbar-nav .go-to-page-top').click(function() {
				$('html,body').animate({scrollTop:$('#page-top').offset().top}, 1000);
			});

  	/* Next Section End
	-------------------------------------------------------------------*/




  /* Subscribe
  -------------------------------------------------------------------*/
    $(".news-letter").ajaxChimp({
        callback: mailchimpResponse,
        url: "http://jeweltheme.us10.list-manage.com/subscribe/post?u=a3e1b6603a9caac983abe3892&amp;id=257cf1a459" // Replace your mailchimp post url inside double quote "".
    });

    function mailchimpResponse(resp) {
         if(resp.result === 'success') {

            $('.alert-success').html(resp.msg).fadeIn().delay(3000).fadeOut();

        } else if(resp.result === 'error') {
            $('.alert-warning').html(resp.msg).fadeIn().delay(3000).fadeOut();
        }
    };




	/* Subscribe End
	-------------------------------------------------------------------*/











});

/* Document Ready function End
-------------------------------------------------------------------*/
