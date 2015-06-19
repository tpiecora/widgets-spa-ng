var app = angular.module('app', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('dashboard', {
            url: '/',
            templateUrl: 'partials/dashboard.html',
            controller: 'DashboardController'
        })

        .state('users', {
            url: '/users',
            templateUrl: 'partials/users.html',
            controller: 'UserController'
        })
        .state('user', {
            url: '/users/:id',
            templateUrl: 'partials/user.html',
            resolve: {
                // retrieves the selected user from the API and stores so we can produce breadcrumb
                selected: function ($stateParams, Users) {
                    return Users.getOne($stateParams.id)
                        .then(function (response) {
                            Users.setSelected(response.data);
                            return response.data;
                        });
                }
            },
            controller: function ($scope, $stateParams, selected) {
                $scope.user = selected;

            }
        })

        .state('widgets', {
            url: '/widgets',
            templateUrl: 'partials/widgets.html',
            controller: 'WidgetController'
        })
        .state('widget', {
            url: '/widgets/:id',
            templateUrl: 'partials/widget.html',
            resolve: {
                // retrieves the selected user from the API and stores so we can produce breadcrumb
                selected: function ($stateParams, Widgets) {
                    return Widgets.getOne($stateParams.id)
                        .then(function (response) {
                            Widgets.setSelected(response.data);
                            return response.data;
                        });
                }
            },
            controller: function ($scope, $stateParams, selected) {
                $scope.widget = selected;

            }
        });


    //$locationProvider.html5Mode(true);
}]);

app.constant('api', {
    'url': 'http://spa.tglrw.com',
    'port': '4000'
});