define([ 'underscore', 'backbone', 'models/game' ], function(_, Backbone, GameModel) {
	var GameCollection = Backbone.Collection.extend({
		model :GameModel
	});
	return GameCollection;
});