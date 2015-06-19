angular.module('app')
    .controller('WidgetCreateController', ['$scope', 'Widgets', '$state', function ($scope, Widgets, $state) {
        $scope.widget = {};
        console.log('create widget');

        $scope.saveWidget = function(widget) {

            Widgets.newWidget(widget)
                .then(function(response) {
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