define(['nestedModule'], function(NestedModule) {
	return {
		initialize: function() {
			console.log('someModule is intialized.');
			NestedModule.initialize();
		}
	}
});
