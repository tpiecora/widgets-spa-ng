angular.module('app')
    .controller('BreadcrumbController', ['$rootScope', '$stateParams', '$scope', 'Users', 'Widgets', '$sce', function ($rootScope, $stateParams, $scope, Users, Widgets, $sce) {
        $rootScope.$on('$stateChangeSuccess',
        function(event, toState, toParams, fromState, fromParams) {
            var widgetName, widgetId, userName;

            // Determine state and build breadcrumb
            switch (toState.name) {
                case 'dashboard':
                    $scope.crumb = 'Dashboard';
                    break;
                case 'users':
                    $scope.crumb = 'Users';
                    break;
                case 'user':
                    userName = Users.getSelected().name;
                    $scope.crumb = $sce.trustAsHtml('<a href="#/users">Users</a> / ' + (userName || 'Unknown User'));
                    break;
                case 'widgets':
                    $scope.crumb = 'Widgets';
                    break;
                case 'widget':
                    widgetName = Widgets.getSelected().name;
                    $scope.crumb = $sce.trustAsHtml('<a href="#/widgets">Widgets</a> / ' + (widgetName || 'Unknown Widget'));
                    break;
                case 'editWidget':
                    widgetName = Widgets.getSelected().name;
                    widgetId = Widgets.getSelected().id;
                    $scope.crumb = $sce.trustAsHtml('<a href="#/widgets" ui-sref="widgets">Widgets</a> / <a href="#/widgets/' + widgetId + '">' + (widgetName || 'Unknown Widget') + '</a> / Edit');
                    break;
                case 'createWidget':
                    $scope.crumb = 'Create Widget';
                    break;
            }
        })
    }]);