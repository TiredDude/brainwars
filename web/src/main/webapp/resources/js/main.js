require.config({
	paths : {
		jquery : 'lib/jquery',
		underscore : 'lib/underscore',
		backbone : 'lib/backbone',
		animation : "animation"
	}

});

require([ 'app', ], function(app) {
    app.initialize();
});