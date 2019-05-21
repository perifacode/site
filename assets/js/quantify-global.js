$(document).ready(function() {
	"use strict";
	/* ------------------------------
		Convert svg into XML code
 	------------------------------- */
	$(function(){
		jQuery('img.svg').each(function(){
			var $img = jQuery(this);
			var imgID = $img.attr('id');
			var imgClass = $img.attr('class');
			var imgURL = $img.attr('src');
			jQuery.get(imgURL, function(data) {
				// Get the SVG tag, ignore the rest
				var $svg = jQuery(data).find('svg');
				// Add replaced image's ID to the new SVG
				if(typeof imgID !== 'undefined') {
					$svg = $svg.attr('id', imgID);
				}
				// Add replaced image's classes to the new SVG
				if(typeof imgClass !== 'undefined') {
					$svg = $svg.attr('class', imgClass+' replaced-svg');
				}
				// Remove any invalid XML tags as per http://validator.w3.org
				$svg = $svg.removeAttr('xmlns:a');
				// Check if the viewport is set, else we gonna set it if we can.
				if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
					$svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'));
				}
				// Replace image with new SVG
				$img.replaceWith($svg);
			}, 'xml');

		});
	});
	
	/* ------------------------------
		Intro slider Carousel
 	------------------------------- */
	$("#intro").owlCarousel({
		loop:true,
		dots : true, 
		nav : true, // Show next and prev buttons
		slideSpeed : 300,
		paginationSpeed : 400,
		autoplay:true,
		autoplayTimeout:5000,
		autoplayHoverPause:true,
		singleItem:true,
		responsiveClass:true,
		responsive:{
			0:{ items:1, nav : false, },
			768:{ items:1, nav : false },
			1000:{ items:1, }
		}
	});
	
	/* ------------------------------
		Testimonials Carousel
 	------------------------------- */
	$("#testimonials-slider").owlCarousel({
		loop:true,
		dots : true, 
		autoHeight:true, 
		autoHeightClass: 'owl-height', 
		nav :false, // Show next and prev buttons
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem:true,
		responsiveClass:true,
		responsive:{
			0:{ items:1, },
			768:{ items:1, nav : false},
			1000:{ items:1, },
			1024:{ items:1, }
		}
	});
	
	/* ------------------------------
		Members Carousel
 	------------------------------- */
	$("#members").owlCarousel({
	  loop:true,
	  dots : false,
	  nav : true, // Show next and prev buttons
	  slideSpeed : 300,
	  paginationSpeed : 400,
	  singleItem:true,
		responsiveClass:true,
		responsive:{
			0:{ items:1, nav : false, dots: true},
			768:{ items:3, nav : false, dots: true},
			1000:{ items:3, nav : false, dots: true },
			1025:{ items:4, nav : true, dots: false },
		}
	});

	/* ------------------------------
		Search Toggle
 	------------------------------- */
	$(".search-toggle").on("click",function() {
		if ($(window).width() > 767){
			if($(this).hasClass('active')){
			$(this).removeClass('active');
			$(".search-form").removeClass('open');
			setTimeout (function(){
			$(".navbar-nav").removeClass('hide');
			},300);
		}
		else{
			$(this).addClass('active');
			$(".search-form").addClass('open');
			$(".search-form .form-control").focus();
			$(".navbar-nav").addClass('hide');
		}
		}
	});

	/* ------------------------------
		Navbar active
 	------------------------------- */
	/* Add active class in navbar according to current section */
	$(window).on("scroll load resize", onScroll);
	$('.primary-navbar .navbar-nav a[href^="#"]').on('click', function(e) {
		e.preventDefault();
		if ($(window).width() < 768){
			$(".pmd-sidebar-overlay").trigger("click");
		}
		$(document).off("scroll");
		var target = this.hash,
			$target = $(target);
		var headerHeight = $(".navbar").height();
		if ($('body').hasClass('propeller-topbar-body')){
			$('html, body').stop().animate({
				'scrollTop': $target.offset().top - headerHeight - 48
			}, 500, function() {
				$(document).on("scroll", onScroll);
			});
		} else {
			$('html, body').stop().animate({
				'scrollTop': $target.offset().top - headerHeight
			}, 500, function() {
				$(document).on("scroll", onScroll);
			});
		}
	});
	/* Get current section link */
    function onScroll() {
		var scrollPos = $(document).scrollTop() + 205;
		$('.primary-navbar .nav > li > a').each(function() {
			var currLink = $(this);
			var refElement = $(currLink.attr("href"));	
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
				$('.nav li a').removeClass("active");
				currLink.addClass("active");
				var spanTop = $('.active').offset().left - $('.nav').offset().left;
				var navWidth = $(this).outerWidth();
				$('.nav .nav-active').css({"left":spanTop,"width":navWidth});
			 } else {
				currLink.removeClass("active");
			}
		});
    }	
	
	/* ------------------------------
		Navbar active add remove
 	------------------------------- */
	$(window).on("load",function(){
		var locationHas = location.hash;
		if (locationHas !== ""){
			scrollToSection(locationHas);
		}
	});
	function scrollToSection(locationHas){
		$(window).scrollTop(0);
		var headerHeight = $(".navbar").height();  
		$("body, html").animate({ 
		  scrollTop: $(locationHas).offset().top  - headerHeight
		}, 600);
	}
	
	/* ------------------------------
		Sticky Header
	------------------------------- */
	$(window).on("scroll",function() {
		var pageScroll = $(this).scrollTop();
		if (pageScroll > 56) {
			if ( $('.pmd-navbar').hasClass('primary-navbar')){
				$('nav.navbar').addClass("navbar-small");
				$('nav.navbar').removeClass("navbar-inverse");
			}
		} else {
			if ( $('.pmd-navbar').hasClass('primary-navbar')){
				$('nav.navbar').removeClass("navbar-small");
				$('nav.navbar').addClass("navbar-inverse");
			}
		}
	});
	
	/* ------------------------------
		Loader
	------------------------------- */
	$(window).on('load', function() {
	  $('#status').fadeOut();
	  $('#preloader').delay(350).fadeOut('slow');
	  $('body').delay(350).css({'overflow':'visible'});
	});
	
});	