(function() {
	
	!window.console && (window.console = { log: function() {}});
	
	requirejs.config({
		paths: {
			'someModule' : 'someModule'
		}
	});
	
	require(['someModule'], function(someModule) {
		someModule.initialize();
	});
	
}).call(this);
