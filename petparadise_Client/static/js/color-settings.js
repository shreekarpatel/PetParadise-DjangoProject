(function ($) {
	"use strict";

	$('.color-trigger').on('click', function () {
		$(this).parent().toggleClass('visible-palate');
	});

	$('.color-palate .colors-list .palate').on('click', function () {
		var newThemeColor = $(this).attr('data-theme-file');
		var targetCSSFile = $('link[id="theme-color-file"]');
		$(targetCSSFile).attr('href', newThemeColor);
		$('.color-palate .colors-list .palate').removeClass('active');
		$(this).addClass('active');

		let root = document.documentElement;

		switch (newThemeColor) {
			case "css/color-themes/green-theme.css":
				root.style.setProperty('--pt_orange', '#2ECC40');
				break;
			case "css/color-themes/blue-theme.css":
				root.style.setProperty('--pt_orange', '#0074D9');
				break;
			case "css/color-themes/orange-theme.css":
				root.style.setProperty('--pt_orange', '#ff7e00');
				break;
			case "css/color-themes/purple-theme.css":
				root.style.setProperty('--pt_orange', '#bb54e1');
				break;
			case "css/color-themes/teal-theme.css":
				root.style.setProperty('--pt_orange', '#14c599');
				break;
			case "css/color-themes/brown-theme.css":
				root.style.setProperty('--pt_orange', '#ab8b40');
				break;
			case "css/color-themes/redd-color.css":
				root.style.setProperty('--pt_orange', '#FF4136');
				break;
			default:
				root.style.setProperty('--pt_orange', '#e7470c');
		}
	});




}(jQuery));