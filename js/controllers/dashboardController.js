angular.module('app')
    .controller('DashboardController', ['$scope', 'Users', 'Widgets', '$state', function ($scope, Users, Widgets, $state) {
        // Initialize loading spinners
        $scope.userFetching = true;
        $scope.widgetFetching = true;

        // Initial data fetch
        Users.getAll()
            .then(function (response) {
                $scope.users = response.data;
                $scope.userFetching = false;
            });
        Widgets.getAll()
            .then(function (response) {
                $scope.widgets = response.data;
                $scope.widgetFetching = false;
            });

        // Change state to the selected widget
        $scope.viewWidget = function (id) {
            $state.go('widget', {id: id});
        };

        // Change state to the selected user
        $scope.viewUser = function (id) {
            $state.go('user', {id: id});
        };
    }]);