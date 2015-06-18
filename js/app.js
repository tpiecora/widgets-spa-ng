var app = angular.module('app', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('dashboard', {
            url: '/',
            templateUrl: 'partials/dashboard.html',
            controller: 'DashboardController'
        })
        .state('user', {
            url: '/user',
            templateUrl: 'partials/user.html',
            controller: 'UserController'
        })
        .state('widget', {
            url: '/widget',
            templateUrl: 'partials/widget.html',
            controller: 'WidgetController'
        })

    $locationProvider.html5Mode(true);
}]);

app.constant('api', {
    'url': 'http://spa.tglrw.com',
    'port': '4000'
});