define([ 'underscore', 'backbone' ], function(_, Backbone) {
	var Page = Backbone.Model.extend({
		defaults : {
			name : "empty page",
			sub_pages : {}
		}
	});
	return Page;
});