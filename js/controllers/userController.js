angular.module('app')
    .controller('UserController', ['$scope', 'Users', '$state', function ($scope, Users, $state) {
        $scope.users = [];

        // Check to see if we fetched user data yet, if not, fetch it
        if (Users.data().length) {
            $scope.users = Users.data();
        } else {
            Users.getAll()
                .then(function(response) {
                    $scope.users = response.data;
                })
        }

        // change state to the selected user
        $scope.viewUser = function (id) {
            $state.go('user', {id: id});
        };
    }]);