define([ 'underscore', 'backbone', 'models/action' ], function(_, Backbone, ActionModel) {
	var ActionCollection = Backbone.Collection.extend({
		model : ActionModel
	});
	return ActionCollection;
});