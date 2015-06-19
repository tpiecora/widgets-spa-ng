angular.module('app')
    .controller('BreadcrumbController', ['$rootScope', '$stateParams', '$scope', 'Users', function ($rootScope, $stateParams, $scope, Users) {
        $rootScope.$on('$stateChangeSuccess',
        function(event, toState, toParams, fromState, fromParams) {
            switch (toState.name) {
                case 'dashboard':
                    $scope.crumb = 'Dashboard';
                    break;
                case 'users':
                    $scope.crumb = 'Users';
                    break;
                case 'user':
                    var userName = Users.getSelected().name;
                    $scope.crumb = 'Users / ' + (userName || 'Unknown User');
                    break;
                case 'widgets':
                    $scope.crumb = 'Widgets';
                    break;
            }
        })
    }]);