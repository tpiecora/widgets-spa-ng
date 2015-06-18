angular.module('app')
    .controller('BreadcrumbController', ['$rootScope', '$scope', function ($rootScope, $scope) {
        $rootScope.$on('$stateChangeSuccess',
        function(event, toState, toParams, fromState, fromParams) {
            switch (toState.name) {
                case 'dashboard':
                    $scope.crumb = 'Dashboard';
                    break;
                case 'user':
                    $scope.crumb = 'Users';
                    break;
                case 'widget':
                    $scope.crumb = 'Widgets';
                    break;
            }
        })
    }]);