$(document).ready(function() {
	//-------toggle menu-------------
	$('.header-mobile .link-menu').on('click', function() {
		$('body').toggleClass("show-nav");
	})

		// sticky navbar on scroll
		var navBar = $('#headerNavBar');
		var navBarHeight = navBar.height();
		
		$(window).scroll(function() {
			if ($(this).scrollTop() > navBarHeight) {
				navBar.addClass('header-scrolled');
			} else {
				navBar.removeClass('header-scrolled');
			}
		})

		/*-------------------------
		add form function
		-------------------------*/

		$('.field-input').focus(function(){
			$(this).parent().addClass('is-focused has-label');
		});

		$('.field-input').each(function(){
			if($(this).val() != ''){
				$(this).parent().addClass('has-label');
			}
		});

		$('.field-input').blur(function(){
			var $parent = $(this).parent();
			if($(this).val() == ''){
				$parent.removeClass('has-label');
			}
			$parent.removeClass('is-focused');
		});

		// intern link scroll animation
		$('a[href^="#"]').on('click',function (e) {
			e.preventDefault();

			var target = this.hash;
			var $target = $(target);

			$('html, body').stop().animate({
				'scrollTop': $target.offset().top
			}, 900, 'swing', function () {
				window.location.hash = target;
			});
		});
	// remove last function if you don't want URL change
})