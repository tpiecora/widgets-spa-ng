angular.module('app')
    .controller('DashboardController', ['$scope', 'Users', 'Widgets', function ($scope, Users, Widgets) {
        Users.getAll()
            .then(function (response) {
                $scope.users = response.data;
            });
        Widgets.getAll()
            .then(function (response) {
                $scope.widgets = response.data;
            });

            //TODO - loading spinner
        if ($scope.users) {
            console.log($scope.users);
        }
    }]);