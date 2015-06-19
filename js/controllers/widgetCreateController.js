angular.module('app')
    .controller('WidgetCreateController', ['$scope', 'Widgets', '$state', '$timeout', function ($scope, Widgets, $state, $timeout) {
        $scope.theWidget = {};

        // Save our new widget
        $scope.saveWidget = function(widget) {
            Widgets.newWidget(widget)
                .then(function(response) {

                    // Check the response and display the appropriate message for 5 seconds
                    if(response.status === 201) {
                        $scope.success = true;
                        $timeout(function () {
                            $scope.success = false
                        }, 5000);
                        $scope.widget = {};
                        Widgets.getAll();
                    } else {
                        $scope.error = true;
                        $timeout(function () {
                            $scope.error = false
                        }, 5000);
                    }
                })
        };

    }]);