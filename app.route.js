(function(){
	'use strict';

	angular
		.module('ngTraining')
		.config(routeConfig);

	function routeConfig($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/not-found');
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
        .state('people.singleUser', {
          url: '/user/{userId}',
          templateUrl: 'app/modules/people/single-user.html',
          controller: 'UserController',
          controllerAs: 'vm'
        })
        .state('settings', {
          url: '/settings',
          template: '<h3>Settings</h3>'
        })
        .state('not-found', {
          url: '/not-found',
          template: '<h1>PAGE NOT FOUND</h1>'
        })
    }
        


})();