define([ 'jquery', 'underscore', 'backbone', 'collections/page', 'text!templates/page/list.html' ], function($, _, Backbone, PageCollection, pageListTemplate) {
	var PageListView = Backbone.View.extend({
		el : $(".content"),
		initialize : function() {
			this.collection = new PageCollection();
			this.collection.add({
				name : "Some page",
				sub_pages : {}
			});
			var compiledTemplate = _.template(pageListTemplate, {
				pages : this.collection.models
			});
			this.$el.html(compiledTemplate);
		}
	});
	return PageListView;
});