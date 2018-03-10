define([ 'jquery', 'underscore', 'backbone', 'animation', 'views/game/duel', 'models/player' ], function($, _, Backbone, Animtion, Duel, Player) {

	var Controller = Backbone.Router.extend({
		content_el : $('.content'),
		navigation_el : $('.navigation'),
		routes : {
			'game' : 'showGamePage',
			'news' : "showNewsPage",
			'forum' : 'showForumPage',
			'community' : 'showCommunityPage',
			'market' : 'showMarketPage',

			'duel' : 'startDuel',
			'arcade' : 'startArcade',
			'group' : 'startGroup',
			'challenge' : 'startChallenge',

		},
		
		//Game Modes
		startDuel : function(query, data) {
			Animtion.showLoading("Searching for opponent...");
			var player = this.getPlayer();
			var opponent = this.findOpponent();
			var duel = 	new Duel(player, opponent);
			duel.render(Animtion.hideLoading);
		}, 
		
		findOpponent : function(){
			var opponent = new Player();
			opponent.id = 1;
			opponent.name = "Dude";
			return opponent;
		},
		
		getPlayer : function(){
			var player = new Player();
			player.id = 0;
			player.name = "Gogi";
			return player;
		},
		
		startArcade : function() {
			var view = 	new GameView("arcade");
			view.render();
		},
		
		startGroup : function() {
			var view = 	new GameView("group");
			view.render();
		},
		
		startChallenge : function() {
			var view = 	new GameView("challenge");
			view.render();
		},

		
		//Navigation
		showGamePage : function() {
			this.loadPage('game');
		},

		showNewsPage : function() {
			this.loadPage('news');
		},

		showForumPage : function() {
			this.loadPage('forum');
		},

		showCommunityPage : function() {
			this.loadPage('community');
		},

		showMarketPage : function() {
			this.loadPage('market');
		},
		loadPage : function(path, data, success) {
			var _controller = this;
			$.ajax({
				url : path,
				data : data,
				method : 'GET',
				success : function(data) {
					_controller.changePage(_controller.content_el, data,
							Animtion.fadeInOut);
					_controller.updateNavigatin(path);
					if ($.isFunction(success)) {
						success();
					}
				}
			});
		},

		changePage : function(el, content, animation) {
			animation(el, 300, function() {
				el.html(content);
			});
		},

		updateNavigatin : function(path) {
			this.navigation_el.find("li").each(function(index, element) {
				$(element).removeClass('selected');
			});
			this.navigation_el.find("li[title = '" + path + "']").addClass(
					'selected');
		}

	});

	var controller = new Controller;
	Backbone.history.start();
	return controller;
});
