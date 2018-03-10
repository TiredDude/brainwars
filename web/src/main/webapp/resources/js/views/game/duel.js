define([ 'jquery', 'underscore', 'backbone', 'models/game', 'models/player', 'text!templates/game/duel.html', 'text!templates/game/dialog/select_category.html'  ], function($, _, Backbone, Game, Player, duel_template, category_template) {
	var Duel = Backbone.View.extend({
		el : $("#page-wrapper"),
		dialog : $("#dialog-container"),
		model : null,
		player : null,
		opponent : null,
		history : [],
		params : [],
		
		//events
		events : {
			'click' : 'banItem',
			
		},
		
		initialize : function(player, opponent) {
			console.log("start game");
			this.player = player;
			this.opponent = opponent;
			this.dialog = $("#dialog-container");
		},

		render : function(callback) {
			var template = _.template(duel_template, {player : this.player, opponent : this.opponent});
			this.$el.html(template);
			this.showCategoryDialog();
			callback();
		},
		
		showCategoryDialog : function(){
			var template = _.template(category_template, {notification : 'select categories to ban.', categories : [{name : 'history'},{name : 'porn'},{name : 'sport'},{name : 'anime'},{name : 'games'}]});
			this.dialog.html(template);
		},
		
		renderPlayers : function() {
			this.player = new Player();
			this.player.render();
			
			this.opponent = new Player();
			this.opponent.render();
		},
		
		banItem : function(e){
			$(e.currentTarget).hide();
		}
		
		
	});
	return Duel;
});