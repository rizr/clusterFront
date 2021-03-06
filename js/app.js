var app = angular.module('app', ["ui.router", "ngResource"]);

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/notFound");

    $stateProvider
        .state('auth', {
            url: '/auth',
            templateUrl: 'js/components/auth/view/signinForm.html',
            controller: 'authController'
        })
        .state('workers', {
            url: '/workers',
            templateUrl: 'js/components/workers/view/workers.html',
            controller: 'workerController'
        })
        .state('tasks', {
            url: '/tasks',
            templateUrl: 'js/components/tasks/view/tasks.html',
            controller: 'taskController'
        })
}]);