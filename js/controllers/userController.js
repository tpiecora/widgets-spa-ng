angular.module('app')
    .controller('UserController', ['$scope', 'Users', '$state', '$stateParams', function ($scope, Users, $state , $stateParams) {
        $scope.users = {};

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