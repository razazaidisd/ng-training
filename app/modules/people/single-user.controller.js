(function(){
	'use strict';
	angular
		.module('ngTraining')
		.controller('UserController', UserController);

	function UserController($stateParams, $http){
		var vm = this;
		vm.pageTitle = 'Single User Title';
		vm.user = null;

		// Fetch Single User with $StateParams (ui-router)
		$http
			.get('https://jsonplaceholder.typicode.com/users/' + $stateParams.userId)
			.then(
				function(res){
					vm.user = res.data;
				}
			)
	}

})();