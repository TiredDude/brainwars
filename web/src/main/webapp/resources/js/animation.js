//This module contains all animations bindings
define([ 'jquery', 'underscore', 'backbone' ], function($, _, Backbone) {

	var Animation = {
			
		loader_el : $('.loader'),

		fadeInOut : function(el, duration, callback) {
			el.animate({opacity : '0'}, duration, function() {
				callback();
			});
			el.animate({opacity : '1'}, duration);
		},
	
		showLoading : function(text) {
			this.loader_el.text(text);
			this.loader_el.animate({opacity : '1'}, 0.3);
		},
		
		hideLoading : function() {
			this.loader_el.animate({opacity : '0'}, 0.5, function(){
				this.loader_el.text("Loading...");
			});
		}
	};
	

	$('#switch-theme-button').click(function() {
		if ($("body").hasClass("theme-dark")) {
			$("body").removeClass("theme-dark");
			$("body").addClass("theme-light");
		} else {
			$("body").removeClass("theme-light");
			$("body").addClass("theme-dark");
		}

	});

	return Animation;

});
