angular.module('app')
    .controller('BreadcrumbController', ['$rootScope', '$stateParams', '$scope', 'Users', 'Widgets', function ($rootScope, $stateParams, $scope, Users, Widgets) {
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
                case 'widget':
                    var widgetName = Widgets.getSelected().name;
                    $scope.crumb = 'Widgets / ' + (widgetName || 'Unknown Widget');
                    break;
                case 'editWidget':
                    var widgetName = Widgets.getSelected().name;
                    $scope.crumb = 'Widgets / ' + (widgetName || 'Unknown Widget') + ' / Edit';
            }
        })
    }]);