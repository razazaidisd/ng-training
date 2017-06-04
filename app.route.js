(function(){
	'use strict';

	angular
		.module('ngTraining')
		.config(routeConfig);

	function routeConfig($stateProvider) {
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'app/modules/home/home.html',
          controller: 'HomeController',
          controllerAs: 'vm'
        })
        .state('people', {
          url: '/people',
          templateUrl: 'app/modules/people/people.html',
          controller: 'PeopleController',
          controllerAs: 'vm'
        })
        .state('settings', {
          url: '/settings',
          template: '<h3>Settings</h3>'
        })

    }


})();