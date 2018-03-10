define([ 'jquery', 'underscore', 'backbone', 'collections/player', 'text!templates/player/list.html' ], function($, _, Backbone, PlayerCollection, playerListTemplate) {
	var PlayerListView = Backbone.View.extend({
		el : $("#player"),
		initialize : function() {
			this.collection = new PlayerCollection();
			this.collection.add({
				name : "Some player",
				items : {},
				actions: {}
			});
			var compiledTemplate = _.template(playerListTemplate, {
				players : this.collection.models
			});
			this.$el.html(compiledTemplate);
		}
	});
	return PlayerListView;
});