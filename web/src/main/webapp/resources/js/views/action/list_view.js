define([ 'jquery', 'underscore', 'backbone', 'collections/action', 'text!templates/action/list.html' ], function($, _, Backbone, ActionCollection, actionListTemplate) {
	var ActionListView = Backbone.View.extend({
		el : $("#action"),
		initialize : function() {
			this.collection = new ActionCollection();
			this.collection.add({
				name : "Some action"
			});
			var compiledTemplate = _.template(actionListTemplate, {
				actions : this.collection.models
			});
			this.$el.html(compiledTemplate);
		}
	});
	return ActionListView;
});