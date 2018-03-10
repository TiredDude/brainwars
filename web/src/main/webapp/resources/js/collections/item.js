define([ 'underscore', 'backbone', 'models/item' ], function(_, Backbone, ItemModel) {
	var ItemCollection = Backbone.Collection.extend({
		model : ItemModel
	});
	return ItemCollection;
});