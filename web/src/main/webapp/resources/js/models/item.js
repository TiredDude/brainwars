define([ 'underscore', 'backbone' ], function(_, Backbone) {
	var Item = Backbone.Model.extend({
		defaults : {
			name : "Unknown item",
		}
	});
	return Item;
});