define([ 'jquery', 'underscore', 'backbone', 'collections/game', 'text!templates/game/list.html' ], function($, _, Backbone, GameCollection, gameListTemplate) {
	var GameListView = Backbone.View.extend({
		el : $("#game"),
		initialize : function() {
			this.collection = new GameCollection();
			this.collection.add({
				Id : 0,
				name: "Some game",
				items : {},
				players : {}
			});
			var compiledTemplate = _.template(gameListTemplate, {
				games : this.collection.models
			});
			this.$el.html(compiledTemplate);
		}
	});
	return GameListView;
});