define([ 'jquery', 'underscore', 'backbone', 'collections/item', 'text!templates/item/list.html' ], function($, _, Backbone, ItemCollection, itemListTemplate) {
	var ItemListView = Backbone.View.extend({
		el : $("#item"),
		initialize : function() {
			this.collection = new ItemCollection();
			this.collection.add({
				name : "Some item"
			});
			var compiledTemplate = _.template(itemListTemplate, {
				items : this.collection.models
			});
			this.$el.html(compiledTemplate);
		}
	});
	return ItemListView;
});