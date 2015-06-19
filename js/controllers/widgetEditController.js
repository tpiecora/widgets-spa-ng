angular.module('app')
    .controller('WidgetEditController', ['$scope', 'Widgets', '$state', '$timeout', function ($scope, Widgets, $state, $timeout) {
        $scope.widget = Widgets.getSelected();
        console.log($scope.widget);

        if(!$scope.widget.id) {
            $state.go('widgets');
        }

        $scope.saveWidget = function(widget) {
            Widgets.updateWidget(widget)
                .then(function(response) {
                    if(response.status === 204) {
                        $scope.success = true;
                        $timeout(function() {
                            $scope.success = false
                        },5000);
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