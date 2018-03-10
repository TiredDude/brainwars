define([ 'underscore', 'backbone', 'models/player' ], function(_, Backbone, PlayerModel) {
	var PlayerCollection = Backbone.Collection.extend({
		model : PlayerModel
	});
	return PlayerCollection;
});