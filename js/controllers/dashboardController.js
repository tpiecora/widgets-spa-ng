angular.module('app')
    .controller('DashboardController', ['$scope', 'Users', 'Widgets', '$state', function ($scope, Users, Widgets, $state) {
        $scope.userFetching = true;
        $scope.widgetFetching = true;

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

        // change state to the selected widget
        $scope.viewWidget = function (id) {
            console.log(id);
            $state.go('widget', {id: id});
        };

        // change state to the selected user
        $scope.viewUser = function (id) {
            $state.go('user', {id: id});
        };
    }]);