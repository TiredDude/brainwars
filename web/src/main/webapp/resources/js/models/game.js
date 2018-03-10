define([ 'underscore', 'backbone' ], function(_, Backbone) {
	var Game = Backbone.Model.extend({
		url : "api/game",
		defaults : {
			Id : 0,
			name: "Unknown game",
			items : {},
			players : {}
		}
	});
	return Game;
});