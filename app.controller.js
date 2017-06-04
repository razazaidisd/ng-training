(function(){
	'use strict';
	
	angular
		.module('ngTraining')
		.controller('MainController', MainController);

	function MainController() {
		var vm = this;
		vm.title = "NG Training";
		
	}

})();