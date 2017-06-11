(function(){
	'use strict';

	angular
		.module('ngTraining')
		.controller('EditUserController', EditUserController);

	function EditUserController($http, $stateParams){
		var vm = this;

		// Initial Values
		vm.post 				= null;
		vm.error 				= null;
		vm.isUserLoaded = false;
		vm.pageTitle 		= 'Edit User Page';


		/**
		* fetchUser - Fetch single User Information
		* @param		id  {int} - User Id 
		* @return 	{object}  - User Information on success
		*/
		function fetchUser(){
			$http
				.get('http://jsonplaceholder.typicode.com/posts/' + $stateParams.userId)
				.then(
					function(res){
						vm.post 				= res.data;
						vm.isUserLoaded = true;
					},
					function(err){
						vm.error 				= err;
						vm.isUserLoaded = true;
					}
				)
		}


		/**
		* updateUser - Update single User Information
		* @param		id  {int} - User Id 
		* @return 	{object}  - User Information on success
		*/
		function updateUser(){
			var postData = {
				titles: vm.post.title,
				bodies: vm.post.body
			}

			$http
				.patch(
					'https://jsonplaceholder.typicode.com/posts/' + $stateParams.userId, 
					postData
				)
				.then(
					function(res){
						vm.post  = res.data;
					},
					function(err){
						vm.error = err;
					}
				)
		}


		//Initialize Functions
		fetchUser();

		//Expose Function
		vm.updateUser = updateUser;

	}
})();