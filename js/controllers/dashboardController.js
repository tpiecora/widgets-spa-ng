angular.module('app')
    .controller('DashboardController', ['$scope', 'Users', function ($scope, Users) {
        Users.getAll()
            .then(function (response) {
                $scope.users = response.data;
            });
            //TODO - loading spinner
        if ($scope.users) {
            console.log($scope.users);
        }
    }]);