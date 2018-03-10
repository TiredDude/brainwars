define([ 'underscore', 'backbone' ], function(_, Backbone) {
	var Action = Backbone.Model.extend({
		defaults : {
			name : "Unknown action",
		}
	});
	return Action;
});