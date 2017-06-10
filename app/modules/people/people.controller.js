(function(){
	'use strict';
	angular
		.module('ngTraining')
		.controller('PeopleController', PeopleController)

	function PeopleController($http) {
		var vm = this;
		vm.users = [];
		vm.error = null;
		vm.isUsersLoaded = false;
		console.log('I am in PeopleController');


		function fetchUsers(){
			$http
				.get('https://jsonplaceholder.typicode.com/users')
				.then(
					function(response){
						console.log('people got data');
						vm.isUsersLoaded = true;	
						vm.users = response.data;
					},	
					function(error){
						vm.isUsersLoaded = true;
						vm.error = 'Error: Something went wrong with ' + error.status + ' Status.';
					}
				)
		}






		fetchUsers();
	}

})();