angular.module('app')
    .controller('WidgetController', ['$scope', 'Widgets', '$state', function ($scope, Widgets, $state) {
        $scope.widgets = [];

        // Initialize loading spinner
        $scope.widgetFetching = true;

        // Check to see if we fetched user data yet. If not, fetch it
        if (Widgets.data().length) {
            $scope.widgets = Widgets.data();
            $scope.widgetFetching = false;
        } else {
            Widgets.getAll()
                .then(function(response) {
                    $scope.widgets = response.data;
                    $scope.widgetFetching = false;
                })
        }

        // Change state to the selected widget
        $scope.viewWidget = function (id) {
            $state.go('widget', {id: id});
        };

    }]);