angular.module('app')
    .controller('DashboardController', ['$scope', '$state', function ($scope, $state) {
        console.log($state.current.name);
    }]);