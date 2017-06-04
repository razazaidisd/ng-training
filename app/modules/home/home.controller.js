(function(){
	'use strict';

	angular
		.module('ngTraining')
		.controller('HomeController', HomeController);

	function HomeController(){
		var vm = this;
		vm.title = "Home Page";

	}

})();