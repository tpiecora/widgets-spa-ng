angular.module('app')
    .controller('UserController', ['$scope', 'Users', '$state', function ($scope, Users, $state) {
        $scope.users = [];
        // Initialize loading spinner
        $scope.userFetching = true;

        // Check to see if we fetched user data yet. If not, fetch it
        if (Users.data().length) {
            $scope.users = Users.data();
            $scope.userFetching = false;
        } else {
            Users.getAll()
                .then(function(response) {
                    $scope.users = response.data;
                    $scope.userFetching = false;
                })
        }

        // Change state to the selected user
        $scope.viewUser = function (id) {
            $state.go('user', {id: id});
        };
    }]);