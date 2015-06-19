angular.module('app')
    .controller('WidgetController', ['$scope', 'Widgets', '$state', function ($scope, Widgets, $state) {
        $scope.widgets = [];

        // Check to see if we fetched user data yet, if not, fetch it
        if (Widgets.data().length) {
            $scope.widgets = Widgets.data();
            console.log($scope.widgets);
        } else {
            Widgets.getAll()
                .then(function(response) {
                    $scope.widgets = response.data;
                    console.log($scope.widgets);
                })
        }

        // change state to the selected widget
        $scope.viewWidget = function (id) {
            console.log(id);
            $state.go('widget', {id: id});
        };

    }]);