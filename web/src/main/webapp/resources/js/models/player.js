define([ 'underscore', 'backbone' ], function(_, Backbone) {
	var Player = Backbone.Model.extend({
		defaults : {
			id : null,
			name : "Unknown player",
			hp : 100,
			mp : 10,
			damage : 10,
			items : {},
			actions: {}
		}
	});
	return Player;
});