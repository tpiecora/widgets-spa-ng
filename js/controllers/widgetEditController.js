angular.module('app')
    .controller('WidgetEditController', ['$scope', 'Widgets', '$state', '$timeout', function ($scope, Widgets, $state, $timeout) {
        $scope.widget = {};
        $scope.theWidget = {
            id: '',
            name: '',
            price: '',
            color: '',
            melts: '',
            inventory: ''
        };
        $scope.theWidget = $scope.widget = Widgets.getSelected();
        console.log($scope.theWidget);

        if(!$scope.theWidget.id) {
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

        // validation to check if price is the right format (price is stored as a string not a number)
        $scope.checkPrice = function() {
            if ($scope.widget.price) {
                return $scope.badPrice = ($scope.widget.price.match(/(?=.)^\$?(([1-9][0-9]{0,2}(,[0-9]{3})*)|0)?(\.[0-9]{1,2})?$/)) ? false : true;
            }
        }

    }]);